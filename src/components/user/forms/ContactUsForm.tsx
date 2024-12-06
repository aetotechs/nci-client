import { Textarea } from '@/components/common/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/common/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';
import { SuccessToast, ErrorToast } from '@/components/common/ui/Toasts';
import { useLoading } from '@/utils/context/LoaderContext';
import { api_urls } from '@/utils/commons/api-urls';

const FormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

export function ContactUsForm() {
  const { dispatchLoader } = useLoading();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      name: '',
      message: ''
    }
  });

  async function _handleSubmit(values: z.infer<typeof FormSchema>) {
    dispatchLoader(true);
    try {
      const response = await fetch(api_urls.users.guest.contact_us, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        SuccessToast('Message sent successfully!');
        form.reset();
      } else {
        const error = await response.json();
        ErrorToast(error.message || 'Failed to send message.');
      }
    } catch (error) {
      ErrorToast('An error occurred. Please try again.');
    } finally {
      dispatchLoader(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(_handleSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-[34px] placeholder:text-[14px] "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="h-[34px] ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0 placeholder:text-sm  "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="h-[100px] border placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-9 font-normal text-sm">
          Send Message
        </Button>
      </form>
    </Form>
  );
}