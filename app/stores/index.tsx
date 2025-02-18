import { Text, View, StyleSheet } from "react-native";
import StoreCard from "../../components/StoreCard";
import { useState } from "react";
import {theme} from "../../theme";

export default function StoresScreen() {
    const [stores, setStores] = useState([
        { id: 1, name: "Store A", T: 50, TH: 50, A: 50, AH: 50, due: 2500 },
        { id: 2, name: "Store B", T: 30, TH: 40, A: 20, AH: 10, due: 1500 },
        { id: 3, name: "Store C", T: 30, TH: 40, A: 20, AH: 10, due: 2000 },
        { id: 4, name: "Store D", T: 30, TH: 40, A: 20, AH: 10, due: 1500 },
        { id: 5, name: "Store E", T: 30, TH: 40, A: 20, AH: 10, due: 3000 },
    ]);

    const deleteStore = (id: number) => {
        setStores(stores.filter((store) => store.id !== id));
    };

    return (
        <View style={styles.container}>
            {stores.map((store) => (
                <StoreCard key={store.id} store={store} onDelete={() => deleteStore(store.id)} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colorBg,
        flex: 1,
    },
    text: {
        // fontSize: 24,
    },
});