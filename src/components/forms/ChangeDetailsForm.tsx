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

import { toast } from 'sonner';

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

export function ChangeDetails() {
  const defaultValues = {
    firstName: '',
    lastName: '',
    workEmail: '',
    workPhone: ''
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    defaultValues
  });

  const watchedValues = form.watch();

  const isChanged = Object.keys(defaultValues).some(
    (key) =>
      defaultValues[key as keyof typeof defaultValues] !==
      watchedValues[key as keyof typeof watchedValues]
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
              <FormLabel className="font-medium text-base">Last Name</FormLabel>
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
              <FormLabel className="font-medium text-base">Work Phone</FormLabel>
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
              <FormLabel className="font-medium text-base">Work Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
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
