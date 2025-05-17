
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Eye, EyeOff, MoreVertical, Copy, Trash, Edit, Key } from 'lucide-react';
import { PasswordEntry as PasswordEntryType } from './AddPasswordForm';
import { copyToClipboard } from '@/utils/passwordUtils';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PasswordEntryProps {
  entry: PasswordEntryType;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedEntry: Partial<PasswordEntryType>) => void;
}

const PasswordEntry: React.FC<PasswordEntryProps> = ({ entry, onDelete, onUpdate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { toast } = useToast();

  // Get favicon for the website
  const favicon = `https://www.google.com/s2/favicons?domain=${entry.domain}&sz=128`;
  
  const handleCopyUsername = async () => {
    const success = await copyToClipboard(entry.username);
    if (success) {
      toast({
        title: "Username copied",
        description: "Username has been copied to clipboard",
      });
    }
  };
  
  const handleCopyPassword = async () => {
    const success = await copyToClipboard(entry.password);
    if (success) {
      toast({
        title: "Password copied",
        description: "Password has been copied to clipboard",
      });
    }
  };

  const handleSaveEdit = () => {
    onUpdate(entry.id, editedEntry);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(entry.id);
    setShowDeleteDialog(false);
  };

  // Format the date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  if (isEditing) {
    return (
      <Card className="mb-3 overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
        <CardContent className="p-4 space-y-4">
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="edit-website">Website URL</Label>
              <Input
                id="edit-website"
                value={editedEntry.website}
                onChange={(e) => setEditedEntry({...editedEntry, website: e.target.value})}
              />
            </div>
            
            <div className="grid gap-1.5">
              <Label htmlFor="edit-username">Username</Label>
              <Input
                id="edit-username"
                value={editedEntry.username}
                onChange={(e) => setEditedEntry({...editedEntry, username: e.target.value})}
              />
            </div>
            
            <div className="grid gap-1.5">
              <Label htmlFor="edit-password">Password</Label>
              <div className="relative">
                <Input
                  id="edit-password"
                  type={showPassword ? 'text' : 'password'}
                  value={editedEntry.password}
                  onChange={(e) => setEditedEntry({...editedEntry, password: e.target.value})}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <div className="grid gap-1.5">
              <Label htmlFor="edit-notes">Notes</Label>
              <Input
                id="edit-notes"
                value={editedEntry.notes || ''}
                onChange={(e) => setEditedEntry({...editedEntry, notes: e.target.value})}
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="mb-3 overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
        <CardContent className="p-0">
          <div className="flex items-center p-4">
            <div className="h-10 w-10 flex-shrink-0 mr-4">
              {favicon ? (
                <img 
                  src={favicon} 
                  alt={`${entry.domain} favicon`} 
                  className="h-full w-full rounded-md object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              ) : (
                <div className="h-full w-full bg-gray-200 rounded-md flex items-center justify-center">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
              )}
            </div>
            
            <div className="flex-grow min-w-0">
              <div className="flex items-center">
                <h3 className="font-medium truncate">{entry.domain}</h3>
                <Badge variant="outline" className="ml-2 text-xs">
                  {formatDate(entry.createdAt)}
                </Badge>
              </div>
              <div className="text-sm text-gray-500 truncate">{entry.username}</div>
            </div>
            
            <div className="flex items-center space-x-1 ml-2">
              <Button variant="ghost" size="icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleCopyUsername}>
                    <Copy className="mr-2 h-4 w-4" />
                    <span>Copy Username</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleCopyPassword}>
                    <Key className="mr-2 h-4 w-4" />
                    <span>Copy Password</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsEditing(true)}>
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setShowDeleteDialog(true)}>
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {showPassword && (
            <div className="px-4 pb-4 pt-0">
              <div className="p-2 bg-gray-50 rounded-md font-mono text-sm break-all">
                {entry.password}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Password</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete the password for <strong>{entry.domain}</strong>?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PasswordEntry;
