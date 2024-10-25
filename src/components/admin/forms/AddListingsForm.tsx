import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/common/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/common/ui/form';
import { Input } from '@/components/common/ui/input';

import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';

import { RichTextEditor } from '../../common/other/RichTextEditor';
import { PendingPopover } from '../../user/other/PendingPopover';

const FormSchema = z.object({
  brand: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' }),
  country: z.string().min(2, { message: 'Field is required' }),
  origin: z.string().min(2, { message: 'Field is required' }),
  region: z.string().min(2, { message: 'Field is required' }),
  bagWeight: z.string().min(2, { message: 'Field is required' }),
  farmName: z.string().min(2, { message: 'Field is required ' }),
  lotNumber: z.string().min(2, { message: 'Field is required ' }),
  society: z.string().min(2, { message: 'Field is required ' }),
  category: z.string().min(2, { message: 'Field is required ' }),
  season: z.string().min(2, { message: 'Field is required ' }),
  producerType: z.string().min(2, { message: 'Field is required ' }),
  coffeegrowth: z.string().min(2, { message: 'Field is required ' }),
  certifications: z.string().min(2, { message: 'Field is required ' }),
  warehouse: z.string().min(2, { message: 'Field is required ' }),
  status: z.string().min(2, { message: 'Field is required ' }),
  processing: z.string().min(2, { message: 'Field is required ' }),
  processingDescription: z.string().min(2, { message: 'Field is required ' }),
  bagType: z.string().min(2, { message: 'Field is required ' }),
  plantSpecies: z.string().min(2, { message: 'Field is required ' }),
  samplePrice: z.string().min(2, { message: 'Field is required ' }),
  stockSamples: z.string().min(2, { message: 'Field is required ' }),
  bagSamples: z.string().min(2, { message: 'Field is required ' }),
  bagPrice: z.string().min(2, { message: 'Field is required ' }),
  variety: z.string().min(2, { message: 'Field is required ' })
});

export function ListingsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      brand: '',
      country: '',
      origin: '',
      region: '',
      lotNumber: '',
      bagWeight: '',
      farmName: '',
      producerType: '',
      society: '',
      category: '',
      coffeegrowth: '',
      season: '',
      warehouse: '',
      status: '',
      bagPrice: '',
      samplePrice: '',
      processing: '',
      processingDescription: '',
      bagType: '',
      plantSpecies: '',
      variety: '',
      certifications: '',
      description: ''
    }
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    toast('Listing Added Successfuly ...', {
      className: 'border border-primary text-center text-base flex justify-center rounded-lg mb-2'
    });
    console.log('values submitted', values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col w-[85vw]  md:flex-row gap-5 "
      >
        <div className="bg-white border border-primary/30 rounded-[8px] p-5 w-full md:w-[45vw] max-h-min">
          <h3 className="text-base font-semibold">General</h3>

          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Coffee Brand *</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-9 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Category *</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bagPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price per bag($)*</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-9 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="samplePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price per pound($)*</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-9 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lot Number</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-9 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bagWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bag Weight (kg) *</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Origin *</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="producerType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Producer Type</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-9 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="farmName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Farm Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-9 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="society"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Cooperative Society</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-9 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>About the Coffee *</FormLabel>
                  <FormDescription className="font-normal text-[13px] text-inactive">
                    Briefly describe the coffee and upload a related image.
                  </FormDescription>
                  <FormControl>
                    <RichTextEditor />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div>
          <div className="bg-white border border-primary/30 rounded-[8px] p-5 md:w-[32vw]">
            <h3 className="text-base font-semibold">Attributes</h3>
            <p className="font-normal text-[12px]">
              Custom attributes can be added to your list of attributes. Click Add
            </p>

            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="season"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Harvest Season *</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="warehouse"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Warehouse *</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status *</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="processing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Processing *</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="processingDescription"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Processing Description *</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" className="h-9 " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bagType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bag Type *</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="plantSpecies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plant Species *</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="variety"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Variety *</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" className="h-9 " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="certifications"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Certifications *</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="border border-primary/30 p-4 rounded-[8px] my-3 md:w-[32vw]">
            <div>
              <h4 className="font-semibold text-base">Inventories (Sample/Bag)</h4>
              <div className="my-2 text-sm flex items-center gap-2">
                <span className="text-primary">Pending </span>
                <span className="text-textdark">Orders,</span>
                <span>Qty:0</span>
                <PendingPopover />
              </div>
              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="stockSamples"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Stock (Samples) *</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="" className="h-9 " {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bagSamples"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Stock (Bags) *</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="" className="h-9 " {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 mt-10">
            <Button variant={'outline'} className="bg-white text-primary border-primary">
              Preview
            </Button>
            <Button
              type="submit"
              className=" font-normal  text-sm border border-primary text-white  h-[44px]"
            >
              Save Listing
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
