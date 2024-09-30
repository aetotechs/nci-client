import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { toast } from 'sonner';
import { Textarea } from '../ui/textarea';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' }),
  subcategories: z.string().min(2, { message: 'Field is required' })
});

export function CategoryForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      description: '',
      subcategories: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast('Category Added Successfulyy ...', {
      className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-6 ">
        <FormField
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
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Type description for category here" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subcategories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SubCategories</FormLabel>
              <FormControl>
                <Input type="text" placeholder="" className=" " {...field} />
              </FormControl>
              <FormDescription>
                Separate words with a comma, space bar, or enter key .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="border-t mt-5 flex justify-end ">
          <Button
            type="submit"
            className=" font-normal my-2 text-sm border border-primary text-white md:w-[82px] h-[44px]"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
