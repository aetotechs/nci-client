import { useState } from 'react';

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
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Login } from '@/lib/api-routes';
import { toast } from 'sonner';
import { getAuthUser, setAuthUser, setUserToken } from '@/lib/cookie';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'username must be at least 2 characters.'
  }),
  password: z.string().min(2, { message: 'password must be at least 2 characters.' })
});

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const togglePassword = () => {
    setVisible(!visible);
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(Login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const user = await response.json();

      if (response.ok) {
        setUserToken(user.token);
        setAuthUser(user.user);
        const userRole = getAuthUser();
        const role = userRole.role;

        if (role === 'USER') {
          toast.success('Login Successful Redirecting...', {
            style: {
              background: '#007BFF1A',

              color: '#007BFF',
              border: '1px solid #007BFF80'
            }
          });
          setTimeout(() => {
            navigate('/');
            window.location.reload();
          }, 5000);
        } else {
          console.log(userRole);
          toast.success('Login Successful Redirecting...', {
            style: {
              background: '#007BFF1A',

              color: '#007BFF',
              border: '1px solid #007BFF80'
            }
          });
          setTimeout(() => {
            navigate('/admin');
          }, 2000);
        }
      } else {
        const data = await response.text();

        toast.error(data, {
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
          color: '#F44336',
          border: '1px solid #F4433680'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base">Email</FormLabel>

              <FormControl>
                <Input
                  type="username"
                  placeholder="Enter your email"
                  className="h-10 "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel className="font-medium text-base ">Password</FormLabel>
              <FormControl>
                <div className="flex border justify-between items-center pr-4 rounded-xl overflow-hidden">
                  <Input
                    type={visible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="h-10 border-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0  "
                    {...field}
                  />
                  <p onClick={togglePassword}>
                    {visible ? (
                      <EyeIcon className="w-4   " color="rgba(88, 89, 98, 1)" />
                    ) : (
                      <EyeOffIcon className="w-4" color="rgba(88, 89, 98, 1)" />
                    )}
                  </p>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end  text-primary">
          <Link to="/forgot-password " className="text-sm">
            Forgot Password
          </Link>
        </div>
        <Button type="submit" className="w-full font-normal text-base" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Login'}
        </Button>
      </form>
    </Form>
  );
}
