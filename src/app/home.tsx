import { MovieCard } from "@/components/MovieCard";
import BottomNavbar from "@/components/Navbar";
import { TitleBar } from "@/components/TitleBar";
import { miscStyle } from "@/styles/misc";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";

// Captura a altura da tela para aplicar espaçamentos responsivos no final do layout.
const { height } = Dimensions.get("window");

export default function Home() {
  // Arrays provisórios para simular o retorno da API e permitir a renderização e o teste dos carrosséis.
  const mockRecommended = [1, 2, 3, 4, 5];
  const mockDiscover = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={miscStyle.background}>
      {/* ScrollView principal para a tela toda rolar verticalmente. O indicador foi escondido para manter o visual mais limpo. */}
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={{ width: '100%' }}
>
      <TitleBar title="Seja Bem-Vindo" />
        <View style={miscStyle.carouselSection}>
          <View style={miscStyle.sectionBadge}>
            <Text style={miscStyle.sectionBadgeText}>Recomendações</Text>
          </View>  
          {/* A escolha do FlatList em vez de um map comum se dá pela performance, já que ele renderiza apenas os itens que estão aparecendo na tela, o que é ideal para listas horizontais. */}
          <FlatList
            data={mockRecommended}
            keyExtractor={(item) => item.toString()}
            renderItem={() => <MovieCard iconPath={require('@/screenAssets/icons/camera.svg')}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={miscStyle.carouselContainer}
          />
        </View>
        <View style={miscStyle.carouselSection}>
          <View style={miscStyle.sectionBadge}>
            <Text style={miscStyle.sectionBadgeText}>Descubra novos filmes</Text>
          </View>
          {/* Reaproveitamento da estrutura do FlatList para a segunda seção de filmes. */}
          <FlatList
            data={mockDiscover}
            keyExtractor={(item) => item.toString()}
            renderItem={() => <MovieCard iconPath={require('@/screenAssets/icons/camera.svg')}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={miscStyle.carouselContainer} 
          />
        </View>
        {/* View vazia funcionando como um "espaçador" (respiro) no fim do ScrollView. Isso garante que as listas não fiquem escondidas debaixo do BottomNavbar ao rolar tudo para baixo. */}
        <View style={{ height: height * 0.3 }} />
      </ScrollView>
      <BottomNavbar />
    </View>
  );
}