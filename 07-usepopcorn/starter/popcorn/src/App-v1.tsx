import { useState } from "react";
import styled from "styled-components";

import StarRating from "./StarRating";

interface MoviesType {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const tempMovieData: MoviesType[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

interface WatchedType {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
}

const tempWatchedData: WatchedType[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
function App() {
  const [movies, setMovies] = useState<MoviesType[]>(tempMovieData);
  const [watched, setWatched] = useState<WatchedType[]>(tempWatchedData);
  return (
    <>
      {/* 这样的结构更清晰;  */}
      <NavBar>
        {/* 类似于vue中slot的语法, 在于, NavBar可以不变, 多次使用, 然后往里面插入不同的东西 */}
        <Input />
        <NumResults movies={movies}></NumResults>
      </NavBar>
      <Main>
        <ListBox element={<MoviesBox1 movies={movies}></MoviesBox1>}>
          {/* 会放在ListBox的Children的位置 */}
          {/* <MoviesBox1 movies={movies}></MoviesBox1> */}
        </ListBox>
        <ListBox>
          {/* <Summary watched={watched}></Summary>
          <MoviesList watched={watched}></MoviesList> */}
          <StarRating></StarRating>
        </ListBox>
      </Main>
    </>
  );
}

// 可选属性1, 以支持两种方式
const ListBox = ({
  element,
  children,
}: {
  element?: JSX.Element;
  children?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  // 将具有完整性的组件弄成插槽;
  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "–" : "+"}
        </button>
        {isOpen && (
          <>
            {element}
            {children}
          </>
        )}
      </div>
    </>
  );
};
const ListBox2 = ({ children }: { children: React.ReactNode }) => {
  const [isOpen2, setIsOpen2] = useState<boolean>(true);
  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && <>{children}</>}
      </div>
      ;
    </>
  );
};

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
};

// 这里设置成number
const average = (arr: number[]) =>
  arr.reduce((acc, cur, index, arr) => acc + cur / arr.length, 0);

const NavBar = ({ children }: { children?: React.ReactNode }) => {
  // 使用成功
  const Nav = styled.nav`
    background-color: #454341;
  `;
  return (
    <>
      {" "}
      <Nav className="nav-bar">
        <Logo></Logo>
        {children}
      </Nav>
    </>
  );
};

const Input = () => {
  const [query, setQuery] = useState<string>("");
  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};
const Logo = () => {
  return (
    <>
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    </>
  );
};
const NumResults = ({ movies }: { movies: MoviesType[] }) => {
  return (
    <>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </>
  );
};

const MoviesBox1 = ({ movies }: { movies: MoviesType[] }) => {
  return (
    <>
      <ul className="list">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID}></Movie>
        ))}
      </ul>
    </>
  );
};
const Movie = ({ movie }: { movie: MoviesType }) => {
  return (
    <>
      <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    </>
  );
};

const Summary = ({ watched }: { watched: WatchedType[] }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgRuntime} min</span>
          </p>
        </div>
      </div>
    </>
  );
};
const MoviesList = ({ watched }: { watched: WatchedType[] }) => {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
