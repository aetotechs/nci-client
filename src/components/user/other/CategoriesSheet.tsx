import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCategories } from '@/utils/hooks/useCategories';

export function CategoriesSheet() {
  const navigate = useNavigate();
  const [pages, setPages] = useState<{ page: number, size: number }>({ page: 0, size: 10 });
  const { categories, loading, hasMore } = useCategories(pages.page, pages.size);
  const [isPopoverOpen, setPopoverOpen] = useState<boolean>(false);

  const handleLoadMoreCategories = (e: any) => {
    e.preventDefault();
    setPages((prev: any) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  const handleCategoryClick = (name: string) => {
    navigate(`/category/${name}`);
    setPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <p className="cursor-pointer">Categories</p>
      </PopoverTrigger>
      <PopoverContent className="md:w-[90vw] md:mx-14 md:mt-8 p-0 py-[4vh] overflow-auto max-h-[80vh]">
        <div className="flex flex-col gap-[3vw] md:grid md:grid-cols-3 mb-10 md:mx-[10%]">
          {categories.map((category, index) => (
            <div key={index} className="text-textcolor flex flex-col gap-1">
              <h3 className="font-semibold text-base border-b mb-4 pb-2">{category.name}</h3>
              {Array.isArray(category.subCategories) ? (
                category.subCategories.map((sub: string, subIndex: number) => (
                  <p
                    key={subIndex}
                    className="cursor-pointer"
                    onClick={() => handleCategoryClick(sub)}
                  >
                    {sub}
                  </p>
                ))
              ) : (
                <p className="italic text-muted">No subcategories available</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleLoadMoreCategories}
            className="px-5 text-primary rounded-xl"
            disabled={loading || !hasMore}
            aria-label="Load more categories"
          >
            {loading ? 'Loading...' : hasMore ? 'Load More >>' : 'That is all we have'}
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}