import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: "rgba(142, 197, 252, 0.5);",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
    },
    button: {
        display: "flex",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 25,
        backgroundColor: "#008CBA",
    },
    textButton: {
        fontSize: 16,
        color: "#fff",
    },
});
