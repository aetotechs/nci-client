import { Button } from '@/components/common/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/common/ui/dialog';

import { Trash2Icon } from 'lucide-react';
import { IEditCategoryProps } from './ViewCategory';
import { useState } from 'react';
import { toast } from 'sonner';
import { EditCategory } from '@/utils/hooks/api-routes';
import { getUserToken } from '@/utils/cookies/UserCookieManager';

export function DeleteDialog({ category }: IEditCategoryProps) {
  const token: string | null = getUserToken();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(EditCategory(category?.name), {
        method: 'DELETE',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      if (response.ok) {
        toast.success('Category deleted successfully.', {
          style: {
            background: '#007BFF1A',
            color: '#007BFF',
            border: '1px solid #007BFF80'
          }
        });
        setIsDialogOpen(false);
      } else {
        const data = await response.json();
        toast.error(data.message || 'Failed to delete category.', {
          style: {
            backgroundColor: '#F443361A',
            color: '#F44336',
            border: '1px solid #F4433680'
          }
        });
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('An unexpected error occurred. Please try again later.', {
        style: {
          backgroundColor: '#F443361A',
          color: '#F44336',
          border: '1px solid #F4433680'
        }
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center justify-center -mt-1 pl-3 gap-2 cursor-pointer">
          <Trash2Icon className="h-[14px] w-[14px]" />
          <span className="text-[13px] font-normal">Delete</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-sm">
            Are you sure you want to delete this category?
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 border border-red-400 bg-destructive text-red-500 p-2 rounded-[5px]">
          <div className="flex gap-1 items-center ">
            <span>
              <img src="/icons/warning.svg" width={12} height={10} alt="Warning" />
            </span>
            <span className="font-medium">Warning</span>
          </div>
          <span className="text-[12px] font-normal">
            By deleting this category, all its subcategories will also be permanently deleted.
          </span>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            className="text-white bg-red-400"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </Button>
          <Button variant="ghost" onClick={handleClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
