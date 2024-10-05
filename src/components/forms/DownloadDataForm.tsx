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

const FormSchema = z.object({
  password: z.string().min(8, { message: 'password must be at least 8 characters.' })
});

export function DownloadForm() {
  const [visible, setVisible] = useState(false);

  const togglePassword = () => {
    setVisible(!visible);
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="my-4">
              <FormLabel className="font-normal text-sm md:text-[15px] ">
                Current Password
              </FormLabel>
              <FormControl>
                <div className="flex border justify-between  items-center pr-4 rounded-[8px] overflow-hidden">
                  <Input
                    type={visible ? 'text' : 'password'}
                    placeholder="*** *** ***"
                    className="h-10 border-none ring-offset-0 focus-visible:ring-0  bg-[#fffff0]  focus-visible:ring-offset-0  "
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

        <Button type="submit" className="w-full font-normal text-sm">
          Download
        </Button>
      </form>
    </Form>
  );
}
