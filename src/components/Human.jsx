import { Button, Text, View } from "react-native";
import { style } from "../../App.style.js";
import { useEffect } from "react";
import { useMyContext } from "../context/AppContext";

export default function Human() {
    const { myButton, setMyButton } = useMyContext();

    return (
        <View style={style.container}>
            <Text>Coucou JB ! Cool, ça marche !</Text>
            <Button title="Clique-moi !" onPress={() => setMyButton(true)} />

            {myButton && <Text>OK</Text>}
        </View>
    );
}
