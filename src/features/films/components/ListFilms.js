import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilmToShow, selectedFilmSelector } from "../filmsSlice";
import { Grid, List, Header } from "semantic-ui-react";

export default function ListFilms({ films, searchTearm }) {
  const dispatch = useDispatch();
  const { fields } = useSelector(selectedFilmSelector);

  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <List divided relaxed>
            {films.map(({ fields }, id) => {
              if (fields.title.toLowerCase().includes(searchTearm)) {
                return (
                  <List.Item key={id}>
                    <List.Content>
                      <List.Header
                        as="a"
                        onClick={() =>
                          dispatch(selectFilmToShow(fields.episode_id))
                        }
                      >
                        EPISODE {fields.episode_id} | {fields.title} |{" "}
                        {fields.release_date}
                      </List.Header>
                    </List.Content>
                  </List.Item>
                );
              }
            })}
          </List>
        </Grid.Column>
        <Grid.Column>
          {fields ? (
            <div>
              <Header as="h1">{fields.title}</Header>
              <p>{fields.opening_crawl}</p>
            </div>
          ) : (
            <div>
              <p>No movie selected</p>
            </div>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
