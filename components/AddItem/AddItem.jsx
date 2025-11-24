import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./AddItem.style";
import AddItemDialog from "./AddItemDialog";
import { useState } from "react";

export default function AddItem() {
  const [dialogVisible, setDialogVisible] = useState(false);

  function handleAddItem() {
      setDialogVisible(true);
  }

  return (
    <>
      <TouchableOpacity style={s.container} onPress={() => handleAddItem()}>
        <Text style={s.text}>Add</Text>
        <Text style={s.text}>➕</Text>
      </TouchableOpacity>

      <AddItemDialog
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}
      />
    </>
  );
}
