import { View, useWindowDimensions } from "react-native";
import { style } from "@/styles/style";

type BoxProps = {
  vw: number;
  vh: number;
padTop: number;
};

export function Box({ vw, vh, padTop}: BoxProps) {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const boxWidth = screenWidth * vw
  const boxHeight = screenHeight * vh

  return (
    <View style={[style.box,
        { 
          width: boxWidth, 
          height: boxHeight, 
          paddingTop: padTop
        }
      ]} 
    />
  );
}