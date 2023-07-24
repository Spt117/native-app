import { Button, Text, View } from "react-native";
import { style } from "../App.style.js";

export default function Human() {
    return (
        <View style={style.container}>
            <Text>Coucou JB ! Cool, ça marche !</Text>
            <Button title="Clique-moi !" onPress={() => alert("Coucou !")} />
        </View>
    );
}
