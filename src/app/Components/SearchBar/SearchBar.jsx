import { Search } from "../svgs";

export function SearchBar() {
  return (
    <form className="w-96 px-4">
      <div className="relative">
        <div className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3">
          <Search />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
      </div>
    </form>
  );
}
