import { ScrollView } from "react-native";
import { s } from "./ListCards.style";
import AppText from "../Commons/AppText/AppText";
import Card from "../Commons/Card/Card";
import { useTodos } from "../../stores/todoStore";

export default function ListCards() {
   
    
  const todos = useTodos((s) => s.todos);
    const filter = useTodos((s) => s.filter);
    
    const filtered = todos.filter((t) => {
      if (filter === "done") return t.isDone;
      if (filter === "todo") return !t.isDone;
      return true;   // si pas done ou todo, on return true, c'est à dire toute la liste
    });

  return (
    <ScrollView style={s.container}>
      {filtered.map((item) => (
        <Card key={item.id} isDone={item.isDone} id={item.id}>
          <AppText fsz={16} fw="bold">
            {item.title}
          </AppText>
        </Card>
      ))}
    </ScrollView>
  );
}
