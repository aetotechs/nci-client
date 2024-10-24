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
import { Textarea } from '../ui/textarea';
import { ScrollArea } from '../ui/scroll-area';
import { AddRegion } from '@/lib/api-routes';
import { useState } from 'react';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' }),
  country: z.string().optional(),
  soil: z.string().optional(),
  altitude: z.string().optional(),
  history: z.string().optional(),
  coffeegrowth: z.string().optional()
});

export function RegionForm() {
  const [submitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      country: '',
      history: '',
      coffeegrowth: '',
      soil: '',
      altitude: '',
      description: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(AddRegion, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      console.log(response);
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollArea className="h-[90vh] w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-2 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter name of the region"
                    className="h-10 "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="" className="h-10 " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="altitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Altitude(m)</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-10 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="soil"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soil</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-10 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type description for origin here" className='border'/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="history"
            render={({ field }) => (
              <FormItem>
                <FormLabel>History of Coffee *</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type description for origin here" className='border' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coffeegrowth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Growing Cofffee *</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type description for origin here" className='border' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="border-t md:mt-54 flex justify-end">
            <Button
              type="submit"
              className=" font-normal my-2 text-sm border border-primary text-white  h-[44px]"
              disabled={submitting}>
              {submitting ? 'Submitting' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </ScrollArea>
  );
}
