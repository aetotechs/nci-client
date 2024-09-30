import { Input } from '@/components/ui/input';

function Search() {
  return (
    <div className=" flex border justify-around px-2 rounded-lg w-[400px] overflow-hidden  ">
      <Input
        type="search"
        placeholder="Search"
        className="w-full border-none outline-none bg-white  "
      />
      <img src="icons/search.svg" alt="search" width={30} height={30} />
    </div>
  );
}

export default Search;
