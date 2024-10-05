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
import { useLocation } from 'react-router-dom';

const FormSchema = z
  .object({
    currentPassword: z.string().min(8, { message: 'Field is required' }),
    newPassword: z.string().min(8, { message: 'Field is required' }),
    confirmPassword: z.string().min(8, { message: 'Field is required' })
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  });

export function ChangePasswordForm() {
  const location = useLocation();
  const { pathname } = location;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setnewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglenewPassword = () => {
    setnewPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full -mt-7   md:-mt-3  md:w-[30vw] "
      >
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem
              className={`md:my-4 my-2 space-y-[3px] md:space-y-2 ${pathname === '/settings' && 'flex items-center gap-5'}`}
            >
              <FormLabel className={`&{pathname==='/settings ? 'text-sm':'font-normal text-base} `}>
                Current Password
              </FormLabel>
              <FormControl>
                <div className="flex border justify-between items-center bg-[#fffff0] pr-4 rounded-[8px] overflow-hidden">
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="*** *** ***"
                    className={`h-10 w-[391px] border-none  bg-[#fffff0] ring-offset-0 focus-visible:ring-0   focus-visible:ring-offset-0 ${pathname === '/settings' && 'h-8 bg-inputbackground'}  `}
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
          name="newPassword"
          render={({ field }) => (
            <FormItem
              className={`md:my-4 my-2 space-y-[3px] md:space-y-2 ${pathname === '/settings' && 'flex items-center gap-10'}`}
            >
              {' '}
              <FormLabel className={`&{pathname==='/settings ? 'text-sm':'font-normal text-base} `}>
                New Password
              </FormLabel>
              <FormControl>
                <div className="flex border justify-between bg-[#fffff0] items-center pr-4 rounded-[8px] overflow-hidden">
                  <Input
                    type={newPasswordVisible ? 'text' : 'password'}
                    placeholder="*** *** ***"
                    className={`h-10 w-[391px] border-none  bg-[#fffff0] ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0 ${pathname === '/settings' && 'h-8 bg-inputbackground'}  `}
                    {...field}
                  />
                  <p onClick={togglenewPassword}>
                    {newPasswordVisible ? (
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
            <FormItem
              className={`md:my-4 my-2 space-y-[3px] md:space-y-2 ${pathname === '/settings' && 'flex items-center gap-5'}`}
            >
              {' '}
              <FormLabel className={`&{pathname==='/settings ? 'text-sm':'font-normal text-base} `}>
                Confirm Password
              </FormLabel>
              <FormControl>
                <div className="flex border justify-between bg-[#fffff0] items-center pr-4 rounded-[8px] overflow-hidden">
                  <Input
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="*** *** ***"
                    className={`h-10 w-[391px] border-none  bg-[#fffff0] ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0 ${pathname === '/settings' && 'h-8 bg-inputbackground '} `}
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

        <Button
          type="submit"
          className={` ${pathname === '/settings' ? 'float-end font-normal text-[12px] h-8' : 'w-full font-normal h-[42px] rounded-[6px] md:text-base text-[15px] my-4 md:my-6 '}`}
        >
          {pathname === '/settings' ? 'Update Password' : 'Save'}
        </Button>
      </form>
    </Form>
  );
}
