import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { theme } from "../theme";

export function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colorBg,
    },
    text: {
        fontSize: 24,
    },
});