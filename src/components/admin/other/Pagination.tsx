import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/common/ui/pagination';

interface PaginationDemoProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationDemo({ currentPage, totalPages, onPageChange }: PaginationDemoProps) {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent className=" justify-self-end">
        <PaginationItem>
          <PaginationPrevious
            onClick={currentPage === 1 ? undefined : handlePrevious}
            className={currentPage === 1 ? 'cursor-not-allowed text-gray-400' : ''}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                
                onClick={() => onPageChange(page)}
                isActive={page === currentPage}
                className={page === currentPage ? 'bg-primary text-white text-sm' : 'border '}>
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            onClick={currentPage === totalPages ? undefined : handleNext}
            className={currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
