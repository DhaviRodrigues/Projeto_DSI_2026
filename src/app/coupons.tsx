import BottomNavbar from '@/components/Navbar';
import { miscStyle } from '@/styles/misc';
import { Dimensions, ScrollView, Text, View } from 'react-native';

// Pegando a altura total da janela pra poder posicionar o texto provisório de forma responsiva mais embaixo
const { height } = Dimensions.get('window');

export default function Coupons() {
  return (
    <View style={miscStyle.background}>
        {/* O ScrollView já fica na estrutura base pra quando a gente mapear a lista real de cupons a tela poder rolar sem quebrar o layout no celular */}
        <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={{ width: '100%' }}
        >
          <Text style={{
            fontSize : 16, 
            color: '#FFFEB2',
            textAlign: 'center', 
            fontFamily: 'Poppins-Semibold',
            // Jogando o texto mais ou menos pro meio da tela usando a altura relativa (40%). Quando entrarem os cards dos cupons reais, a gente tira isso.
            marginTop: height * 0.4}}>
            Conteúdo da página de Cupons
            </Text>
        </ScrollView>
      <BottomNavbar />
    </View>
  );
}
