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
  email: z.string().min(2, { message: 'Field is required.' }),
  role: z.string().min(2, { message: 'Field is required.' })
});

export function AddUserForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col md:grid md:grid-cols-2 gap-5 p-2"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="First Name" {...field} />
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
              <FormControl>
                <Input type="text" placeholder="Last Name" {...field} />
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
              <FormControl>
                <Input type="text" placeholder="Email Address" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" border-t col-span-2 flex justify-end">
          <Button type="submit" className="mt-3 h-8 ">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
