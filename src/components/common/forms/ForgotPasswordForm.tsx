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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ForgotPassword } from '@/utils/hooks/api-routes';
import { useLoading } from '@/utils/context/LoaderContext';
import { ErrorToast, SuccessToast } from '../ui/Toasts';

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'Field is required.'
  })
});

export function ForgotPasswordForm() {
  const { dispatchLoader } = useLoading();
  const [submitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ''
    }
  });

  const _handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    dispatchLoader(true);
    try {
      const response = await fetch(ForgotPassword(data.email, 'r'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        SuccessToast(
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/signupemail.svg" alt="Email" />
            </span>
            <span>Success!</span> Check email to verify your request.
          </div>,
          );
        localStorage.setItem('password_reset_email', data.email);

        setTimeout(() => {
          navigate('/verify-otp');
        }, 1000);
      } else {
        const responseMessage = await response.text();
        ErrorToast(responseMessage);
      }
    } catch (error: any) {
      ErrorToast("An error occured, try again later" + error.message);
    } finally {
      dispatchLoader(false);    
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(_handleSubmit)} className="w-full space-y-1 md:space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} className="py-5 " />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full my-5 h-11 text-sm font-normal text-white"
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Reset Password'}
        </Button>
      </form>
    </Form>
  );
}
