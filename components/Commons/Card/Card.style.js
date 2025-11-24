import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#666",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
        boxShadow: "1px 1px 4px #f1f1f1",
    marginBottom: 8,
  },
  description: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  actions: {
    flexDirection: "row",
    gap: 15,
    width: 70,
    justifyContent: "center",
    backgroundColor: "#444",
  },
  actionBtn: {
    width: 25,
    height: 25,
    alignItems: "center",
    borderColor: "#f1f1f1",
    borderWidth: 2,
    borderRadius: 5,
  },
});
