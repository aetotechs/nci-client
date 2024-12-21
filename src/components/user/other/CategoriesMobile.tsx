import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/ui/accordion';
import { useCategories } from '@/utils/hooks/useCategories';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CategoriesMobile() {
  const navigate = useNavigate();
  const [pages, setPages] = useState<{ page: number; size: number }>({ page: 0, size: 4 });
  const { categories, loading, hasMore } = useCategories(pages.page, pages.size);
  const [openAccordion, setOpenAccordion] = useState<string | null>('item-1'); // Manage accordion open state

  const handleLoadMoreCategories = (e: any) => {
    e.preventDefault();
    setPages((prev: any) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  const handleCategoryClick = (name: string) => {
    navigate(`/category/${name}`);
    setOpenAccordion(null); // Close the accordion after clicking a category
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={openAccordion}
      onValueChange={setOpenAccordion}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p>Categories</p>
        </AccordionTrigger>
        <AccordionContent>
          {categories.map((category, index) => (
            <div key={index} className="text-textcolor flex flex-col gap-1">
              <h3 className="font-semibold text-[15px] mt-4 text-center border-b">
                {category.name}
              </h3>
              {Array.isArray(category.subCategories) ? (
                category.subCategories.map((item: any, subIndex: any) => (
                  <p
                    key={subIndex}
                    className="cursor-pointer text-center"
                    onClick={() => handleCategoryClick(item)}
                  >
                    {item}
                  </p>
                ))
              ) : (
                <p className="italic text-muted">No subcategories available</p>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <button
              onClick={handleLoadMoreCategories}
              className="mt-5 px-5 text-primary"
              disabled={loading || !hasMore}
              aria-label="Load more categories"
            >
              {loading ? 'Loading...' : hasMore ? 'Load More >>' : 'That is all we have'}
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}