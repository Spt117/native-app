import { Button, Text } from "react-native";
import InitRFID from "./InitRFID";

export default function Setting() {
    return (
        <>
            <Text>Associez votre puce RFID</Text>
            <InitRFID />
        </>
    );
}
