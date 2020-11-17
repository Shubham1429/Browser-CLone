import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" variant="outlined" onClick={search}>
            Search
          </Button>
          <Button variant="outlined">Good Stuff</Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            className="search__buttonhidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Search
          </Button>
          <Button className="search__buttonhidden" variant="outlined">
            Good Stuff
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
