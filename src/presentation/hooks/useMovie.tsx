// useMovie.tsx

import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapers/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMovie = await UseCases.getMovieByUseCase(movieDBFetcher, movieId);
    setMovie(fullMovie);
    setIsLoading(false);
    console.log({ fullMovie });
  };

  return {
    isLoading,
    movie,
  };
};
