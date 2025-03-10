import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {theme} from "../../theme";

const ReceivedPayment: React.FC = () => {
    const [store, setStore] = useState<string>("");
    const [amount, setAmount] = useState<string>("");

    const handlePayment = () => {
        console.log("Payment received from:", store, "Amount:", amount);
        // Add logic to save or process payment
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Received Payment</Text>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Store:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={store}
                    onValueChange={(itemValue) => setStore(itemValue)}
                >
                    <Picker.Item label="Store A" value="storeA" />
                    <Picker.Item label="Store B" value="storeB" />
                    <Picker.Item label="Store C" value="storeC" />
                    <Picker.Item label="Store D" value="storeD" />
                    <Picker.Item label="Store E" value="storeE" />

                </Picker>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Amount:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handlePayment}>
                <Text style={styles.buttonText}>Received</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorBg,
        paddingTop: 15,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 30,
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
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        backgroundColor: theme.colorPrimary,
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default ReceivedPayment;
