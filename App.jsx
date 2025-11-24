import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header/Header";
import ListCards from "./components/List/ListCards";
import Footer from "./components/Footer/Footer";
import { useTodos } from "./stores/todoStore";
import { useEffect } from "react";
import { falseTodo } from "./datas/todoFalse";
import RemoveAllDone from "./components/RemoveAllDone/RemoveAllDone";
import AddItem from "./components/AddItem/AddItem";
import AddItemDialog from "./components/AddItem/AddItemDialog";

export default function App() {
  const setTodos = useTodos((s) => s.setTodos);

  useEffect(() => {
    setTodos(falseTodo);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#222", position: "relative" }}>
        <Header />
        <ListCards />
        <Footer />
        <RemoveAllDone />
        <AddItem />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
