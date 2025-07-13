// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/vaultDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

function generateKeyPair() {
  return { publicKey: 7, privateKey: 3 };
}

function storePasswordWithHomomorphicEncryption(entry, keyPair) {
  // Dummy logic: convert password characters to char codes × publicKey
  const encrypted = entry.password.split('').map(ch => ch.charCodeAt(0) * keyPair.publicKey);
  return {
    encryptedPassword: {
      ciphertext: encrypted,
      publicKey: keyPair.publicKey,
      noise: 1,
    }
  };
}

function retrievePasswordWithHomomorphicDecryption(encryptedEntry, keyPair) {
  const decryptedChars = encryptedEntry.ciphertext.map(num => 
    String.fromCharCode(Math.floor(num / keyPair.publicKey))
  );
  return decryptedChars.join('');
}
// Define password schema
const passwordSchema = new mongoose.Schema({
  site: String,
  username: String,
  password: String,
});

const Password = mongoose.model('Password', passwordSchema);


// Route to save password
app.post('/save-password', async (req, res) => {
    const { website, username, password } = req.body;
    if (!website || !username || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const keyPair = generateKeyPair();
    const encrypted = storePasswordWithHomomorphicEncryption({ password }, keyPair);

        const newPass = new Password({ 
            site: website,
             username, 
             password:JSON.stringify(encrypted.encryptedPassword) });
        await newPass.save();
        res.status(201).json({ message: "Password saved!" });
    } catch (err) {
        res.status(500).json({ message: "Error saving password" });
    }
});
app.get('/get-passwords', async (req, res) => {
  try {
    const entries = await Password.find();
    const keyPair = generateKeyPair();

    const decrypted = entries.map(entry => {
      const encryptedObj = JSON.parse(entry.password);
      const decryptedPassword = retrievePasswordWithHomomorphicDecryption(encryptedObj, keyPair);
      return {
        website: entry.site,
        username: entry.username,
        password: decryptedPassword
      };
    });

    res.json(decrypted);
  } catch (err) {
    console.error("❌ Fetch Error:", err);
    res.status(500).json({ message: "Error fetching passwords" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));