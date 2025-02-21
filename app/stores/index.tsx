import { View, StyleSheet, ScrollView} from "react-native";
import StoreCard from "../../components/StoreCard";
import { useState } from "react";
import {theme} from "../../theme";

export default function StoresScreen() {
    const [stores, setStores] = useState([
        { id: 1, name: "Cargills Food City", T: 100, TH: 80, A: 60, AH: 40, due: 5000 },
        { id: 2, name: "Keells Super", T: 90, TH: 70, A: 50, AH: 30, due: 4500 },
        { id: 3, name: "Arpico Supercentre", T: 120, TH: 100, A: 80, AH: 60, due: 6000 },
        { id: 4, name: "Laugfs Super", T: 110, TH: 90, A: 70, AH: 50, due: 5500 },
        { id: 5, name: "Sathosa", T: 80, TH: 60, A: 40, AH: 20, due: 4000 },
        { id: 6, name: "Glomark", T: 95, TH: 75, A: 55, AH: 35, due: 4750 },
        { id: 7, name: "SPAR", T: 85, TH: 65, A: 45, AH: 25, due: 4250 },
        { id: 8, name: "Lanka Sathosa", T: 105, TH: 85, A: 65, AH: 45, due: 5250 },
        { id: 9, name: "Food City Express", T: 75, TH: 55, A: 35, AH: 15, due: 3750 },
        { id: 10, name: "Arpico Daily", T: 115, TH: 95, A: 75, AH: 55, due: 5750 },
    ]);

    const deleteStore = (id: number) => {
        setStores(stores.filter((store) => store.id !== id));
    };

    return (
        <ScrollView style={styles.container}>
        <View >
            {stores.map((store) => (
                <StoreCard key={store.id} store={store} onDelete={() => deleteStore(store.id)} />
            ))}
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colorBg,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    text: {
        // fontSize: 24,
    },
});