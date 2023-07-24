import { TouchableOpacity, View, Text } from "react-native";
import { style } from "../../App.style.js";

export default function Home() {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
