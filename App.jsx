import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Human from "./components/Human";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Human />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
