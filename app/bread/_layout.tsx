import {Stack} from "expo-router";
import React from "react";

export default function Layout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ title: "Bread" }} />
            <Stack.Screen name="breadAdd" options={{ title: "Bread Add", presentation: "modal" }} />
            <Stack.Screen name="breadReturn" options={{ title: "Bread Return", presentation: "modal" }} />
            <Stack.Screen name="breadDrop" options={{ title: "Bread Drop", presentation: "modal" }} />
        </Stack>
    )
};