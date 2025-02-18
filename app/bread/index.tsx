import {Text, View, StyleSheet} from "react-native";

export default function BreadScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bread</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
    },
});

