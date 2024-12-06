import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';
import { useLoading } from '@/utils/context/LoaderContext';
import { api_urls } from '@/utils/commons/api-urls';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'Field is Required.'
  })
});

export function SubscribeForm() {

  const { dispatchLoader } = useLoading();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ''
    }
  });

  async function _handleSubmit(values: z.infer<typeof FormSchema>) {
    dispatchLoader(true);
    try {
      const response = await fetch(api_urls.users.guest.news_letter, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        SuccessToast(await response.text());
        form.reset();
      } else {
        const error = await response.json();
        ErrorToast(error.text() || 'Failed to send subscription.');
      }
    } catch (error) {
      ErrorToast('An error occurred. Please try again.');
    } finally {
      dispatchLoader(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(_handleSubmit)} className="flex gap-4 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-[190px] md:w-[350px]">
              <FormControl>
                <Input
                  placeholder="Enter your email "
                  className="bg-[#f2f2f2] placeholder:text-sm grow"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:w-[20%] ">
          <span className="text-sm">Subscribe</span>{' '}
        </Button>
      </form>
    </Form>
  );
}
