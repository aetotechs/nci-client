import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
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
import { Input } from '@/components/common/ui/input';

import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { Textarea } from '../../common/ui/textarea';
import { ScrollArea } from '../../common/ui/scroll-area';
import { AddRegion } from '@/utils/hooks/api-routes';
import { useMemo, useRef, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/common/ui/select';
import JoditEditor from 'jodit-react';

export const options = [
  'bold',
  'italic',
  '|',
  'ul',
  'ol',
  'image',
  '|',
  'font',
  'fontsize',
  '|',
  'outdent',
  'indent',
  'align',
  '|',
  'hr',
  '|',
  'fullsize',
  'brush',
  '|',
  'table',
  'link',
  '|',
  'undo',
  'redo'
];

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Field is required' }),
  description: z.string().min(2, { message: 'Field is required' }),
  country: z.string().optional(),
  soil: z.string().optional(),
  altitude: z.string().optional(),
  history: z.string().optional(),
  coffeegrowth: z.string().optional(),
  mapImage: z.instanceof(File).refine((file) => file.type.startsWith('image/'), {
    message: 'File must be an image.'
  })
});

export function RegionForm({ onClose }: { onClose: () => void }) {
  const [submitting, setIsSubmitting] = useState(false);
  const editor1 = useRef(null);
  const editor2 = useRef(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      country: '',
      history: '',
      coffeegrowth: '',
      soil: '',
      altitude: '',
      description: '',
      mapImage: undefined
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
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      if (values.country) formData.append('country', values.country);
      if (values.soil) formData.append('soil', values.soil);
      if (values.altitude) formData.append('altitude', values.altitude);
      if (values.history) formData.append('history', values.history);
      if (values.coffeegrowth) formData.append('coffeegrowth', values.coffeegrowth);
      if (values.mapImage) formData.append('mapImage', values.mapImage);

      const response = await fetch(AddRegion, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        SuccessToast('Region Added Successfully');
        form.reset();
        onClose();
      } else {
        ErrorToast(data.message || 'Failed to add region');
      }
    } catch (error) {
      ErrorToast('Error, try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollArea className="h-[90vh] w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="h-10 " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="uganda">Uganda</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="mapImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Map Image *</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    className="h-10"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />
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
                <FormLabel>Short Description *</FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="border" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem className="col-span-1">
            <FormLabel>History of Coffee *</FormLabel>

            <FormControl>
              <Controller
                control={form.control}
                name="history"
                render={({ field }) => (
                  <JoditEditor
                    ref={editor1}
                    value={field.value!}
                    config={config}
                    onBlur={(newContent) => field.onChange(newContent)}
                    onChange={(htmlString) => field.onChange(htmlString)}
                    className="w-full h-[70%] mt-1 bg-white"
                  />
                )}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem className="col-span-1">
            <FormLabel>Coffee Growth *</FormLabel>

            <FormControl>
              <Controller
                control={form.control}
                name="coffeegrowth"
                render={({ field }) => (
                  <JoditEditor
                    ref={editor2}
                    value={field.value!}
                    config={config}
                    onBlur={(newContent) => field.onChange(newContent)}
                    onChange={(htmlString) => field.onChange(htmlString)}
                    className="w-full h-[70%] mt-1 bg-white"
                  />
                )}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <div className="border-t md:mt-54 flex justify-end">
            <Button
              type="submit"
              className=" font-normal my-2 text-sm border border-primary text-white  h-[44px]"
              disabled={submitting}
            >
              {submitting ? 'Submitting' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </ScrollArea>
  );
}
