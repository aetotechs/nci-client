import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ScrollArea } from '@/components/ui/scroll-area';

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

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Field is required.'
  }),
  lastName: z.string().min(2, { message: 'Field is required' }),
  workEmail: z.string().min(2, { message: 'Field is required.' }),
  workPhone: z.string().min(2, { message: 'Field is required' }),

  companyName: z.string().min(2, { message: 'Field is required' }),

  country: z.string().min(2, {
    message: 'Field is required.'
  }),
  state: z.string().min(2, { message: 'Field is required' }),
  street: z.string().min(2, { message: 'Field is required.' }),
  zipcode: z.string().min(2, { message: 'Field is required' }),
  city: z.string().min(2, { message: 'Field is required' })
});

export function ShippingAddressForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      workEmail: '',
      workPhone: '',
      companyName: '',
      country: '',
      city: '',
      state: '',
      street: '',
      zipcode: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log('values submitted', values);
  }

  return (
    <ScrollArea className="h-[400px]  rounded-md border p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5  "
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">First Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
                    {...field}
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
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Last Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workPhone"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Work Phone</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your contact"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workEmail"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Work Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your email"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="col-span-2 space-y-1 md:space-y-2 ">
                <FormLabel className="font-normal text-[15px] md:text-base ">Company</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter company name"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Country</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your country"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
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
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">City</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your city"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
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
                <FormLabel className="font-normal text-[15px] md:text-base ">State</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your state "
                    className="placeholder:text-[13px] h-[38px] md:h-10"
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
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Street</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your street"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
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
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Zip Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your zipcode"
                    className="placeholder:text-[13px] h-[38px] md:h-10"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="col-span-2">
            Save Changes
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
}
