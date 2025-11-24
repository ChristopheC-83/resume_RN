import { ScrollView } from "react-native";
import Card from "../Commons/Card/Card";
import AppText from "../Commons/AppText/AppText";
import { useTodos } from "../../stores/todoStore";
import { s } from "./ListCards.style";

export default function ListCards() {
  
  const todos = useTodos((s) => s.todos);
  const filter = useTodos((s) => s.filter);

  const filteredTodos = todos.filter((t) => {
    if (filter === "done") return t.isDone;
    if (filter === "todo") return !t.isDone;
    return true;
  });


  return (
    <ScrollView style={s.container}>
      <AppText fsz={20} fw="bold" style={{ marginBottom: 10 }}>
        Liste des tâches
      </AppText>
      {filteredTodos.map((item) => (
        <Card key={item.id} id={item.id} isDone={item.isDone}>
          <AppText fsz={16} fw="bold">
            {item.title}
          </AppText>
        </Card>
      ))}
    </ScrollView>
  );
}

