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
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';
import { ForgotPassword } from '@/utils/hooks/api-routes';

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'Field is required.'
  })
});

export function ForgotPasswordForm() {
  const [submitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);

    setIsSubmitting(true);
    try {
      const response = await fetch(ForgotPassword(data.email, 'r'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        toast.success(
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/signupemail.svg" alt="Email" />
            </span>
            <span>Success!</span> Check email to verify your request.
          </div>,
          {
            style: {
              background: '#007BFF1A',

              color: '#007BFF',
              border: '1px solid #007BFF80'
            }
          }
        );
        localStorage.setItem('email', data.email);

        setTimeout(() => {
          navigate('/verify-otp');
        }, 5000);
      } else {
        const errorData = await response.text();

        toast.error(errorData, {
          style: {
            backgroundColor: '#F443361A',
            color: '#F44336',
            border: '1px solid #F4433680'
          }
        });
      }
    } catch (error) {
      toast.error('Try Again Later', {
        style: {
          backgroundColor: '#F443361A',
          color: '#FFE6E6',
          border: '1px solid #F4433680'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-1 md:space-y-6">
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
