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

import Address from '@/components/Address';
import { CheckboxDemo } from '@/components/TermsCheckBox';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Field is required.'
  }),
  lastName: z.string().min(2, { message: 'Field is required' }),
  workEmail: z.string().min(2, { message: 'Field is required.' }),
  workPhone: z.string().min(2, { message: 'Field is required' }),
  position: z.string().min(2, { message: 'Field is required' }),
  companyName: z.string().min(2, { message: 'Field is required' }),
  companyWebsite: z.string().min(2, { message: 'Field is required' }),
  password: z.string().min(2, { message: 'Field is required' }),
  confirmPassword: z.string().min(2, { message: 'Field is required' })
});

export function SignupForm() {
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
      firstName: '',
      lastName: '',
      workEmail: '',
      workPhone: '',
      companyName: '',
      companyWebsite: '',
      position: '',
      password: '',
      confirmPassword: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast('Signup  Successful Redirecting...', {
      className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col md:grid md:grid-cols-2 gap-5 "
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base ">First Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your first name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base ">Last Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your last name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base ">Work Phone</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your contact" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base ">Work Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="font-medium text-base ">Position</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your position at company" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base ">Company</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter company name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyWebsite"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base ">Company Website</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter company website" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2">
          <Address />
        </div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base ">Password</FormLabel>
              <FormControl>
                <div className="flex border justify-between items-center pr-4 rounded-xl overflow-hidden">
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="h-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0  "
                    {...field}
                  />
                  <p onClick={togglePassword}>
                    {passwordVisible ? (
                      <EyeIcon className="w-4" color="rgba(88, 89, 98, 1)" />
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
            <FormItem>
              <FormLabel className="font-medium text-base ">Confirm Password</FormLabel>
              <FormControl>
                <div className="flex border justify-between items-center pr-4 rounded-xl overflow-hidden">
                  <Input
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="h-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0  "
                    {...field}
                  />
                  <p onClick={toggleConfirmPassword}>
                    {confirmPasswordVisible ? (
                      <EyeIcon className="w-4" color="rgba(88, 89, 98, 1)" />
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

        <div className="col-span-2">
          <CheckboxDemo />
        </div>
        <Button type="submit" className="col-span-2">
          <Link to="/verify-email">Sign Up</Link>
        </Button>
      </form>
    </Form>
  );
}
