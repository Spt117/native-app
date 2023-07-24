import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Human from "./src/components/Human";
import { MyContextProvider } from "./src/context/AppContext";

export default function App() {
    return (
        <MyContextProvider>
            <SafeAreaProvider>
                <SafeAreaView>
                    <Human />
                </SafeAreaView>
            </SafeAreaProvider>
        </MyContextProvider>
    );
}
