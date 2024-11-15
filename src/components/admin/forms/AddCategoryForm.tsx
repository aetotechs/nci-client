import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';

import { toast } from 'sonner';
import { Textarea } from '../../common/ui/textarea';
import { AddCategory } from '@/utils/hooks/api-routes';
import { useState } from 'react';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' }),
  subCategories: z.array(z.string()).nonempty({ message: 'Subcategories are required' })
});

export function CategoryForm({ onClose }: { onClose: () => void }) {
  const [submitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      description: '',
      subCategories: []
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(AddCategory, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (response.status === 200) {
        toast.success(<div className="flex gap-1 items-center">Category added Successfully.</div>, {
          style: {
            background: '#007BFF1A',
            color: '#007BFF',
            border: '1px solid #007BFF80'
          }
        });

        form.reset();
        onClose();
      } else {
        toast.error('Category already exists', {
          style: {
            backgroundColor: '#F443361A',
            color: '#F44336',
            border: '1px solid #F4433680'
          }
        });
      }
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="" className="h-10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type description for category here"
                  className="border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subCategories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subcategories</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Separate subcategories by commas"
                  className=""
                  {...field}
                  onChange={(e) => field.onChange(e.target.value.split(',').map((s) => s.trim()))} // Convert input to array
                />
              </FormControl>
              <FormDescription>Separate subcategories with commas.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="border-t mt-5 flex justify-end">
          <Button
            type="submit"
            className="font-normal my-2 text-sm border border-primary text-white  h-[44px]"
          >
            {submitting ? 'Submitting...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
