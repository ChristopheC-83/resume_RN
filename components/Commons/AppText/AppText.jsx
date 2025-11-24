import { Text } from "react-native";
import { s } from "./AppText.style";

export default function AppText({ children, fsz, fw }) {
  return (
    <Text style={[s.text, { fontSize: fsz, fontWeight: fw }]}>{children}</Text>
  );
}
