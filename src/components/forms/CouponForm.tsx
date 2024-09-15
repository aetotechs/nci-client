import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { toast } from 'sonner';

const FormSchema = z.object({
  discount: z.string().optional()
});

export function CouponForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      discount: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast('Login Successful Redirecting...', {
      className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-[404px] flex gap-2 md:justify-between items-center"
      >
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your discount code"
                  className="h-12 md:w-[303px] w-[220px] "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className=" font-normal text-base border border-primary text-primary md:w-[82px] h-[44px]"
          variant="outline"
        >
          Apply
        </Button>
      </form>
    </Form>
  );
}
