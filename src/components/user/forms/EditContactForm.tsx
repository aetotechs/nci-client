import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
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
import { ProfileProps } from '@/pages/user/Profile';

import { Register } from '@/utils/hooks/api-routes';
import { toast } from 'sonner';

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Field is required.'
  }),
  lastName: z.string().min(2, { message: 'Field is required' }),
  email: z.string().email({ message: 'Invalid email address.' })
});

export function EditContactForm({ user }: ProfileProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email
    }
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      setIsSubmitting(true);

      const updatedUser = {
        ...user,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email
      };

      const response = await fetch(Register, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to update user details');
      }

      toast.success('User details updated successfully!');
      const data = await response.json();
      console.log('Updated user:', data);
    } catch (error) {
      console.error(error);
      toast.error('Error updating user details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-5 "
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="space-y-[3px] md:space-y-2">
              <FormLabel className="font-normal text-[15px] md:text-base ">First Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  disabled={isSubmitting}
                  className="placeholder:text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="space-y-[3px] md:space-y-2">
              <FormLabel className="font-normal text-[15px] md:text-base ">Last Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  disabled={isSubmitting}
                  className="placeholder:text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2 space-y-[3px] md:space-y-2">
              <FormLabel className="font-normal text-[15px] md:text-base">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  disabled={isSubmitting}
                  className="placeholder:text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="col-span-2 my-2 md:my-0" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </Button>
      </form>
    </Form>
  );
}
