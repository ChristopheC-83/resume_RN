import Dialog from "react-native-dialog";
import { useState } from "react";
import { useTodos } from "../../stores/todoStore";

export default function AddItemDialog({ visible, onClose }) {
  const addTodo = useTodos((s) => s.addTodo);
  const [inputValue, setInputValue] = useState("");

  function handleAddAndContinue() {
    addTodo(inputValue);
    setInputValue("");
  }

  function handleAddAndStop() {
    handleAddAndContinue();
    onClose();
  }

  return (
    <Dialog.Container visible={visible} onBackdropPress={onClose}>
      <Dialog.Title>Ajouter un élément :</Dialog.Title>
      <Dialog.Description>
        Indique ce que tu souhaites ajouter
      </Dialog.Description>
      <Dialog.Input onChangeText={setInputValue} value={inputValue} />

      <Dialog.Button
        label="Annuler"
        onPress={onClose}
        style={{ color: "red" }}
      />
      <Dialog.Button
        label="Ok, stop"
        onPress={handleAddAndStop}
        disabled={inputValue.trim() === ""}
      />
      <Dialog.Button
        label="Ok, suivant"
        onPress={handleAddAndContinue}
        disabled={inputValue.trim() === ""}
        style={{ color: "blue" }}
      />
    </Dialog.Container>
  );
}
