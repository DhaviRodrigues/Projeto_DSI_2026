import { componentStyle } from "@/styles/component";
import { ReactNode } from "react";
import { View, useWindowDimensions } from "react-native";

// Reutilizando a mesma lógica de tipagem do Box claro. O 'vw' serve para simular o comportamento de Viewport Width do CSS da web, evitando larguras fixas que quebram em telas menores.
type BoxProps = {
vw: number;
padTop: number;
children: ReactNode;
};

// Componente irmão do Box, mas usando a paleta de cores escura (usado principalmente na tela de Perfil para a área de configurações).
export function BoxDark({ vw, padTop, children }: BoxProps) {
  // O uso do hook useWindowDimensions garante que o layout se adapte instantaneamente se o tamanho da tela mudar (por exemplo, se o usuário usar o modo tela dividida do Android).
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const boxWidth = screenWidth * vw

  return (
    // Passamos o style como array para mesclar as regras fixas de componentStyle.boxDark com a largura calculada.
    // Detalhe importante da diferença deste para o Box normal: aqui nós reaproveitamos a prop padTop para definir tanto o paddingTop quanto o paddingBottom, deixando os itens internos (como as linhas de configuração) com um respiro simétrico.
    <View style={[componentStyle.boxDark,{ width: boxWidth, paddingTop: padTop, paddingBottom: padTop}]}>
      {children}
    </View>
  );
}