import AsyncStorage from "@react-native-async-storage/async-storage";




export async function saveTodoList(key, value) {
    try {
        console.log("J'ai save ma liste !");
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error("Error saving todo list:", error);
    }
}

export async function loadTodoList(key) {
    try {
        console.log("J'ai load ma liste !");
        const jsonValue = await AsyncStorage.getItem(key);
        if(jsonValue != null) {
            return JSON.parse(jsonValue);
        }
        return null;
    } catch (error) {
        console.error("Error loading todo list:", error);
        return null;
    }
}