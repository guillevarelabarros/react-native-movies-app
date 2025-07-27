// HomeScreen.tsx

import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        {/* Carrusel de Peliculas Principales */}
        <PosterCarousel movies={nowPlaying} />

        {/* Carrusel  de Peliculas Populares */}
        <HorizontalCarousel movies={popular} title="Populares" />

        {/* Carrusel  de Top Rated */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        {/* Carrusel  de Próximamente o upcoming */}
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
