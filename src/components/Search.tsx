import { Input } from '@/components/ui/input';
interface SearchProps {
  handleSearch?: (searchTerm: string) => void;
  className?: string;
}

function Search({ handleSearch,className }: SearchProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();

    if (handleSearch) {
      handleSearch(searchQuery); 
    }
  };
  return (
    <div className={`flex border justify-around px-2 rounded-lg  overflow-hidden ${className}`}>
      <Input
        type="search"
        placeholder="Search"
        onChange={handleInputChange}
        className="w-full border-none outline-none bg-white"
      />
      <img src="icons/search.svg" alt="search" width={20} height={30} />
    </div>
  );
}

export default Search;
