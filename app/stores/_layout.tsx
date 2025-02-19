import {Stack, Link} from "expo-router";
import {Pressable} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Layout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{
                title:"Stores",
                headerRight: () => (
                    <Link href={"/stores/addStore"} asChild>
                        <Pressable hitSlop={20}>
                            <MaterialIcons name="add-circle-outline" size={24} color="black" />
                        </Pressable>
                    </Link>
                )
            }}/>
        </Stack>
    )
};