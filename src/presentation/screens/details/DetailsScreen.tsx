// DetailsScreen.tsx

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { useMovie } from '../../hooks/useMovie';
import { MovieDetails } from '../../components/movie/MovieDetails';
// import { useRoute } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  // const { movieId } = useRoute().params;
  const { isLoading, movie, cast = [] } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
