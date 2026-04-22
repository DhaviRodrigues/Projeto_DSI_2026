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
  
  // Optei por usar o useWindowDimensions no lugar do Dimensions.get('window') aqui porque esse hook re-renderiza a tela se o tamanho mudar (tipo se o usuário girar o celular de lado).
  const { width, height } = useWindowDimensions();

  // Passo as dimensões como parâmetro pra função que cria o StyleSheet. Isso permite que eu faça cálculos de porcentagem no tamanho dos elementos baseado na tela atual.
  const styles = getStyles(width, height);

  return (
    <View style={miscStyle.background}>
      {/* Essas imagens da pipoca tão com position "absolute" lá no estilo pra ficarem flutuando no fundo. O zIndex garante que elas fiquem na camada certa sem sobrepor o modal. */}
      <Image source={require("../screenAssets/popcorn-collor.png")} style={styles.popcorn1} />
      <Image source={require("../screenAssets/popcorn-collor.png")} style={styles.popcorn2} />
      <Image source={require("../screenAssets/popcorn-collor.png")} style={styles.popcorn3} />

      <View style={miscStyle.center}>
        <Image source={require("../screenAssets/escudo-pipoca.png")} style={styles.escudo} />

        <Text style={[textStyle.outBoxMessage, styles.titleLarge]}>
          Recuperação de Senha
        </Text>

        <Box vw={0.88} padTop={height * 0.02}>
          <View style={styles.boxContent}>
            {/* O email mascarado tá hardcoded aqui. Quando a gente ligar com o fluxo de esqueci a senha, isso aqui vai precisar ler o email que o cara digitou na tela anterior via params do router ou de algum context. */}
            <Text style={[textStyle.text, styles.instructionText]}>
              Insira o código de 5 dígitos que enviamos para o e-mail a******@email.com**.
            </Text>

            {/* A lógica chata de focar nos quadradinhos separados do PIN (os refs de cada input) tá toda isolada dentro desse componente pra deixar essa tela mais limpa. */}
            <CodeInput />

            <TouchableOpacity style={styles.resendButton}>
              <Text style={[textStyle.text, styles.resendText]}>
                Não recebeu o código? Reenviar código
              </Text>
            </TouchableOpacity>

            {/* Por enquanto tá dando bypass e mandando direto pra home, mas aqui vai entrar a lógica assíncrona pra bater o PIN na API e pegar o token de recuperação. */}
            <ButtonY title="Confirmar" onPress={() => router.push("/home")} />
          </View>
        </Box>

        <View style={styles.backButtonContainer}>
          <ButtonVoltar title="Voltar" onPress={() => router.back()} />
        </View>
      </View>
    </View>
  );
}

// Em vez de um StyleSheet.create padrão, fiz uma factory function que recebe width e height pra gerar os estilos dinamicamente.
const getStyles = (width: number, height: number) => StyleSheet.create({
  popcorn1: {
    position: "absolute",
    width: width * 0.1, 
    height: width * 0.1,
    top: height * 0.25, 
    right: width * 0.12,
    zIndex: 10,
  },
  popcorn2: {
    position: "absolute",
    width: width * 0.07,
    height: width * 0.07,
    top: height * 0.28,
    left: width * 0.10,
    zIndex: 10,
  },
  popcorn3: {
    position: "absolute",
    width: width * 0.08,
    height: width * 0.08,
    top: height * 0.32,
    left: width * 0.05,
    zIndex: 10,
  },
  escudo: {
    width: width * 0.45, 
    height: width * 0.45,
    marginTop: height * 0.05,
    // O contain garante que o escudo não fique achatado se a proporção da tela for muito diferente (ex: tablet vs celular)
    resizeMode: "contain",
  },

  titleLarge: {
    fontSize: 20,
    marginBottom: height * 0.01,
  },
  boxContent: {
    padding: height * 0.02,
    alignItems: "center",
  },
  instructionText: {
    fontSize: 13,
    marginBottom: height * 0.02,
    textAlign: "center",
  },
  resendButton: {
    alignSelf: "center",
    marginBottom: height * 0.03,
    marginTop: height * 0.01,
  },
  resendText: {
    textDecorationLine: "underline",
  },
  backButtonContainer: {
    // Margem negativa puxando o botão de voltar pra cima um pouco pra ele encaixar melhor no final da Box branca
    marginTop: -30, 
    width: "100%", 
    alignItems: "center",
  },
});