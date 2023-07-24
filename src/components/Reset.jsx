import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useMyContext } from "../context/AppContext";

const styles = StyleSheet.create({
    closeButton: {
        position: "absolute",
        top: 20,
        right: 20,
    },
    closeButtonText: {
        fontSize: 30,
    },
});

export default function Reset() {
    const { setMyAppState, setBoolSetting } = useMyContext();

    function reset() {
        setBoolSetting(false);
        setMyAppState(0);
    }

    return (
        <TouchableOpacity style={styles.closeButton} onPress={reset}>
            <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
    );
}
