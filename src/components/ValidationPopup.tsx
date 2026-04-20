import { Modal, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { componentStyle } from "@/styles/component";
import { Dimensions } from "react-native";
import { ButtonB } from "@/components/ButtonB";

const { width, height } = Dimensions.get('window');

type ValidationPopupProps = {
  visible: boolean;
  message: string;
  onClose: () => void;
};

export function ValidationPopup({ visible, message, onClose }: ValidationPopupProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={componentStyle.popupOverlay}>
        <View style={componentStyle.popup}>
            <Image 
            source={require('@/screenAssets/exclamation.svg')} 
            style={componentStyle.exclamationIcon} 
            />
          <Text style={componentStyle.popupText}>{message}</Text>
        <ButtonB w = {height * 0.075} h = {height * 0.055} textSize={height * 0.025} title="OK"onPress={onClose}></ButtonB>
        </View>
      </View>
    </Modal>
  );
}
