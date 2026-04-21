import { textStyle } from "@/styles/text";
import {buttonStyle} from "@/styles/button";
import { Text, TouchableOpacity } from "react-native";

// Tipagem das props. Deixei quase tudo como opcional (?) pra gente poder reaproveitar esse mesmo botão no app inteiro, injetando largura, altura ou tamanho de texto específico só quando o estilo padrão não servir praquela tela.
type ButtonProps = {
  title: string;
  h?: number;
  w?: number;
  textSize?: number;
  align?: "flex-start" | "center" | "flex-end";
  borderRadius?: number;
  onPress?: () => void;
};

export function ButtonB({ title, h, w, textSize, align, borderRadius, onPress }: ButtonProps) {
  return (
    // Passando o style como um array pra mesclar as classes globais (cor de fundo, padding base) com os overrides que vêm das props. O justifyContent aqui tá mapeado pro 'align' pra facilitar centralizar o conteúdo quando precisar.
    <TouchableOpacity 
      style={[buttonStyle.buttonB, buttonStyle.button, { height: h, width: w, justifyContent: align, borderRadius: borderRadius }]} 
      // O activeOpacity 0.7 dá um feedback visual mais premium no clique, tirando aquele piscar quase transparente agressivo que é o padrão do React Native.
      activeOpacity={0.7} 
      onPress={onPress}
    >
      <Text style={[buttonStyle.buttonText, buttonStyle.buttonBText, { fontSize: textSize }]}>{title}</Text>
    </TouchableOpacity>
  );
}