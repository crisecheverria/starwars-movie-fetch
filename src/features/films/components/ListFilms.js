import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilmToShow, selectedFilmSelector } from "../filmsSlice";
import {
  Grid,
  Header,
  Segment,
  Container,
  Placeholder,
} from "semantic-ui-react";
import styled from "styled-components";

export default function ListFilms({ films, searchTearm, loading }) {
  const dispatch = useDispatch();
  const { fields } = useSelector(selectedFilmSelector);

  const NoMoviewWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0;
    margin: 0;

    p {
      font-size: 16px;
      font-weight: bold;
    }
  `;

  const EpisodeId = styled.p`
    font-size: 12px;
  `;

  const EpisodeTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
  `;

  return (
    <Grid divided padded>
      <Grid.Row columns={2}>
        <Grid.Column style={{ height: "80vh", cursor: "pointer" }}>
          {loading && (
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
          )}
          {films.map(
            ({ fields }, id) =>
              fields.title.toLowerCase().includes(searchTearm) && (
                <Segment key={id} vertical>
                  <Grid>
                    <Grid.Row
                      columns={3}
                      onClick={() =>
                        dispatch(selectFilmToShow(fields.episode_id))
                      }
                    >
                      <Grid.Column mobile={16} computer={3} textAlign="right">
                        <EpisodeId>EPISODE {fields.episode_id}</EpisodeId>
                      </Grid.Column>
                      <Grid.Column mobile={16} computer={8}>
                        <EpisodeTitle>{fields.title}</EpisodeTitle>
                      </Grid.Column>
                      <Grid.Column mobile={16} textAlign="right" computer={5}>
                        {fields.release_date}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              )
          )}
        </Grid.Column>
        <Grid.Column>
          {fields ? (
            <Container textAlign="left" style={{ padding: 20 }}>
              <Header as="h2">{fields.title}</Header>
              <p>{fields.opening_crawl}</p>
              <p>Directed by: {fields.director}</p>
            </Container>
          ) : (
            <NoMoviewWrapper>
              <p>No movie selected</p>
            </NoMoviewWrapper>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
