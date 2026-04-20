import { componentStyle } from "@/styles/component";
import { Image, ImageSourcePropType, TextInput, View } from "react-native";

type InputProps = {
  icon: ImageSourcePropType;
  text: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (value: string) => void;
};

export function Input({ icon, text, secureTextEntry, value, onChangeText }: InputProps) {
  return (
    <View style={componentStyle.inputContainer}>
      <Image source={icon} style={componentStyle.inputIcon} resizeMode="contain" />
      
      <TextInput
        placeholder={text}
        placeholderTextColor="#A9A9A9"
        style={[componentStyle.inputText, { outlineStyle: 'none' } as any]} 
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}