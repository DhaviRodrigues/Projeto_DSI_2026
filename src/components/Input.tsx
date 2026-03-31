import { View, TextInput, Image, ImageSourcePropType } from "react-native";
import { style } from "@/styles/style";

type InputProps = {
  icon: ImageSourcePropType;
  text: string;
  secureTextEntry?: boolean;
};

export function Input({ icon, text, secureTextEntry }: InputProps) {
  return (
    <View style={style.inputContainer}>
      <Image source={icon} style={style.inputIcon} resizeMode="contain" />
      
      <TextInput
        placeholder={text}
        placeholderTextColor="#A9A9A9"
        style={style.inputText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}