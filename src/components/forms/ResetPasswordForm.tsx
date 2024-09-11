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

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const FormSchema = z
  .object({
    newPassword: z.string().min(8, { message: 'Field is required' }),
    confirmPassword: z.string().min(8, { message: 'Field is required' })
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  });

export function ResetPasswordForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: ''
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
          name="newPassword"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel className="font-medium text-base ">Password</FormLabel>
              <FormControl>
                <div className="flex border justify-between items-center pr-4 rounded-xl overflow-hidden">
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="h-12 border-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0  "
                    {...field}
                  />
                  <p onClick={togglePassword}>
                    {passwordVisible ? (
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel className="font-medium text-base ">Confirm Password</FormLabel>
              <FormControl>
                <div className="flex border justify-between items-center pr-4 rounded-xl overflow-hidden">
                  <Input
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="h-12 border-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0  "
                    {...field}
                  />
                  <p onClick={toggleConfirmPassword}>
                    {confirmPasswordVisible ? (
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

        <Button type="submit" className="w-full font-normal text-base">
          <Link to="/login">Reset Password</Link>
        </Button>
      </form>
    </Form>
  );
}
