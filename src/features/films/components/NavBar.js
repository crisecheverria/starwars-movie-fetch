import React from "react";
import { useDispatch } from "react-redux";
import { sortFilmsBy } from "../filmsSlice";
import { Grid, Dropdown, Input, Segment } from "semantic-ui-react";

export default function NavBar({ onSearch }) {
  const dispatch = useDispatch();

  return (
    <Segment vertical>
      <Grid padded>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={6} computer={2} textAlign="center">
            <Dropdown text="Sort by..." floating button>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => dispatch(sortFilmsBy("episode_id"))}
                >
                  Episode
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => dispatch(sortFilmsBy("release_date"))}
                >
                  Year
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={14}>
            <Input
              fluid
              icon="search"
              iconPosition="left"
              placeholder="Type to search..."
              onChange={(el) => onSearch(el.target.value.toLowerCase())}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
