import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
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

import { CheckboxDemo } from '@/components/TermsCheckBox';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Register } from '@/lib/api-routes';

const FormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: 'Field is required.'
    }),
    lastName: z.string().min(2, { message: 'Field is required' }),
    email: z.string().min(2, { message: 'Field is required.' }).email(),
    workPhone: z
      .string()
      .min(2, { message: 'Field is required' })
      .max(15, { message: 'Field is too long' }),
    position: z.string().min(2, { message: 'Field is required' }),
    company: z.string().min(2, { message: 'Field is required' }),
    companyWebsiteUrl: z.string().min(2, { message: 'Field is required' }),
    password: z.string().min(2, { message: 'Field is required' }),
    confirmPassword: z.string().min(2, { message: 'Field is required' }),
    address: z.object({
      country: z.string().optional(),
      state: z.string().optional(),
      street: z.string().optional(),
      zip: z.string().optional(),
      city: z.string().optional()
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export function SignupForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

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
      email: '',
      workPhone: '',
      company: '',
      companyWebsiteUrl: '',
      position: '',
      password: '',

      address: {
        country: '',
        city: '',
        state: '',
        street: '',
        zip: ''
      }
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    if (!termsAccepted) {
      toast.error('Please accept the terms and conditions before signing up.', {
        style: {
          backgroundColor: '#F443361A',
          color: '#F44336',
          border: '1px solid #F4433680'
        }
      });
      return;
    }
    const { confirmPassword, ...formData } = values;
    setIsSubmitting(true);
    try {
      const response = await fetch(Register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(response);

      if (response.status === 200) {
        toast.success(
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/signupemail.svg" alt="Email" />
            </span>
            <span>Success!</span> Check email to verify your account.
          </div>,
          {
            style: {
              background: '#007BFF1A',

              color: '#007BFF',
              border: '1px solid #007BFF80'
            }
          }
        );

        setTimeout(() => {
          navigate('/verify-email');
        }, 5000);
      } else {
        toast.error('Email or PhoneNumber already registered.Please use different details', {
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col md:grid md:grid-cols-2 gap-3  "
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className=" space-y-1 ">
              <FormLabel className="font-medium text-sm ">First Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your first name" className="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className=" p-0 md:h-10 space-y-1 ">
              <FormLabel className="font-medium text-sm ">Last Name</FormLabel>
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
            <FormItem className="p-0    space-y-1 ">
              <FormLabel className="font-medium text-sm ">Work Phone</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your contact" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" md:h-10   space-y-1 ">
              <FormLabel className="font-medium text-sm ">Work Email</FormLabel>
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
            <FormItem className="col-span-2 spce-y-1   ">
              <FormLabel className="font-medium text-sm ">Position</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your position at company" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="  space-y-1">
              <FormLabel className="font-medium text-sm ">Company</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter company name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyWebsiteUrl"
          render={({ field }) => (
            <FormItem className="  space-y-1">
              <FormLabel className="font-medium text-sm ">Company Website</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter company website" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm font-medium">Address</AccordionTrigger>
              <AccordionContent className="flex flex-col    md:grid md:grid-cols-2 gap-3 ">
                <FormField
                  control={form.control}
                  name="address.country"
                  render={({ field }) => (
                    <FormItem className="  space-y-1">
                      <FormLabel className="text-sm font-medium">Country</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your country" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.city"
                  render={({ field }) => (
                    <FormItem className="  space-y-1">
                      <FormLabel className="text-sm font-medium">City</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your city" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.state"
                  render={({ field }) => (
                    <FormItem className="col-span-2 space-y-1 ">
                      <FormLabel className="text-sm font-medium">State</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your   state" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem className="  space-y-1">
                      <FormLabel className="text-sm font-medium">Street</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your street" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.zip"
                  render={({ field }) => (
                    <FormItem className="  space-y-1">
                      <FormLabel className="text-sm font-medium">Zip Code</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your zipcode" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="  space-y-1">
              <FormLabel className="font-medium text-sm ">Password</FormLabel>
              <FormControl>
                <div className="flex border border-input h-10 justify-between items-center pr-4 rounded-md overflow-hidden">
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="h-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0  "
                    {...field}
                  />
                  <p onClick={togglePassword}>
                    {passwordVisible ? (
                      <EyeIcon className="w-[14px]" color="rgba(88, 89, 98, 1)" />
                    ) : (
                      <EyeOffIcon className="w-[14px]" color="rgba(88, 89, 98, 1)" />
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
            <FormItem className="  space-y-1">
              <FormLabel className="font-medium text-sm ">Confirm Password</FormLabel>
              <FormControl>
                <div className="flex border border-input h-10 justify-between items-center pr-4 rounded-md overflow-hidden">
                  <Input
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="h-12 border-none focus-visible:ring-0 focus-visible:ring-offset-0  "
                    {...field}
                  />
                  <p onClick={toggleConfirmPassword}>
                    {confirmPasswordVisible ? (
                      <EyeIcon className="w-[14px]" color="rgba(88, 89, 98, 1)" />
                    ) : (
                      <EyeOffIcon className="w-[14px]" color="rgba(88, 89, 98, 1)" />
                    )}
                  </p>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-2 my-3">
          <CheckboxDemo checked={termsAccepted} onCheckedChange={setTermsAccepted} />
        </div>
        <Button type="submit" className="col-span-2" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </Button>
      </form>
    </Form>
  );
}
