import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setIsMenuOpen } from "../store/menuSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheSuggestions } from "../store/searchSlice";

export default Headers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestionList, setSearchSuggestionList] = useState([]);

  const { cachedAutoSearchSuggestion } = useSelector(
    (state) => state.cachedSearchSuggestion
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSearchResult = async () => {
      const jsonResponse = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const response = await jsonResponse.json();
      setSearchSuggestionList(response[1]);
      dispatch(cacheSuggestions({ [searchQuery]: response[1] }));
    };

    const timmer = setTimeout(() => {
      if (cachedAutoSearchSuggestion[searchQuery]) {
        setSearchSuggestionList(cachedAutoSearchSuggestion[searchQuery]);
      } else {
        fetchSearchResult();
      }
    }, 500);

    return () => clearTimeout(timmer);
  }, [searchQuery]);

  const setSearchAutoSuggestionQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="w-full flex justify-between p-4	shadow-md mb-1 ">
        <div
          className="p-3  rounded-full hover:bg-stone-400 cursor-pointer"
          onClick={() => dispatch(setIsMenuOpen())}
        >
          <RxHamburgerMenu size={25} className="cursor-pointer" />
        </div>
        <div className="flex">
          <input
            className="border outline-none w-[450px]	  p-1 rounded-tl-2xl rounded-bl-2xl"
            value={searchQuery}
            onChange={setSearchAutoSuggestionQuery}
            onBlur={() => setSearchSuggestionList([])}
          />
          <button className="bg-neutral-300 p-2 px-4 rounded-tr-2xl rounded-br-2xl">
            <IoIosSearch size={20} />
          </button>
          {searchSuggestionList.length !== 0 && (
            <div className="w-[450px] p-4 absolute z-10  bg-white	rounded top-20	shadow-md">
              <ul>
                {searchSuggestionList.map((suggestion) => (
                  <li className="p-1">{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <FaUser size={25} />
      </div>
    </>
  );
};
