import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../theme";
import { useRouter } from "expo-router";

export default function Bread() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropButton}
                onPress={() => router.push("/bread/breadAdd")}
            >
                <Text style={styles.dropButtonText}>Add Bread</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.dropButton}
                onPress={() => router.push("/bread/breadReturn")}
            >
                <Text style={styles.dropButtonText}>Return Bread</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.dropButton}
                onPress={() => router.push("/bread/breadDrop")}
            >
                <Text style={styles.dropButtonText}>Drop Bread</Text>
            </TouchableOpacity>
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
    dropButton: {
        backgroundColor: theme.colorPrimary,
        width: "70%",
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
    },
    dropButtonText: {
        color: theme.colorWhite,
        fontSize: 20,
        fontWeight: "bold",
    },
});