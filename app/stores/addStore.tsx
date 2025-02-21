import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import {theme} from "../../theme";

export default function AddStoreScreen() {
    const [storeName, setStoreName] = useState("");

    const handleAddStore = () => {
        console.log("Adding store:", storeName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Store:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={storeName}
                    onValueChange={(itemValue) => setStoreName(itemValue)}
                >
                    <Picker.Item label="Store A" value="storeA" />
                    <Picker.Item label="Store B" value="storeB" />
                    <Picker.Item label="Store C" value="storeC" />
                    <Picker.Item label="Store D" value="storeD" />
                    <Picker.Item label="Store E" value="storeE" />

                </Picker>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleAddStore}>
                <Text style={styles.buttonText}>Add Store</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colorBg,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    inputGroup: {
        width: "100%",
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    picker: {
        backgroundColor: theme.colorWhite,
        borderRadius: 10,
        padding: 0,
        fontSize: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 20,
    },
    button: {
        backgroundColor: theme.colorPrimary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
});