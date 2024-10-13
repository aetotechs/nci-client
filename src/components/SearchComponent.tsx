import { Input } from './ui/input';

function SearchComponet() {
  return (
    <div className="flex justify-start items-center bg-white p-4 ">
      <div className=" flex border justify-around px-2 rounded-lg w-[400px] overflow-hidden  ">
        <Input
          type="search"
          placeholder="Search"
          className="w-full border-none outline-none bg-white  "
        />
        <img src="icons/search.svg" alt="search" width={30} height={30} />
      </div>
    </div>
  );
}

export default SearchComponet;
