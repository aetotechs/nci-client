import { Input } from '@/components/ui/input';

interface SearchProps {
  className?: string; 
}

function Search({ className }: SearchProps) {
  return (
    <div className={`flex border justify-around px-2 rounded-lg  overflow-hidden ${className}`}>
      <Input
        type="search"
        placeholder="Search"
        className="w-full border-none outline-none bg-white"
      />
      <img src="icons/search.svg" alt="search" width={20} height={30} />
    </div>
  );
}

export default Search;
