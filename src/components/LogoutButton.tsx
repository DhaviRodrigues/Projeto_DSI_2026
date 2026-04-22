import { COLORS } from "@/constants/colors";
import { buttonStyle } from "@/styles/button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions, Text, TouchableOpacity } from "react-native";

// Captura da dimensão vertical do dispositivo para aplicação de escalas responsivas no ícone.
const { height } = Dimensions.get('window');

// Interface para tipagem das propriedades, assegurando a obrigatoriedade da função de callback para o evento de clique.
interface LogoutButtonProps {
  onPress: () => void;
}

export function LogoutButton({ onPress }: LogoutButtonProps) {
  return (
    <TouchableOpacity style={buttonStyle.logoutButton} onPress={onPress}>
      {/* Implementação do ícone de saída com tamanho calculado proporcionalmente à altura da janela. */}
      <MaterialCommunityIcons name="logout" size={height * 0.02} color={COLORS.black} />
      <Text style={buttonStyle.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
}