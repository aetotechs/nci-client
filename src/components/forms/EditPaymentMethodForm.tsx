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
  expiryDate: z.string().min(2, { message: 'Date must be at least 2 characters.' }),
  cv: z.string().min(4, { message: 'cv must be at least 4 characters.' }),
  country: z.string().min(2, {
    message: 'email must be at least 2 characters.'
  }),
  state: z.string().min(2, { message: 'Field is required' }),
  street: z.string().min(2, { message: 'password must be at least 2 characters.' }),
  zipcode: z.string().min(2, { message: 'Field is required' }),
  city: z.string().min(2, { message: 'Field is required' })
});

export function EditMethodForm() {
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid grid-cols-2 gap-3 ">
          <div className="font-meduim col-span-2 items-center gap-2">Credit Card Details</div>
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
          <div className="font-meduim col-span-2 items-center gap-2">Card Holder Address</div>
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your country" {...field} />
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
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your city" {...field} />
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
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your   state" {...field} />
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
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your street" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your zipcode" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full font-normal text-base col-span-2">
            Save
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
}
