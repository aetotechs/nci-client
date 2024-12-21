import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useOrigins } from '@/utils/hooks/useOrigins';

export function OriginsSheet() {
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
    <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <p>Origins</p>
      </PopoverTrigger>
      <PopoverContent className="md:w-[90vw] md:mx-14 md:mt-9 p-0 overflow-auto max-h-[80vh]">
        <div className="flex flex-col gap-2 md:grid md:grid-cols-4 mt-5 mb-10 md:mx-[10%]">
          {origins.map((origin, index) => (
            <div key={index} className="text-textcolor flex flex-col gap-1">
              <p className="cursor-pointer" onClick={() => handleOriginClick(origin.name)}>
                {origin.name}
              </p>
            </div>
          ))}
        </div>

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

        {/* <div className="py-1 fixed bottom-0 bg-muted w-[80vw] rounded-bl-md rounded-br-md text-center text-textcolor">
          <span className="font-semibold">C-Market: $2.43 USD </span>
          <span className="font-normal">as of 03/05/2024</span>
        </div> */}
      </PopoverContent>
    </Popover>
  );
}
