import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

import { Checkbox } from '@/components/ui/checkbox';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters.'
  }),
  number: z.string().min(2, { message: 'number must be at least 2 characters.' }),
  expiryDate: z.string().min(2, { message: 'Date must be at least 2 characters.' }),
  cv: z.string().min(4, { message: 'cv must be at least 4 characters.' })
});

export function PaymentForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      number: '',
      expiryDate: '',
      cv: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    // toast('Order Placed Successfully...', {
    //   className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    // });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full grid grid-cols-2 gap-3 space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="font-medium text-base">CardHolder Name</FormLabel>

              <FormControl>
                <Input type="text" placeholder="Name on card" className="h-12 " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem className="my-2 col-span-2">
              <FormLabel className="font-medium text-base ">Card Number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="*** *** ***"
                  className="h-12  ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0  "
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="font-medium text-base">Expiration</FormLabel>

              <FormControl>
                <Input type="date" className="h-12 " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cv"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="font-medium text-base">Cvv</FormLabel>

              <FormControl>
                <Input type="text" placeholder="000" className="h-12 " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex  m  col-span-2 items-center gap-2">
          <Checkbox />
          <span className="text-sm">Save payment details for future purchase</span>
        </div>
        <Link to="/close-shop " className="col-span-2">
          <Button type="submit" className="w-full font-normal text-base col-span-2">
            Place Order
          </Button>
        </Link>
      </form>
    </Form>
  );
}
