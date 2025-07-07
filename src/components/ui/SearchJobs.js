import { useRef } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function ExpandableSearch() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();           // prevent the page refresh
    inputRef.current?.focus();    // focus the input so it expands
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group inline-flex items-center h-12 bg-[#00a1ff5e] rounded-full overflow-hidden transition-all duration-300 border-[1.5px] border-[#00A1FF]"
    >
      {/* Collapsed search icon button */}
      <button
        type="submit"
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-white 
                   group-focus-within:bg-white group-focus-within:text-black transition-colors duration-300"
      >
        {/* Rotated magnifying glass */}
        {/* <span className="transform -rotate-45 text-xl select-none">&#9906;</span> */}
        <IoIosSearch fontSize={30} className="font-semibold text-lg text-[#00A1FF] hover:scale-105" />
      </button>

      {/* Expanding input field */}
      <input
        ref={inputRef}
        type="search"
        name="q"
        placeholder="Search"
        className="w-0 h-full bg-white text-black placeholder-gray-500 outline-none
                   transition-all duration-500 group-focus-within:w-64 group-focus-within:px-4"
      />
    </form>
  );
}
