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
import { IActions } from '../Actions';
import { Badge } from '../ui/badge';
import { Pen } from 'lucide-react';
import { useState } from 'react';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' }),
  subcategories: z.array(z.string())
});

export function ViewCategoryForm({ category }: IActions) {
  const [isNameEditable, setIsNameEditable] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: category?.name,
      description: category?.description,
      subcategories: category?.subcategories ?? []
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
                    className="cursor-pointer"
                  >
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
                <Textarea placeholder={category?.description} />
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
              <FormLabel className="text-sm">
                SubCategories{' '}
                <Badge variant={'outline'} className="rounded-[5px] text-primary">
                  {category?.subcategories.length}
                </Badge>
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="" className=" " {...field} disabled />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="border-t mt-28 flex justify-end ">
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
