// DetailsScreen.tsx

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
// import { useRoute } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  console.log(movieId);
  // const { movieId } = useRoute().params;

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};
