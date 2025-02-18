import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {theme} from "../theme";

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorPrimary}}>
            <Tabs.Screen name="index" options={{
                title: "Dashboard",
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="dashboard" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="stores" options={{
                title: "Stores",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="storefront" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="bread" options={{
                title: "Bread",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="bread-slice-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="payment" options={{
                title: "Payment",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="money" size={size} color={color} />
                ),
            }} />
        </Tabs>
    );
}