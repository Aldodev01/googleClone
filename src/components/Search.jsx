import { Button } from "@material-ui/core";
import { Mic, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Search.css";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("You hit the search button >>", input);

    // do something with input... comeback and fix
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="searchInput">
        <SearchOutlined className="searchInputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>

      {!hideButtons ? (
        <div className="searchButtons">
          <Button
            type="submit"
            onClick={search}
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="searchButtons">
          <Button
            type="submit"
            className="searchButtonHidden"
            onClick={search}
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
