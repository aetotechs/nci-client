import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem } from '@/components/ui/form';

const FormSchema = z.object({
  delete: z.boolean().default(false).optional()
});

export function DeleteConscent() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      delete: true
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="delete"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-2 space-y-0 rounded-md  py-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-[#9b9da8]  "
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormDescription className="text-black md:text-sm text-[13px]">
                  I understand and I want to delete my account
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-normal text-sm">
          Submit Request
        </Button>
      </form>
    </Form>
  );
}
