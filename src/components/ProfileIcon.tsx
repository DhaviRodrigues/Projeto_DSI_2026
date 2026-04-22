import { Text, TouchableOpacity, View,Image } from "react-native";
import { componentStyle } from "@/styles/component";
// Importação do tipo ReactNode para permitir que o componente aceite qualquer elemento React como filho, facilitando a composição de layout.
import { ReactNode } from "react";

// Definição da interface de propriedades, onde 'children' é opcional.
type ProfileIconProps = {
  children?: ReactNode;
};

/**
 * Componente responsável pela exibição da imagem de perfil do usuário.
 * A estrutura foi pensada para permitir a sobreposição de outros componentes (como o botão de edição) através da prop children.
 */
export function ProfileIcon({ children }: ProfileIconProps) {
    return (
        // O container principal gerencia o alinhamento central e as dimensões circulares da imagem.
        <View style={componentStyle.iconPerfilContainer}>
            <Image 
                source={require('@/screenAssets/icon-perfil.png')} 
                style={componentStyle.iconPerfilImage} 
            />
            {/* A renderização de children abaixo da imagem permite que elementos enviados pelo componente pai apareçam como camadas superiores (overlays). */}
            {children}
        </View>
    );
}
