import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Link } from 'react-router-dom';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 5 characters.'
  })
});

export function EmailOtpForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: ''
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full px-4 md:w-full flex flex-col justify-center items-center space-y-6 "
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={5} {...field}>
                  <InputOTPGroup className=" ">
                    <InputOTPSlot index={0} className='w-10 h-10'  />
                    <InputOTPSlot index={1} className='w-10 h-10' />
                    <InputOTPSlot index={2} className='w-10 h-10' />
                    <InputOTPSlot index={3} className='w-10 h-10'  />
                    <InputOTPSlot index={4} className='w-10 h-10' />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="w-full md:w-[417px]">
                Code expires in 05:00
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-[417px] h-[57px] rounded-[8px]">
          <Link to="/login">Verify</Link>
        </Button>
      </form>
    </Form>
  );
}
