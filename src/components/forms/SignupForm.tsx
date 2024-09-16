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

import { Register } from '@/lib/api-routes';

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Field is required.'
  }),
  lastName: z.string().min(2, { message: 'Field is required' }),
  workEmail: z.string().min(2, { message: 'Field is required.' }),
  workPhone: z.string().min(2, { message: 'Field is required' }),
  position: z.string().min(2, { message: 'Field is required' }),
  companyName: z.string().min(2, { message: 'Field is required' }),
  companyWebsiteUrl: z.string().min(2, { message: 'Field is required' }),
  password: z.string().min(2, { message: 'Field is required' }),
  confirmPassword: z.string().min(2, { message: 'Field is required' }),
  address: z.object({
    country: z.string().min(2, { message: 'Country is required' }),
    state: z.string().min(2, { message: 'State is required' }),
    street: z.string().min(2, { message: 'Street is required' }),
    zipcode: z.string().min(2, { message: 'Zip Code is required' }),
    city: z.string().min(2, { message: 'City is required' })
  })
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
      companyWebsiteUrl: '',
      position: '',
      password: '',
      confirmPassword: '',
      address: {
        country: '',
        city: '',
        state: '',
        street: '',
        zipcode: ''
      }
    }
  });
  console.log(Register);

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch(Register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    console.log('response-->', response);
    const data = await response.json();
    console.log('hi');

    console.log('---->', data);

    // toast('Signup  Successful Redirecting...', {
    //   className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    // });

    console.log('values submitted', values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col md:grid md:grid-cols-2 gap-5 ">
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
          name="companyWebsiteUrl"
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
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Address</AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="address.country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
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
                    <FormItem>
                      <FormLabel>City</FormLabel>
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
                    <FormItem className="col-span-2">
                      <FormLabel>State</FormLabel>
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
                    <FormItem>
                      <FormLabel>Street</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your street" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.zipcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code</FormLabel>
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
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
