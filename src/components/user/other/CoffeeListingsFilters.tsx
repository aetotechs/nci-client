import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import { useListingsFilters } from '@/utils/hooks/useListingsFilters';
import { useFilters } from '@/utils/context/FiltersContext';

function ListingsFilters() {
  const { filters, loading, error } = useListingsFilters();
  const { selectedFilters, handleSelectionChange } = useFilters();

  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {filters.map((filter, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="font-medium text-[15px] md:text-base text-black">
              {filter.title}
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                value={selectedFilters[filter.title] || ''}
                onValueChange={(value: string) => handleSelectionChange(filter.title, value)}
                className="flex flex-col gap-3"
              >
                {filter.items.map((item, index) => (
                  <RadioGroupItem
                    key={index}
                    value={item}
                    className="flex gap-3 items-center font-normal md:text-base"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                        {selectedFilters[filter.title] === item && (
                          <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
                        )}
                      </span>
                      {item}
                    </span>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        ))}
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {}
      </Accordion>
    </div>
  );
}

export default ListingsFilters;
