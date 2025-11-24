import { View, TouchableOpacity, Text } from "react-native";
import { s } from "./Footer.style";
import { useTodos } from "../../stores/todoStore";

export default function Footer() {
  
  const filter = useTodos((s) => s.filter);
  const setFilter = useTodos((s) => s.setFilter);
  const todos = useTodos((s) => s.todos);

  const countByStatus = todos.reduce(
    (acc, todo) => {
      todo.isDone ? acc.done++ : acc.todo++;
      return acc;
    },
    { all: todos.length, done: 0, todo: 0 }
  );

//   console.log(countByStatus);

  const buttons = [
    { key: "all", label: "Tout", qtt: countByStatus.all },
    { key: "todo", label: "A faire", qtt: countByStatus.todo },
    { key: "done", label: "Fait", qtt: countByStatus.done },
  ];

  return (
    <View style={s.container}>
      {buttons.map((btn) => (
        <TouchableOpacity key={btn.key} onPress={() => setFilter(btn.key)}>
          <Text style={[s.btnText, filter === btn.key && s.btnTextActive]}>
            {btn.label} ({btn.qtt})
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
