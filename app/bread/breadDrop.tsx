import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {theme} from "../../theme";

const BreadDropScreen: React.FC = () => {
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({
        Theti: 0,
        ThetiHalf: 0,
        Achchu: 0,
        AchchuHalf: 0,
    });

    const breadPrices: { [key: string]: number } = {
        Theti: 150,
        ThetiHalf: 80,
        Achchu: 130,
        AchchuHalf: 65,
    };

    const [store, setStore] = useState<string | null>(null);

    const handleIncrement = (type: string) => {
        setQuantities((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    };

    const handleDecrement = (type: string) => {
        setQuantities((prev) =>
            prev[type] > 0 ? { ...prev, [type]: prev[type] - 1 } : prev
        );
    };

    const totalBreads = Object.values(quantities).reduce((sum, value) => sum + value, 0);
    const totalAmount = Object.keys(quantities).reduce((sum, type) => sum + quantities[type] * breadPrices[type], 0);

    return (
        <ScrollView style={styles.container}>
        <View>
            <Text style={styles.title}>Drop</Text>

            <Text style={styles.label}>Types</Text>
            {Object.keys(quantities).map((type) => (
                <View key={type} style={styles.row}>
                    <Text style={styles.breadType}>{type}</Text>
                    <TouchableOpacity onPress={() => handleDecrement(type)} style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantities[type]}</Text>
                    <TouchableOpacity onPress={() => handleIncrement(type)} style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <Text style={styles.label}>Store:</Text>
            <RNPickerSelect
                onValueChange={(value) => setStore(value)}
                items={[
                    { label: "Store 1", value: "store1" },
                    { label: "Store 2", value: "store2" },
                    { label: "Store 3", value: "store3" },
                ]}
                style={pickerSelectStyles}
                placeholder={{ label: "Select store", value: null }}
            />

            <Text style={styles.totalText}>Total Breads :{"   "}
                <Text style={styles.total}>{totalBreads}</Text>
            </Text>
            <Text style={styles.totalText}>Total Amount :{"  "}
                <Text style={styles.total}>Rs {totalAmount}</Text>
            </Text>

            <TouchableOpacity style={styles.dropButton} onPress={() => {console.log("Drop btn pressed..")}}>
                <Text style={styles.dropButtonText} >Drop</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorBg,
        padding: 20,
        // alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: "500",
        alignSelf: "flex-start",
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
        marginBottom: 10,
        borderWidth: 2,
        borderColor:theme.colorPrimary,
    },
    breadType: {
        fontSize: 18,
        paddingLeft: 10,
        flex: 1,
    },
    button: {
        backgroundColor: theme.colorPrimary,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 22,
        color: "#fff",
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5,
    },
    dropButton: {
        backgroundColor: theme.colorPrimary,
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
    },
    dropButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    total: {
        color: "black",
        fontSize: 18,
        marginLeft: 20,

    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        width: "90%",
        alignSelf: "center",
        marginBottom: 10,
        fontSize: 16,
    },
    inputAndroid: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8,
        width: "90%",
        alignSelf: "center",
        marginBottom: 10,
        fontSize: 16,
    },
});

export default BreadDropScreen;
