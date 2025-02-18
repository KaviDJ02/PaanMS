import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const BreadDropScreen: React.FC = () => {
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({
        T: 0,
        TH: 0,
        A: 0,
        AH: 0,
    });

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
    const totalAmount = totalBreads * 80; // Adjust price per bread as needed

    return (
        <View style={styles.container}>
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

            <Text style={styles.totalText}>Total Breads: {totalBreads}</Text>
            <Text style={styles.totalText}>Total Amount: Rs {totalAmount}</Text>

            <TouchableOpacity style={styles.dropButton}>
                <Text style={styles.dropButtonText}>Drop</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fde7cc",
        padding: 20,
        alignItems: "center",
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
        marginBottom: 5,
    },
    row: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#ffb100",
    },
    breadType: {
        fontSize: 18,
        flex: 1,
    },
    button: {
        backgroundColor: "#ffb100",
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
        backgroundColor: "#ffb100",
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10,
        marginTop: 20,
    },
    dropButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});

const pickerSelectStyles = {
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
};

export default BreadDropScreen;
