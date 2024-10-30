import { useState } from 'react';
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
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Login } from '@/utils/hooks/api-routes';
import { getAuthUser, setAuthUser, setUserToken } from '@/utils/cookies/UserCookies';
import { ErrorToast, SuccessToast } from '../ui/Toasts';


const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'username must be at least 2 characters.'
  }),
  password: z.string().min(6, { message: 'password must be at least 6 characters.' })
});

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get('redirect_url') || '#/';

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

        SuccessToast('Login Successful, Redirecting you...');

        const destination = role === 'ADMIN' ? '#/dashboard' : redirectUrl;

        setTimeout(() => {
          window.location.href = destination;
        }, 2000);

      } else {
        const data = await response.text();
        ErrorToast(data);
      }

    } catch (error) {
      ErrorToast("Error logging you in, try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2 md:space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-sm">Email</FormLabel>

              <FormControl>
                <Input
                  type="username"
                  placeholder="Enter your email"
                  className="h-10  "
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
              <FormLabel className="font-medium text-sm ">Password</FormLabel>
              <FormControl>
                <div className="flex border border-input h-10 justify-between items-center pr-4 rounded-md overflow-hidden">
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
          <Link to="/forgot-password " className="text-[13px] md:text-sm my-2 md:my-0">
            Forgot Password
          </Link>
        </div>
        <Button type="submit" className="w-full font-normal text-sm" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Login'}
        </Button>
      </form>
    </Form>
  );
}
