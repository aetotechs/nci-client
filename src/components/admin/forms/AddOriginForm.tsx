import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';

import { Textarea } from '../../common/ui/textarea';
import { useRef, useState } from 'react';
import { AddOrigin } from '@/utils/hooks/api-routes';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' })
});

export function OriginForm({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(AddOrigin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        SuccessToast('Origin Added Successfully,..');
        form.reset();
        onClose();
      } else {
        const data = await response.text();
        ErrorToast(data);
      }
    } catch (error) {
      ErrorToast('Error logging you in, try again');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <Input
                  type="text"
                  placeholder="Enter Name of Country"
                  className="h-10 "
                  {...field}
                />
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
                  placeholder="Type description for origin here"
                  className="border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="border-t md:mt-60 flex justify-end">
          <Button
            type="submit"
            className=" font-normal my-2 text-sm border border-primary text-white px-4 h-[44px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
