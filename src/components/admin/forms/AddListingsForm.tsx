import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import JoditEditor from 'jodit-react';

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';

import { PendingPopover } from '../../user/other/PendingPopover';
import { AddItem } from '@/utils/hooks/api-routes';
import { useMemo, useRef, useState } from 'react';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { GetOrigins } from '@/utils/services/FetchAdminOrigins';
import { GetRegions } from '@/utils/services/FetchAdminRegions';
import { FetchWareHouses } from '@/utils/services/FetchWareHouses';
import { GetCategories } from '@/utils/services/FetchAdminCategories';
import { FetchBagWeights } from '@/utils/services/FetchBagWeights';
import { FetchFlavors } from '@/utils/services/FetchFlavors';
import { FetchBagTypes } from '@/utils/services/FetchBagTypes';
import { FetchProcessingModes } from '@/utils/services/FetchProcessingModes';
import { FetchStatuses } from '@/utils/services/FetchStatuses';
import { FetchSpecies } from '@/utils/services/FetchSpecies';
import { options } from './AddRegionForm';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' }),
  origin: z.string().optional(),
  region: z.string().optional(),
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
  processingMode: z.string().min(2, { message: 'Field is required ' }),
  processingDescription: z.string().min(2, { message: 'Field is required ' }),
  bagType: z.string().min(2, { message: 'Field is required ' }),
  plantSpecies: z.string().min(2, { message: 'Field is required ' }),
  samplePrice: z.string().min(2, { message: 'Field is required ' }),
  stockSamples: z.string().min(2, { message: 'Field is required ' }),
  bagSamples: z.string().min(2, { message: 'Field is required ' }),
  bagPrice: z.string().min(2, { message: 'Field is required ' }),
  variety: z.string().min(2, { message: 'Field is required ' })
});

export function ListingsForm({ onClose }: { onClose: () => void }) {
  const editor2 = useRef(null);

  const [submitting, setIsSubmitting] = useState(false);

  const origins = GetOrigins();
  const regions = GetRegions();
  const warehouses = FetchWareHouses();
  const categories = GetCategories();
  const bagtypes = FetchBagTypes();
  const bagweights = FetchBagWeights();
  const flavors = FetchFlavors();
  const modes = FetchProcessingModes();
  const statuses = FetchStatuses();

  const species = FetchSpecies();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
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
      processingMode: '',
      processingDescription: '',
      bagType: '',
      plantSpecies: '',
      variety: '',
      certifications: '',
      description: ''
    }
  });
  const config = useMemo(
    () => ({
      readonly: false,
      buttons: options,
      buttonsMD: options,
      buttonsSM: options,
      buttonsXS: options,
      statusbar: false,
      toolbarAdaptive: false,
      toolbarSticky: true,
      allowEmptyTags: false
    }),
    []
  );
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    setIsSubmitting(true);

    try {
      const response = await fetch(AddItem, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        SuccessToast('Item Added Successfully,..');
        form.reset();
        onClose();
      } else {
        const data = await response.text();
        ErrorToast(data);
      }
    } catch (error) {
      ErrorToast('Error , try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col w-[85vw]  md:flex-row gap-5 ">
        <div className="bg-white border border-primary/30 rounded-[8px] p-5 w-full md:w-[45vw] max-h-min">
          <h3 className="text-base font-semibold">General</h3>

          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Coffee name *</FormLabel>
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
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      value={field.value}>
                      {' '}
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category, index) => {
                          return (
                            <SelectItem key={index} value={`${category.name}`}>
                              {category.name}
                            </SelectItem>
                          );
                        })}
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
              name="lotNumber"
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
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      value={field.value}>
                      {' '}
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {bagweights.map((bagWeight, index) => {
                          return (
                            <SelectItem key={index} value={`${bagWeight}`}>
                              {bagWeight}
                            </SelectItem>
                          );
                        })}
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
                    <Select
                      onValueChange={(value) => field.onChange(value)} // Update form state
                      value={field.value || ''} // Bind the field's value
                    >
                      {' '}
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {origins.map((origin, index) => {
                          return (
                            <SelectItem key={index} value={`${origin.id}`}>
                              {origin?.name}
                            </SelectItem>
                          );
                        })}
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
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      value={field.value}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region, index) => {
                          return (
                            <SelectItem key={index} value={`${region.id}`}>
                              {region?.name}
                            </SelectItem>
                          );
                        })}
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
                    <Controller
                      name={field.name}
                      control={form.control}
                      render={({ field: controllerField }) => (
                        <JoditEditor
                          ref={editor2}
                          value={controllerField.value || ''}
                          config={config}
                          onBlur={(newContent) => controllerField.onChange(newContent)}
                          onChange={(htmlString) => controllerField.onChange(htmlString)}
                          className="w-full h-[70%] mt-1 bg-white"
                        />
                      )}
                    />
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
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value}>
                        {' '}
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dry">Dry</SelectItem>
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
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value}>
                        {' '}
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {warehouses.map((warehouse, index) => {
                            return (
                              <SelectItem key={index} value={`${warehouse}`}>
                                {warehouse}
                              </SelectItem>
                            );
                          })}
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
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value}>
                        {' '}
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {statuses.map((status, index) => {
                            return (
                              <SelectItem key={index} value={`${status}`}>
                                {status}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="processingMode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Processing *</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value}>
                        {' '}
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {modes.map((mode, index) => {
                            return (
                              <SelectItem key={index} value={`${mode}`}>
                                {mode}
                              </SelectItem>
                            );
                          })}
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
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value}>
                        {' '}
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {bagtypes.map((bagtype, index) => {
                            return (
                              <SelectItem key={index} value={`${bagtype}`}>
                                {bagtype}
                              </SelectItem>
                            );
                          })}
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
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value}>
                        {' '}
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {species.map((specie, index) => {
                            return (
                              <SelectItem key={index} value={`${specie}`}>
                                {specie}
                              </SelectItem>
                            );
                          })}
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
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value}>
                        {' '}
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
              disabled={submitting}
              className=" font-normal  text-sm border border-primary text-white  h-[44px]">
              {submitting ? 'Submitting...' : 'Save  Listing'}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
