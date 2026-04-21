import React from "react";
import { View, Text } from "react-native";
import { componentStyle } from "@/styles/component";

// Definição da interface para garantir a tipagem estática do título recebido via propriedades.
type TitleBarProps = {
  title: string;
};

/**
 * Componente de barra de título reutilizável.
 * Desenvolvido para padronizar o cabeçalho das telas, centralizando a estilização do texto de boas-vindas.
 */
export function TitleBar({ title }: TitleBarProps) {
  return (
    <View style={componentStyle.titleBarContainer}>
      <Text style={componentStyle.welcomeTitle}>
        {/* Renderização dinâmica do título para permitir a adaptação do componente em diferentes contextos da aplicação. */}
        {title}
      </Text>
    </View>
  );
}