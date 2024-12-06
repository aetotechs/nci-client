import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from '@/components/common/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/common/ui/input-otp';
import { useEffect, useState } from 'react';
import { Verify } from '@/utils/hooks/api-routes';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, SuccessToast } from '../ui/Toasts';

const FormSchema = z.object({
  pin: z.string().min(5, {
    message: 'Your one-time password must be 5 characters.'
  })
});

export function EmailOtpForm({ resetTimer }: { resetTimer: boolean }) {
  const [value, setValue] = useState('');
  const [timeLeft, setTimeLeft] = useState(600);
  const email = localStorage.getItem('acc_verification_email');
  console.log(email);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: ''
    }
  });
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);
  useEffect(() => {
    if (resetTimer) {
      setTimeLeft(600);
    }
  }, [resetTimer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  function handleOtpChange(value: string) {
    setValue(value);
    form.setValue('pin', value);
  }
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(Verify(email, value), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(response);

      if (response.status === 200) {
        SuccessToast( "Success! Redirecting you to Login...");
        navigate('/login');
      } else {
        const text = await response.text();
        ErrorToast(text);
      }
    } catch (error) {
      ErrorToast('Error occured, try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-4 md:w-full flex flex-col justify-center items-center space-y-6 "
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={5} {...field} value={value} onChange={handleOtpChange}>
                  <InputOTPGroup className="">
                    <InputOTPSlot index={0} className="w-10 h-10" />
                    <InputOTPSlot index={1} className="w-10 h-10" />
                    <InputOTPSlot index={2} className="w-10 h-10" />
                    <InputOTPSlot index={3} className="w-10 h-10" />
                    <InputOTPSlot index={4} className="w-10 h-10" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="w-full md:w-[417px]">
                Code expires in {formatTime(timeLeft)}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full md:w-[417px] h-11 rounded-[8px]"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Verifying...' : 'Verify'}
        </Button>
      </form>
    </Form>
  );
}
