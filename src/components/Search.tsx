import { SyntheticEvent, useState } from "react";
import { IMusic } from "../interfaces";
import BCard from "./BCard";
type TSearchResult = {
  term: string;
};

const Search = () => {
  const [isAutoComplete, setIsAutoComplete] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [autoKeywords, setAutoKeywords] = useState<TSearchResult[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [music, setMusic] = useState<IMusic[]>([]);

  const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (!isAutoComplete) setIsAutoComplete(true);
    let value = event.currentTarget.value;
    if (value && !isFetching) handleRequest("auto-complete", value);
    setSearchKeyword(value);
  };
  const handleAutoComplete = (text: string) => {
    setSearchKeyword(text);
    setIsAutoComplete(false);
  };

  const handleSearch = () => {
    if (!isFetching) handleRequest("search", searchKeyword);
    else console.log("Retry later");
  };

  const handleRequest = async (path: string, term: string) => {
    let url: string = process.env.REACT_APP_API || "";
    url += path + "?term=" + term;

    try {
      const response = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY || "",
          "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST || "",
        },
      });
      const result = await response.json();
      if (path === "search") {
        setMusic([...result.tracks.hits]);
      } else {
        setAutoKeywords([...result.hints]);
      }
    } catch (error: any) {
      throw new Error(error);
    }
    setIsFetching(false);
  };
  return (
    <div className="p-4">
      <h2>Search</h2>
      <div
        className="position-relative md-form active-purple-2 mb-3 d-flex justify-content-between gap-2"
        style={{ width: "500px" }}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={onChange}
          value={searchKeyword}
        />
        {isAutoComplete ? (
          <div
            className="position-absolute top-100 border border-secondary-subtle p-2 bg-white w-100 d-flex flex-column"
            style={{ zIndex: "10000" }}
          >
            {autoKeywords.length > 0
              ? autoKeywords.map((item, index) => {
                  return (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => handleAutoComplete(item.term)}
                      key={index}
                    >
                      {item.term}
                    </p>
                  );
                })
              : null}
          </div>
        ) : null}
        <div>
          {isFetching ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button
              onClick={handleSearch}
              className="btn btn-primary"
              type="submit"
            >
              Search
            </button>
          )}
        </div>
      </div>
      <h3>Results</h3>
      <div className="d-flex gap-2 flex-wrap">
        {music.length > 0
          ? music.map((item) => {
              return <BCard key={item.track.key} {...item} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Search;
