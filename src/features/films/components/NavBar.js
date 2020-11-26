import React from "react";
import { useDispatch } from "react-redux";
import { sortFilmsBy } from "../filmsSlice";
import { Dropdown, Input } from "semantic-ui-react";

export default function NavBar({ onSearch, searchTearm }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Dropdown
        text="Sort by..."
        icon="filter"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => dispatch(sortFilmsBy("episode_id"))}>
            Episode
          </Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(sortFilmsBy("release_date"))}>
            Year
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Input
        fluid
        icon="search"
        iconPosition="left"
        placeholder="Type to search..."
        onChange={(el) => onSearch(el.target.value.toLowerCase())}
      />
    </div>
  );
}
