import { View, Text } from "react-native";
import { s } from "./AddItemDialog.style";
import Dialog from "react-native-dialog";
import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { useTodos } from "../../stores/todoStore";
import { saveTodoList } from "../../utilities/storage";

// import Dialog from "react-native-dialog";

export default function AddItemDialog({ visible, onClose }) {
  const addTodo = useTodos((s) => s.addTodo);
  const todos = useTodos((s) => s.todos);
  let isFirstRender= true

  const [inputValue, setInputValue] = useState("");

  function handleAddAndContinue() {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue.trim(),
    };
    addTodo(newTodo.id, newTodo.title);
    setInputValue("");
  }

  function handleAddAndStop() {
    handleAddAndContinue();
    onClose();
  }

  useEffect(() => {
    if (!isFirstRender) {
      saveTodoList("@todoList", todos);
    } else {
      isFirstRender = false;
    }
  }, [todos])



  return (
    <Dialog.Container visible={visible} onBackdropPress={onClose}>
      <Dialog.Title>Ajouter un élément :</Dialog.Title>

      <Dialog.Description>
        Indique ce que tu souhaites ajouter
      </Dialog.Description>

      <Dialog.Input onChangeText={setInputValue} value={inputValue} />

      <Dialog.Button
        label="Annuler"
        style={{ color: "red" }}
        onPress={onClose}
      />
      <Dialog.Button
        label="Ok, stop"
        onPress={handleAddAndStop}
        disabled={inputValue.trim() === ""}
      />
      <Dialog.Button
        disabled={inputValue.trim() === ""}
        label="Ok, suivant"
        style={{ color: "blue" }}
        onPress={handleAddAndContinue}
      />
    </Dialog.Container>
  );
}
