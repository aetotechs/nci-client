import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ScrollArea } from '@/components/common/ui/scroll-area';

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
import { useState } from 'react';

const FormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: 'Field is required.'
    }),
    lastName: z.string().min(2, { message: 'Field is required' }),
    email: z.string().email().min(2, { message: 'Field is required.' }),
    workPhone: z
      .string()
      .min(2, { message: 'Field is required' })
      .max(15, { message: 'Field is too long' }),
    position: z.string().min(2, { message: 'Field is required' }),
    company: z.string().min(2, { message: 'Field is required' }),
    companyWebsiteUrl: z.string().min(2, { message: 'Field is required' }),
    password: z.string().min(2, { message: 'Field is required' }),
    confirmPassword: z.string().min(2, { message: 'Field is required' }),

    country: z.string().optional(),
    state: z.string().optional(),
    street: z.string().optional(),
    zip: z.string().optional(),
    city: z.string().optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export function AddCustomerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      workPhone: '',
      company: '',
      companyWebsiteUrl: '',
      position: '',
      password: '',

      country: '',
      city: '',
      state: '',
      street: '',
      zip: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {};

  return (
    <ScrollArea className="md: h-[90vh] w-full border-none rounded-md border">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col md:grid md:grid-cols-2 gap-5 "
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-[15px] ">First Name *</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-[15px] ">Last Name*</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-[15px] ">Work Phone*</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-[15px] ">Work Email*</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-normal text-[15px] ">Position*</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-[15px] ">Company *</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyWebsiteUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-[15px] ">Company Website*</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country *</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City*</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>State*</FormLabel>
                <FormControl>
                  <Input type="text" {...field} className="h-9" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street*</FormLabel>
                <FormControl>
                  <Input type="text" {...field} className="h-9" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code*</FormLabel>
                <FormControl>
                  <Input type="text" className="h-9" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="border-t mt-6 flex col-span-2 justify-end w-full py-5">
            <Button type="submit" className="col-span-2 h-10 mx-3" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </ScrollArea>
  );
}
