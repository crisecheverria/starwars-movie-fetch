import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilms, selectFilms } from "./filmsSlice";
import NavBar from "../films/components/NavBar";
import ListFilms from "../films/components/ListFilms";
import { Container } from "semantic-ui-react";

export function Films() {
  const { films, loading, hasError, errorMsg } = useSelector(selectFilms);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <Container fluid>
      <NavBar onSearch={setSearch} searchTearm={search} />
      <ListFilms films={films} searchTearm={search} />
    </Container>
  );
}
