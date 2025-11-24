import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
        paddingVertical: 10,
    backgroundColor: "#444",
  },

  btnText: {
    fontSize: 16,
    color: "#fff",
  },

  btnTextActive: {
    color: "#3f5ee7ff",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
