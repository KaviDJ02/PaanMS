import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {theme} from "../theme";

interface Store {
    id: number;
    name: string;
    T: number;
    TH: number;
    A: number;
    AH: number;
    due: number;
}

interface StoreCardProps {
    store: Store;
    onDelete: (id: number) => void;
}

const StoreCard: React.FC<StoreCardProps> = ({ store, onDelete }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.storeName}>{store.name}</Text>
                <TouchableOpacity onPress={() => onDelete(store.id)}>
                    <FontAwesome name="trash" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.details}>
                <Text style={styles.itemText}>T : {store.T}</Text>
                <Text style={styles.itemText}>TH : {store.TH}</Text>
                <Text style={styles.itemText}>A : {store.A}</Text>
                <Text style={styles.itemText}>AH : {store.AH}</Text>
            </View>

            <Text style={styles.dueText}>
                Due Amount: <Text style={styles.amount}>Rs {store.due}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colorWhite,
        borderRadius: 10,
        padding: 15,
        // paddingHorizontal: 50,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: "space-between",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    storeName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    icon: {
        width: 20,
        height: 20,
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    itemText: {
        fontSize: 14,
    },
    dueText: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    amount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
});

export default StoreCard;
