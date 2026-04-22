import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { miscStyle } from "@/styles/misc";

// Interface definida para tipar a fonte da imagem, permitindo o uso de assets locais ou URIs externas.
type MovieCardProps = {
  iconPath: ImageSourcePropType;
};

export function MovieCard({ iconPath }: MovieCardProps) {
  return (
    // O uso do TouchableOpacity como container principal permite que o card seja um elemento clicável para navegação futura.
    <TouchableOpacity style={miscStyle.movieCard} activeOpacity={0.7}>
      <Image 
        source={iconPath} 
        style={miscStyle.movieCardIcon} 
        // O resizeMode "contain" garante que o ícone ou poster do filme seja redimensionado sem distorção dentro dos limites do card.
        resizeMode="contain" 
      />
    </TouchableOpacity>
  );
}
