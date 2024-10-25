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
import { Link } from 'react-router-dom';

import { Checkbox } from '@/components/common/ui/checkbox';

// Updated Schema for MM/YY format
const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  number: z.string().min(2, { message: 'Number must be at least 2 characters.' }),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Date must be in MM/YY format.' })
    .max(5),
  cv: z.string().min(3, { message: 'CVV must be at least 3 digits.' })
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
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-[90%] grid grid-cols-2 gap-3  md:space-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-2 md:space-y-2 space-y-1">
              <FormLabel className="font-medium text-[13px]">CardHolder Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Name on card"
                  className="h-[38px]  placeholder:text-[13px] "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem className="md:my-2 col-span-2 md:space-y-2 space-y-1">
              <FormLabel className="font-medium text-[13px]">Card Number</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="*** *** ***"
                  className="h-[38px] placeholder:text-[13px] "
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
            <FormItem className="col-span-1 md:space-y-2 space-y-1">
              <FormLabel className="font-medium text-[13px]">Expiration</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  maxLength={5}
                  placeholder="MM/YY"
                  className="h-[38px] placeholder:text-[13px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cv"
          render={({ field }) => (
            <FormItem className="col-span-1 md:space-y-2 space-y-1">
              <FormLabel className="font-medium text-[13px]">CVV</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="000"
                  className="h-[38px] placeholder:text-[13px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex col-span-2 items-center gap-2 my-2 md:my-0">
          <Checkbox className="h-3 w-3" />
          <span className="text-[12px]">Save payment details for future purchase</span>
        </div>
        <Link to="/close-shop" className="col-span-2">
          <Button type="submit" className="w-full font-normal h-10 text-[13px] col-span-2">
            Place Order
          </Button>
        </Link>
      </form>
    </Form>
  );
}
