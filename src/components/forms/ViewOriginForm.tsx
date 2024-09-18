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
  description: z.string().min(2, { message: 'Field is required' })
});

export function ViewOriginForm({ origin }: IActions) {
  const [isNameEditable, setIsNameEditable] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: origin?.name,
      description: origin?.description
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast('Origin Added Successfulyy ...', {
      className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-6 ">
        <div className="flex justify-between mt-4">
          <span>ID</span>
          <span className="text-texthighlight">#{origin?.id}</span>
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
                  <span className="font-medium text-sm">{origin?.name}</span>
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

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder={origin?.description} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-1'>
          <span className='font-medium text-[15px]'>Regions</span>

          <Badge variant={'outline'} className="rounded-[5px] text-primary">
            {origin?.numberOfRegions}
          </Badge>
        </div>

        <div className="border-t mt-48 flex justify-end ">
          <Button
            type="submit"
            className=" font-normal my-2 text-sm border border-primary text-white md:w-[82px] h-[44px]">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
