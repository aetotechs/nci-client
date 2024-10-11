import { Input } from '@/components/ui/input';
interface SearchProps {
  handleSearch?: (searchTerm: string) => void; // Optional prop
}

function Search({ handleSearch }: SearchProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();

    if (handleSearch) {
      handleSearch(searchQuery); // Only call handleSearch if it exists
    }
  };
  return (
    <div className=" flex border justify-around px-2 rounded-lg w-[400px] overflow-hidden  ">
      <Input
        type="search"
        placeholder="Search"
        onChange={handleInputChange}
        className="w-full border-none outline-none bg-white  "
      />
      <img src="icons/search.svg" alt="search" width={30} height={30} />
    </div>
  );
}

export default Search;
