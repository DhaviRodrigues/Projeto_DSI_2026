import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { componentStyle } from '@/styles/component';

// Interface para definição das propriedades aceitas pelo componente, garantindo a tipagem do evento de clique.
type PencilProps = {
  onPress?: () => void;
};

/**
 * Componente que abstrai o botão de edição (ícone de lápis).
 * Utilizado sobreposto a outros elementos (como fotos de perfil) para indicar interatividade de alteração.
 */
export function Pencil({ onPress }: PencilProps) {
    return (
        // Container tátil que encapsula o ícone; o estilo editButtonContainer gerencia o posicionamento absoluto.
        <TouchableOpacity style={componentStyle.editButtonContainer} onPress={onPress}>
            <Image 
                // Importação do recurso gráfico em formato vetorial para manter a resolução em diferentes densidades de tela.
                source={require('@/screenAssets/icons/pencil.svg')} 
                style={componentStyle.editButtonIcon} 
            />
        </TouchableOpacity>
    );
}