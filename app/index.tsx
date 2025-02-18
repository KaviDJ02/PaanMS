import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {theme} from "../theme";

export default function DashboardScreen() {
    const router = useRouter();

    const handelDrop = () => {
        router.push("/bread/breadDrop");
    };

    return (
        <View style={styles.container}>
            {/* Date & Settings */}
            <View style={styles.header}>
                <Text style={styles.date}>2025.02.20</Text>
                <MaterialIcons name="settings" size={24} color="#D88C3D" />
            </View>
            <Text style={styles.day}>Sunday</Text>

            {/* Bread Section */}
            <Text style={styles.sectionTitle}>Bread</Text>
            <View style={styles.card}>
                <Text style={styles.infoText}>
                    Todays Available: <Text style={styles.boldText}>200</Text>
                </Text>
                <Text style={styles.listItem}>• Theti: <Text style={styles.boldText}>50</Text></Text>
                <Text style={styles.listItem}>• Theti half: <Text style={styles.boldText}>50</Text></Text>
                <Text style={styles.listItem}>• Achchu: <Text style={styles.boldText}>50</Text></Text>
                <Text style={styles.listItem}>• Achchu half: <Text style={styles.boldText}>50</Text></Text>
                <TouchableOpacity style={styles.button} onPress={handelDrop}>
                    <Text style={styles.buttonText}>Drop</Text>
                </TouchableOpacity>
            </View>

            {/* Payments Section */}
            <Text style={styles.sectionTitle}>Payments</Text>
            <View style={styles.card}>
                <Text style={styles.infoText}>
                    Total Due: <Text style={styles.boldText}>Rs. 25000</Text>
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Received</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorBg,
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    date: {
        fontSize: 18,
        color: "#333",
    },
    day: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 5,
    },
    card: {
        backgroundColor: "#FFF",
        borderRadius: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    boldText: {
        fontWeight: "bold",
    },
    listItem: {
        fontSize: 16,
        marginLeft: 10,
    },
    button: {
        backgroundColor: "#F4A43C",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 15,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});