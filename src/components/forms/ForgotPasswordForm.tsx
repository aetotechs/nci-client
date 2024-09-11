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

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'Field is required.'
  })
});

export function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ''
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px] font-normal">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} className="py-5" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Link to="/reset-password">
          <Button type="submit" className="w-full my-4 text-white">
            Reset Password
          </Button>
        </Link>
      </form>
    </Form>
  );
}
