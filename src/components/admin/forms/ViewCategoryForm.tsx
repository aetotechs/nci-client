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
import { Badge } from '../../common/ui/badge';
import { Pen } from 'lucide-react';
import { useState } from 'react';
import { ICategories } from '../tables/Categories';
import { EditCategory } from '@/utils/hooks/api-routes';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' }),
  subCategories: z.array(z.string())
});
interface EditCategoryProps {
  category: ICategories;
  onClose: () => void;
}
export function ViewCategoryForm({ category, onClose }: EditCategoryProps) {
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [submitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: category?.name,
      description: category?.description,
      subCategories: category?.subCategories ?? []
    }
  });
 
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {


    const payload = {
      ...values,
      subCategories: category?.subCategories,
    };
    
   
    setIsSubmitting(true);
    try {
      const response = await fetch(EditCategory(category?.name), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data= await response.json();
      console.log(data);
      if (response.status === 200) {
        toast.success(
          <div className="flex gap-1 items-center">Category editted Successfully.</div>,
          {
            style: {
              background: '#007BFF1A',
              color: '#007BFF',
              border: '1px solid #007BFF80'
            }
          }
        );

        form.reset();
        onClose();
      } else {
       const text= await response.text();
        toast.error(text, {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-6 ">
        <div className="flex justify-between mt-4">
          <span>ID</span>
          <span className="text-texthighlight">#{category?.id}</span>
        </div>

        <div className="">
          <div className="">
            {isNameEditable ? (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Name"
                        className="h-10"
                        {...field}
                        disabled={!isNameEditable}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <div className="flex justify-between">
                <span>Name</span>
                <div className="flex gap-1">
                  <span className="font-medium text-sm">{category?.name}</span>
                  <span
                    onClick={() => setIsNameEditable(!isNameEditable)}
                    className="cursor-pointer">
                    <Pen className="h-4 w-4" />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="" className="h-10 " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder={category?.description} className='border' />
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
              <FormLabel className="text-sm">
                SubCategories{' '}
                <Badge variant={'outline'} className="rounded-[5px] text-primary">
                  {category?.subCategories.length}
                </Badge>
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="" className=" " {...field} disabled />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="border-t mt-10 flex justify-end ">
          <Button
            type="submit"
            className=" font-normal my-2 text-sm border border-primary text-white px-2 h-[44px]"
            disabled={submitting}>
            {submitting ? 'Submitting...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
