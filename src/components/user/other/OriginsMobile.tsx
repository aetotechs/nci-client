import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/common/ui/accordion';
import { useOrigins } from '@/utils/hooks/useOrigins';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function OriginsMobile() {
  const navigate = useNavigate();
  const [pages, setPages] = useState<{ page: number, size: number }>({ page: 0, size: 10 });
  const { origins, loading, hasMore } = useOrigins(pages.page, pages.size);
  const [isPopoverOpen, setPopoverOpen] = useState<boolean>(false);

  const handleLoadMoreOrigins = (e: any) => {
    e.preventDefault();
    setPages((prev: any) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  const handleOriginClick = (name: string) => {
    navigate(`/origin/${name}`);
    setPopoverOpen(false);
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p>Origins</p>
        </AccordionTrigger>
        <AccordionContent className="">
          {origins.map((origin, index) => (
            <div key={index} className="text-textcolor flex flex-col ">
              <p className="cursor-pointer py-[2px]" onClick={() => handleOriginClick(origin.name)}>
                {origin.name}
              </p>
            </div>
          ))}

          <div className="flex justify-center">
            <button
              onClick={handleLoadMoreOrigins}
              className="px-5 text-primary rounded-xl"
              disabled={loading || !hasMore}
              aria-label="Load more origins"
            >
              {loading ? 'Loading...' : hasMore ? 'Load More >>' : 'That is all we have'}
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
