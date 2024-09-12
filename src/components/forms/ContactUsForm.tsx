import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
 
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';


const FormSchema = z.object({
  email: z.string().min(2, {
    message: 'email must be at least 2 characters.'
  }),
  name: z.string().min(2, { message: 'password must be at least 2 characters.' })
});

export function ContactUsForm() {
 
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      name: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>

              <FormControl>
                <Input type="email" placeholder="Email" className="h-10 " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="my-4">
             
              <FormControl>
    
                  <Input
                    type='text'
                    placeholder="Full Name"
                    className="h-10 ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0  "
                    {...field}
                  />
               
             
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
         <Textarea placeholder="Message." />
        
        <Button type="submit" className="w-full font-normal text-base">
          Send Message
        </Button>
      </form>
    </Form>
  );
}
