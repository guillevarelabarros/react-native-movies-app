// PosterCarousel.tsx

import React from 'react';
import { Movie } from '../../../core/entities/movie.entity';
import { ScrollView, View } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({ height = 440, movies }: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
