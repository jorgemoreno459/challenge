import React from "react";
import useSearch from "../hooks/useSearch";
import SearchComponent from "../../../components/Search";

const Search = () => {
    const {
        text,
        setText,
        search,
        logo,
        searchLogo,
        clearStates
    } = useSearch()
    return(
      <SearchComponent
          search={search}
          setText={setText}
          text={text}
          logo={logo}
          logoSearch={searchLogo}
          clearStates={clearStates}
      />
    );
}

export default Search;