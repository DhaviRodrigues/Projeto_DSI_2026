import { logoStyle } from "@/styles/logo";
import { miscStyle } from "@/styles/misc";
import { textStyle } from "@/styles/text";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Box } from "../components/Box";
import { ButtonVoltar } from "../components/ButtonVoltar";
import { ButtonY } from "../components/ButtonY";
import CodeInput from "../components/CodeInput";

export default function Verify2FA() {
  const router = useRouter();
  
  // O hook useWindowDimensions é essencial aqui porque, diferente do Dimensions.get, ele escuta mudanças e re-renderiza o componente se a tela redimensionar (tipo se girar o aparelho).
  const { width, height } = useWindowDimensions();

  // As dimensões dinâmicas são passadas para a factory de estilos lá embaixo para calcular as posições e tamanhos na hora.
  const styles = getStyles(width, height);

  return (
    <View style={miscStyle.background}>
      {/* Pipocas decorativas com position absolute. O zIndex 0 garante que elas fiquem presas no fundo e não atrapalhem o clique nos botões que estão na frente. */}
      <Image source={require("../screenAssets/popcorn-collor.png")} style={styles.popcorn1} />
      <Image source={require("../screenAssets/popcorn-collor.png")} style={styles.popcorn2} />
      <Image source={require("../screenAssets/popcorn-collor.png")} style={styles.popcorn3} />

      <View style={miscStyle.center}>
        <Image source={require("../screenAssets/escudo-pipoca.png")} style={logoStyle.escudo} />

        <Text style={[textStyle.outBoxMessage]}>
          Estamos quase lá!
        </Text>
        <Text style={[textStyle.outBoxMessage, { marginBottom: height * 0.03}]}>
          Verifique sua Identidade
        </Text>

        <Box vw={0.75} padTop={height * 0.02}>
          <View style={miscStyle.center}>
            {/* Esse texto do email está mockado. Num cenário integrado com a API do BCB inteligencia, a ideia é puxar o email digitado na tela de Register através de um Context ou params da rota para mostrar pro usuário onde o código foi parar. */}
            <Text style={[textStyle.text, { textAlign: "left" }]}>
              Insira o código que enviamos para o e-mail a******@email.com**.
            </Text>
            {/* O gerenciamento de estado e os refs dos 5 quadradinhos de input estão isolados nesse componente para não poluir a tela principal de layout. */}
            <CodeInput />

            <TouchableOpacity style={miscStyle.resendButton}>
              <Text style={[textStyle.underlineText]}>
                Não recebeu o código? Reenviar código
              </Text>
            </TouchableOpacity>
            {/* Como essa tela faz parte do fluxo de cadastro (diferente do esqueci a senha), o sucesso da verificação joga o usuário para a tela de escolher os gêneros (/genre) para finalizar o perfil. */}
            <ButtonY title="Confirmar" onPress={() => router.push("/genre")} />
            <ButtonVoltar title="Voltar" onPress={() => router.push("/register")} />
          </View>
        </Box>
        </View>
      </View>
  );
}

// Factory function gerando os estilos baseados no width e height do momento da renderização.
const getStyles = (width: number, height: number) => StyleSheet.create({
  popcorn1: {
    position: "absolute",
    width: width * 0.1, 
    height: width * 0.1,
    top: height * 0.22, 
    right: width * 0.12,
    zIndex: 0,
  },
  popcorn2: {
    position: "absolute",
    width: width * 0.07,
    height: width * 0.07,
    top: height * 0.23,
    left: width * 0.14,
    zIndex: 0,
  },
  popcorn3: {
    position: "absolute",
    width: width * 0.08,
    height: width * 0.08,
    top: height * 0.27,
    left: width * 0.05,
    zIndex: 0,
  },
});