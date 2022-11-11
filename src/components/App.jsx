import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';

const SearchMovieList = lazy(() => import('../views/MoviePage'));
const NotFoundView = lazy(() => import('../views/NotFoundView'));
const TrendingMovies = lazy(() => import('../views/HomePage'));
const MovieView = lazy(() => import('../views/MovieView'));
const MovieCreditsView = lazy(() => import('../views/MovieCreditsView'));
const MovieReviewsView = lazy(() => import('../views/MovieReviewsView'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TrendingMovies />} />
            <Route path="movies" element={<SearchMovieList />} />
            <Route path="movies/:movieId" element={<MovieView />}>
              <Route path="cast" element={<MovieCreditsView />} />
              <Route path="reviews" element={<MovieReviewsView />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </>
  );
};
