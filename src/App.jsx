import React, { lazy, Suspense, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { MovieContextProvider } from "./context/MovieContext";
import { Loading } from "./components/Loading";
import ShowTvInfo from "./helpers/ShowTvInfo";
import Search from "./pages/Search";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const TvSeries = lazy(() => import("./pages/TvSeries"));
const ShowInfo = lazy(() => import("./pages/ShowInfo"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Login = lazy(() => import("./pages/Login/Login"));
const Protected = lazy(() => import("./pages/Protected/Protected"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound/Pagenotfound"));


{/* <Route path="/" element={ <Protected> <Home /> </Protected> } />
            <Route path="/login" element={<Login />} />
            <Route path="/movies" element={ <Protected> <Movies /> </Protected> } />
            <Route path="/tv-series" element={ <Protected> <TvSeries /> </Protected> } />
            <Route path="/search" element={ <Protected> <Search /> </Protected> } />
            <Route path="/favorite" element={ <Protected> <Favorite /> </Protected> } />
            <Route path="/:id" element={ <Protected> <ShowInfo /> </Protected> } />
            <Route path="/tv/:id" element={ <Protected> <ShowTvInfo /> </Protected> } /> */}

export default function App() {
    
      
  return (
    <>
      <MovieContextProvider>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={ localStorage.getItem('token') ? <Home /> : <Login />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/movies" element={ localStorage.getItem('token') ? <Movies /> : <Login /> } />
            <Route path="/tv-series" element={ localStorage.getItem('token') ? <TvSeries /> : <Login />} />
            <Route path="/search" element={ localStorage.getItem('token') ? <Search /> : <Login />} />
            <Route path="/favorite" element={ localStorage.getItem('token') ? <Favorite /> : <Login />} />
            <Route path="/:id" element={ localStorage.getItem('token') ? <ShowInfo /> : <Login />} />
            <Route path="/tv/:id" element={ localStorage.getItem('token') ? <ShowTvInfo /> : <Login />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </Suspense>
      </MovieContextProvider>
    </>
  );
}
