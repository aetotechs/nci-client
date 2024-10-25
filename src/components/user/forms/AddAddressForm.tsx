import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ScrollArea } from '@/components/common/ui/scroll-area';
import { Checkbox } from '@/components/common/ui/checkbox';

import { Button } from '@/components/common/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';

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
  city: z.string().min(2, { message: 'Field is required' }),
  shipping: z.boolean().default(false).optional(),
  billing: z.boolean().default(false).optional()
});

export function AddAddressForm() {
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
      zipcode: '',
      shipping: false,
      billing: false
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
          className="w-full flex flex-col md:grid gap-2 md:grid-cols-2 md:gap-5  "
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
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Last Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
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
            name="workPhone"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Work Phone</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your contact"
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
            name="workEmail"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Work Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your email"
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
            name="companyName"
            render={({ field }) => (
              <FormItem className="col-span-2 space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Company</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter company name"
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
            name="country"
            render={({ field }) => (
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Country</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your country"
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
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">City</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your city"
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
                <FormLabel className="font-normal text-[15px] md:text-base ">State</FormLabel>
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
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Street</FormLabel>
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
              <FormItem className="space-y-1 md:space-y-2">
                <FormLabel className="font-normal text-[15px] md:text-base ">Zip Code</FormLabel>
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
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="shipping"
              render={({ field }) => (
                <FormItem className="  flex flex-row items-center space-x-2 space-y-0 rounded-md py-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>Set as Shipping Address</FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billing"
              render={({ field }) => (
                <FormItem className="  flex flex-row items-center space-x-2 space-y-0 rounded-md  py-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>Set as Billing Address</FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="col-span-2 text-sm md:text-base">
            Save
          </Button>
        </form>
      </Form>
    </ScrollArea>
  );
}
