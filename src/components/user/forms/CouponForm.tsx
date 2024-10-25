import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';

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
        className=" flex gap-2 md:justify-between items-center"
      >
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your discount code"
                  className="h-10 bg-[#f2f2f2] placeholder:text-[12px] border-none  "
                  {...field}
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className=" font-normal text-[12px] border border-primary text-primary bg-primary/10  h-10"
          variant="outline"
          disabled
        >
          Apply
        </Button>
      </form>
    </Form>
  );
}
