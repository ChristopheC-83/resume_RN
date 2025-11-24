import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./Header.style";
import AppText from "../Commons/AppText/AppText";
import todo from "../../assets/todo.png";

export default function Header() {
  return (
    <View style={s.header}>
      <View style={s.title}>
        <Image source={todo} style={s.icon} />
        <AppText fsz={30} fw={"bold"}>
          YFOKOI
        </AppText>
      </View>
      <TouchableOpacity>
        <AppText fsz={20} fw={"bold"}>Listes</AppText>
        {/*  pour choisir liste ou créer nouvelle, le tout dans une modale */}
      </TouchableOpacity>
    </View>
  );
}
