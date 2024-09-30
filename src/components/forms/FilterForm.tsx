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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Input } from '../ui/input';
import CoffeeListings from '../CoffeeListings';
import { Checkbox } from '../ui/checkbox';
const Listings = [
  {
    title: 'Category',
    items: ['Africa & Middle East', 'Asia & Pacific Islands', 'Latin America & Caribbean']
  }
];

const FormSchema = z.object({
  date1: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  date2: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  category: z.string().min(2, { message: 'Category must be at least 2 characters.' })
});

export function FilterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date1: '',
      date2: '',
      category: ''
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-[60vw] md:w-full space-y-4">
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
            name="category"
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
        <div>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Accordion type="multiple" className="w-full">
                    {Listings.map((listing, index) => (
                      <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="font-medium text-base text-black">
                          Availability
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-3">
                            {listing.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 items-center font-normal text-base"
                              >
                                <Checkbox className="border-rgba(108, 109, 118, 1)" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Accordion type="multiple" className="w-full">
                    {Listings.map((listing, index) => (
                      <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="font-medium text-base text-black">
                          Origin
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-3">
                            {listing.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 items-center font-normal text-base"
                              >
                                <Checkbox className="border-rgba(108, 109, 118, 1)" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
