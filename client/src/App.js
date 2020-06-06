import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Switch>
      <div>
        <SavedList list={savedList} />

        <Route path="/movies/:movieID">
          <Movie />
        </Route>

        <Route exact path="/">
          <MovieList />
        </Route>

      </div>
    </Switch>
  );
};

export default App;
