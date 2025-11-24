import { View, TouchableWithoutFeedback } from "react-native";
import { s } from "./Overlay.style";

export default function Overlay({ visible, onClose, children }) {
  if (!visible) return null;

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={s.overlay}>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}
