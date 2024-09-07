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

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Field is required.'
  }),
  lastName: z.string().min(2, { message: 'Field is required' }),
  email: z.string().min(2, { message: 'Field is required.' })
});

export function EditContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
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
              <FormLabel className="font-normal text-base ">First Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="John" {...field} />
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
              <FormLabel className="font-normal text-base ">Last Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="font-normal text-base "> Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="johndoe@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="col-span-2">
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
