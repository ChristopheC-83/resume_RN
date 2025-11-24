import { View , Text, Alert, TouchableOpacity} from 'react-native';
import {s} from './RemoveAllDone.style';
import { useTodos } from '../../stores/todoStore';

export default function RemoveAllDone() {

    const setTodos = useTodos((s) => s.setTodos);
    const todos = useTodos((s) => s.todos);


    function handleRemoveAllDone() {
        Alert.alert(
            "Suppression des tâches faites",
            "Êtes-vous sûr de vouloir supprimer toutes les tâches faites ?",
            [
                { text: "Annuler", style: "cancel" },
                { text: "OK", style: "destructive", onPress: () => handleConfirmRemove() }
            ]
        );
    }

    function handleConfirmRemove() {
        const remainingTodos = todos.filter((t) => !t.isDone);
        setTodos(remainingTodos);
    }


    return (
      <TouchableOpacity style={s.container} onLongPress={() => handleRemoveAllDone()}>
        <Text style={s.text}>All</Text>
        <Text style={s.text}>🗑️</Text>
      </TouchableOpacity>
    );
};