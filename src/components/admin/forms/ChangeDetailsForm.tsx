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

import { toast } from 'sonner';
import { useEffect } from 'react';

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Field is required.'
  }),
  lastName: z.string().min(2, { message: 'Field is required' }),
  workEmail: z
    .string()
    .email({ message: 'Invalid email address.' })
    .min(2, { message: 'Field is required.' }),
  workPhone: z.string().min(2, { message: 'Field is required' })
});

export function ChangeDetails({ user }: any) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    defaultValues: user
      ? {
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          workEmail: user.email || '',
          workPhone: user.workPhone || ''
        }
      : {
          firstName: '',
          lastName: '',
          workEmail: '',
          workPhone: ''
        }
  });

  useEffect(() => {
    if (user) {
      form.reset({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        workEmail: user.email || '',
        workPhone: user.workPhone || ''
      });
    }
  }, [user, form]);

  const isChanged = (
    Object.keys(form.formState.defaultValues || {}) as Array<
      keyof typeof form.formState.defaultValues
    >
  ).some(
    (key) =>
      form.formState.defaultValues?.[key] !==
      form.getValues(key as keyof typeof form.formState.defaultValues)
  );

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast('Saved...', {
      className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col md:grid md:grid-cols-2 gap-5"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-base">First Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
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
              <FormLabel className="font-medium text-base">Last Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
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
              <FormLabel className="font-medium text-base">Work Phone</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
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
              <FormLabel className="font-medium text-base">Work Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="justify-self-end col-span-2 h-8 text-[13px]"
          disabled={!isChanged}
        >
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
