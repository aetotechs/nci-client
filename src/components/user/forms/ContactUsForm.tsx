import { Textarea } from '@/components/common/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'email must be at least 2 characters.'
  }),
  name: z.string().min(2, { message: 'password must be at least 2 characters.' })
});

export function ContactUsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      name: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
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
        <Textarea placeholder="Message" className="h-5 border" />

        <Button type="submit" className="w-full h-9 font-normal text-sm">
          Send Message
        </Button>
      </form>
    </Form>
  );
}
