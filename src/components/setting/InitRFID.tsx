import React, { useEffect } from "react";
import { View, Text } from "react-native";
import NfcManager, { NfcEvents, NfcTech } from "react-native-nfc-manager";

export default function InitRFID() {
    useEffect(() => {
        NfcManager.isSupported()
            .then((supported) => {
                if (supported) {
                    console.log("La technologie NFC est prise en charge sur cet appareil.");
                } else {
                    console.log("La technologie NFC n'est pas prise en charge sur cet appareil.");
                }
            })
            .catch((err) =>
                console.log("Une erreur est survenue lors de la vérification de la prise en charge de la NFC.", err)
            );
    }, []);

    return (
        <View>
            <Text>Lecteur NFC</Text>
        </View>
    );
}
