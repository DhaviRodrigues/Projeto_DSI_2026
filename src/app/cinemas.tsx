import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from '@/components/Navbar';
import CinemaCard from '@/components/CinemaCard';
import { Input } from '@/components/Input';
import { ButtonY } from '@/components/ButtonY';
import { mockCinemas } from '@/data/mockCinemas';
import { movieStyle } from '@/styles/movie';
import { style as cinemaStyle } from '@/styles/cinema';
import { COLORS } from '@/constants/colors';

export default function Cinemas() {

  const renderCinema = ({ item }: { item: typeof mockCinemas[0] }) => (
    <CinemaCard
      nome={item.nome}
      endereco={item.endereco}
      isParceiro={item.isParceiro}
      avaliacao={item.avaliacao}
      distancia={item.distancia}
      imagem={item.imagem}
      filmes={item.filmes}
    />
  );

  return (
    <SafeAreaView style={[movieStyle.filmesContainer, { flex: 1, backgroundColor: COLORS.primary }]}>

      <View style={movieStyle.filmesHeader}>
        <Image
          source={require('@/screenAssets/logo/full-logo.png')}
          style={movieStyle.filmesLogo}
        />

        <View style={movieStyle.filmesSearchContainer}>
          <View style={movieStyle.filmesInputWrapper}>
            <Input
              icon={require('@/screenAssets/icons/search.png')}
              text="Buscar um cinema"
            />
          </View>
        </View>
      </View>

      <FlatList
        data={mockCinemas}
        renderItem={renderCinema}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }} // Aumentado um pouco para acomodar o texto novo

        ListFooterComponent={
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            {/* Botão Ver Mais */}
            <View style={movieStyle.filmesFooterBtn}>
              <ButtonY title="Ver mais" />
            </View>

            {/* Botão Mapa com Texto Abaixo */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginTop: 25, alignItems: 'center' }}
              onPress={() => console.log("Mapa")}
            >
              <Image
                source={require('@/screenAssets/Map-Buttom.svg')}
                style={cinemaStyle.mapButtom}
              />
              
            </TouchableOpacity>
            <Text style={{
                color: '#FFFEB2',
                fontSize: 12,
                fontFamily: 'Poppins-Bold',
                marginTop: 5
              }}>
                Ver Cinemas no Mapa
              </Text>
          </View>
        }
      />
      <BottomNavbar />
    </SafeAreaView>
  );
}