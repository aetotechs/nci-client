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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';
import { toast } from 'sonner';

const FormSchema = z.object({
  customer: z.string().min(2, { message: 'Field is required' })
});

export function SelectCustmerForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      customer: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast('Customer Added Successfulyy ...', {
      className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full px-5">
        <FormField
          control={form.control}
          name="customer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer *</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select from the list below" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Customers</SelectLabel>
                      <SelectItem value="ann">Ann</SelectItem>
                      <SelectItem value="Rahmah">Rahmah</SelectItem>
                      <SelectItem value="ann">Ann</SelectItem>
                      <SelectItem value="Rahmah">Rahmah</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" mt-20 flex justify-center ">
          <Button
            variant={'outline'}
            type="submit"
            className=" font-normal my-2 text-sm border bg-white border-primary text-primary  h-[38px]"
          >
            Create Customer
          </Button>
        </div>
      </form>
    </Form>
  );
}
