import React from 'react';
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
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { toast } from 'sonner';

const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'email must be at least 2 characters.'
  }),
  password: z.string().min(2, { message: 'password must be at least 2 characters.' })
});

export function LoginForm() {
  const [visible, setVisible] = useState(false);

  const togglePassword = () => {
    setVisible(!visible);
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast('Login Successful Redirecting...', {
      className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base">Email</FormLabel>

              <FormControl>
                <Input type="email" placeholder="Enter your email" className="h-12 " {...field} />
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
                    className="h-12 border-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0  "
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
        <div className="flex justify-end my-3 text-primary">
          <Link to="/forgot-password " className='text-sm'>Forgot Password</Link>
        </div>
        <Button type="submit" className="w-full font-normal text-base">
          Login
        </Button>
      </form>
    </Form>
  );
}
