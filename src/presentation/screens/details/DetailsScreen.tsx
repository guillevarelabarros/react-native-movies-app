// DetailsScreen.tsx

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { useMovie } from '../../hooks/useMovie';
// import { useRoute } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  // const { movieId } = useRoute().params;
  const { isLoading, movie } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      {/* Details */}
    </View>
  );
};
