import {Stack, Link} from "expo-router";
import {Pressable} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {SQLiteDatabase, SQLiteProvider} from "expo-sqlite";

export default function Layout() {

    // const createDbIfNeeded = async (db : SQLiteDatabase) => {
    //     console.log("Creating stores table if not exists");
    //
    //     await db.execAsync(
    //         "CREATE TABLE IF NOT EXISTS stores (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);"
    //     );
    // };

    return(
        <SQLiteProvider databaseName={"paanms.db"}>
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
        </SQLiteProvider>
    )
};