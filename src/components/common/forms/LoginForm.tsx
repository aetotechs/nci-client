import { Suspense, useState } from 'react';
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
import { Link, useSearchParams } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Login } from '@/utils/hooks/api-routes';
import { getAuthUser, setAuthUser, setUserToken } from '@/utils/cookies/UserCookieManager';
import { ErrorToast, SuccessToast } from '../ui/Toasts';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useLoading } from '@/utils/context/LoaderContext';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'username must be at least 2 characters.'
  }),
  password: z.string().min(6, { message: 'password must be at least 6 characters.' })
});

export function LoginForm() {
  const { dispatchLoader } = useLoading();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);
  ('');
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

  const _handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    dispatchLoader(true);
    try {
      const response = await fetch(Login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      let responseMessage;

      if (response.status === 200) {
        const res = await response.json();
        setUserToken(res.token);
        setAuthUser(res.user);
        const userRole = getAuthUser();
        const role = userRole.role;

        SuccessToast('Login Successful, Redirecting you...');

        const destination = role === 'ADMIN' ? '#/dashboard' : redirectUrl;
        window.location.href = destination;
      } else if ((await response.text()) === 'User account unverified') {
        ErrorToast('Account not verified. Redirecting to verification page...');
        localStorage.setItem('acc_verification_email', values.username);
        setTimeout(() => {
          window.location.href = `#/verify-email`;
        }, 2000);
      } else {
        responseMessage = await response.text();
        ErrorToast(responseMessage);
      }
    } catch (error: any) {
      ErrorToast('An Error occured, try again' + error.toString());
    } finally {
      dispatchLoader(false);
    }
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(_handleSubmit)} className="w-full space-y-2 md:space-y-4">
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
            <Link to="/forgot-password" className="text-[13px] md:text-sm my-2 md:my-0">
              Forgot Password
            </Link>
          </div>
          <Button type="submit" className="w-full font-normal text-sm" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Login'}
          </Button>
        </form>
      </Form>
    </Suspense>
  );
}
