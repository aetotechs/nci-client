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
import { ScrollArea } from '@/components/ui/scroll-area';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters.'
  }),
  number: z.string().min(2, { message: 'number must be at least 2 characters.' }),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Date must be in MM/YY format.' })
    .max(5),
  cv: z.string().min(4, { message: 'cv must be at least 4 characters.' }),
  country: z.string().min(2, {
    message: 'email must be at least 2 characters.'
  }),
  state: z.string().min(2, { message: 'Field is required' }),
  street: z.string().min(2, { message: 'password must be at least 2 characters.' }),
  zipcode: z.string().min(2, { message: 'Field is required' }),
  city: z.string().min(2, { message: 'Field is required' })
});

export function PaymentMethodForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      number: '',
      expiryDate: '',
      cv: '',
      country: '',
      city: '',
      state: '',
      street: '',
      zipcode: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    // toast('Order Placed Successfully...', {
    //   className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    // });
    console.log('values submitted', values);
  }

  return (
    <ScrollArea className="h-[400px]  rounded-md border p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid grid-cols-2 gap-2 ">
          <div className="font-medium col-span-2 items-center gap-2">Credit Card Details</div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2 space-y-1 md:space-y-2">
                <FormLabel className="  text-base font-normal text-[15px] md:text-base  ">
                  Card Holder Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name on card"
                    className="h-10 placeholder:text-sm "
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
              <FormItem className=" col-span-2 space-y-1 md:space-y-2">
                <FormLabel className=" text-base font-normal text-[15px] md:text-base  ">
                  Card Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="*** *** ***"
                    className="h-10  ring-offset-0 focus-visible:ring-0 placeholder:text-sm  focus-visible:ring-offset-0  "
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
              <FormItem className="md:col-span-1 col-span-2 space-y-1 md:space-y-2">
                <FormLabel className=" text-base font-normal text-[15px] md:text-base  ">
                  Expiration
                </FormLabel>

                <FormControl>
                  <Input
                    type="text"
                    maxLength={5}
                    placeholder="MM/YY"
                    className="h-10 placeholder:text-sm"
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
              <FormItem className="md:col-span-1 col-span-2 space-y-1 md:space-y-2">
                <FormLabel className=" text-base font-normal text-[15px] md:text-base  ">
                  Cvv
                </FormLabel>

                <FormControl>
                  <Input
                    type="text"
                    placeholder="000"
                    className="h-10 placeholder:text-sm "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="font-medium col-span-2 items-center gap-2">Card Holder Address</div>
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2 col-span-2 md:col-span-1">
                <FormLabel className=" text-base font-normal text-[15px] md:text-base  ">
                  Country
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your country "
                    className="placeholder:text-sm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2 col-span-2 md:col-span-1">
                <FormLabel className=" text-base font-normal text-[15px] md:text-base  ">
                  City
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your city "
                    className="placeholder:text-sm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="col-span-2 space-y-1 md:space-y-2">
                <FormLabel className=" text-base font-normal text-[15px] md:text-base  ">
                  State
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your state"
                    className="placeholder:text-sm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="space-y-1 col-span-2 md:col-span-1 md:space-y-2">
                <FormLabel className=" text-base font-normal text-[15px] md:text-base  ">
                  Street
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your street"
                    className="placeholder:text-sm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem className="space-y-1 col-span-2 md:col-span-1 md:space-y-2">
                <FormLabel className=" text-base font-normal text-[15px] md:text-base  ">
                  Zip Code
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your zipcode"
                    className="placeholder:text-sm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full font-normal text-sm md:text-base col-span-2">
            Save
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
}
