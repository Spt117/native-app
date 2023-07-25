import { TouchableOpacity, View } from "react-native";
import { style } from "../../App.style.js";
import { useMyContext } from "../context/AppContext";
import Setting from "./setting/Setting";
import Reset from "./Reset";

export default function Home() {
    const { boolSetting, myAppState, setMyAppState } = useMyContext();

    return (
        <View style={style.container}>
            {(myAppState > 0 || boolSetting) && <Reset />}
            {myAppState === 0 && (
                <>
                    <TouchableOpacity disabled={!boolSetting} style={style.button}></TouchableOpacity>
                    <TouchableOpacity
                        disabled={boolSetting}
                        style={style.button}
                        onPress={() => setMyAppState(1)}
                    ></TouchableOpacity>
                    <TouchableOpacity disabled={!boolSetting} style={style.button}></TouchableOpacity>
                </>
            )}
            {myAppState === 1 && <Setting />}
        </View>
    );
}
