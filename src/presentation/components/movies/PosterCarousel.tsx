// PosterCarousel.tsx

import React from 'react';
import { Movie } from '../../../core/entities/movie.entity';
import { ScrollView, Text, View } from 'react-native';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({ height = 440, movies }: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <Text key={movie.id}>{movie.title}</Text>
        ))}
      </ScrollView>
    </View>
  );
};
