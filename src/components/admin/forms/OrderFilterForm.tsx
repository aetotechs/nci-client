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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/common/ui/accordion';
import { Input } from '../../common/ui/input';
import CoffeeListings from '../../user/other/CoffeeListingsFilters';

const Listings = [
  {
    title: 'Order Status',
    items: ['Processing', 'Shipped', 'Delivered']
  },
  {
    title: 'Order Type',
    items: ['Bag', 'Sample']
  }
];

const FormSchema = z.object({
  date1: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  date2: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  status: z.string().min(2, { message: 'Category must be at least 2 characters.' }),
  orderType: z.string().min(2, { message: 'Category must be at least 2 characters.' })
});

export function OrderFilterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date1: '',
      date2: '',
      status: '',
      orderType: ''
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[60vw] md:w-full space-y-4">
        <h3 className="font-semibold text-xl">Filters</h3>
        <div>
          <Accordion type="single" collapsible className="md:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Date Added</AccordionTrigger>
              <div className="flex gap-2">
                <AccordionContent className="">
                  <FormField
                    control={form.control}
                    name="date1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>From:</FormLabel>
                        <FormControl>
                          <Input type="date" className="" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
                <AccordionContent>
                  <FormField
                    control={form.control}
                    name="date2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>To:</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CoffeeListings Listings={Listings} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div></div>
        <div></div>
        <div className="flex items-center justify-end gap-2 border-t py-2">
          <Button variant="outline" className="border-none">
            Reset All
          </Button>

          <Button type="submit">Apply Now</Button>
        </div>
      </form>
    </Form>
  );
}
