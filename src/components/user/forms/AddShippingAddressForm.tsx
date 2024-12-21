import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';
import { getAuthUser, setAuthUser } from '@/utils/cookies/UserCookieManager';
import { api_urls } from '@/utils/commons/api-urls';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Button } from '@/components/ui/button';
import { SuccessToast } from '@/components/common/ui/Toasts';

const FormSchema = z.object({
  country: z.string().min(2, {
    message: 'Field is required.'
  }),
  state: z.string().min(2, { message: 'Field is required' }),
  street: z.string().min(2, { message: 'Field is required.' }),
  zipcode: z.string().min(2, { message: 'Field is required' }),
  city: z.string().min(2, { message: 'Field is required' })
});

export function ShippingAddressForm({ onSuccess }: { onSuccess: () => void }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      country: '',
      city: '',
      state: '',
      street: '',
      zipcode: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log('values submitted', values);
      fetch(api_urls.users.account.updateAccount(getAuthUser().email), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...values}),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update address');
          }
          return response.json();
        })
        .then((data) => {
          SuccessToast('Address updated successfully')
          setAuthUser(data);
          onSuccess();
        })
        .catch((error) => {
          console.error('Error updating address:', error);
        });
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
