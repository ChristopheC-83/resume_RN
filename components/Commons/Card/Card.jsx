import { View, Text, TouchableOpacity, Alert } from "react-native";
import { s } from "./Card.style";
import AppText from "../AppText/AppText";
import { useTodos } from "../../../stores/todoStore";

export default function Card({ children, isDone, id }) {
  const toggleTodo = useTodos((s) => s.toggleTodo);
  const removeTodo = useTodos((s) => s.removeTodo);

    function removeOneTodo(id) {
     Alert.alert(
      "Suppression de la tâche",
      "Êtes-vous sûr de vouloir supprimer cette tâche ?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "OK", style: "destructive", onPress: () => removeTodo(id) }
      ]
    );  
  }

  return (
    <View style={s.container}>
      <TouchableOpacity style={s.description} onPress={() => toggleTodo(id)}>
        <AppText fsz={16} fw="bold">
          {isDone ? "✅" : "⬛"}
        </AppText>
        <AppText fsz={16}>
          <Text style={isDone && { textDecorationLine: "line-through" }}>
            {children}
          </Text>
        </AppText>
      </TouchableOpacity>
      <View style={s.actions}>
        <TouchableOpacity
          style={[{ backgroundColor: "#0aa016ff" }, s.actionBtn]}
        >
          <AppText>✏️</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: "#f01d1dff" }, s.actionBtn]}
          onLongPress={() => removeOneTodo(id)}
        >
          <AppText>🗑️</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
