import { Tabs } from "expo-router"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function layout() {
    return (
        <Tabs screenOptions={{ tabBarShowLabel: false }}>
            <Tabs.Screen name="Scanner" />
            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#ff0000",
                },
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" size={24} color="white" />
                ),
            }} />

            <Tabs.Screen name="Scanner" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#ff0000",
                },
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="camera-alt" size={24} color="white" />
                ),
            }} />

            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#ff0000",
                },
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />
                ),
                tabBarInactiveTintColor: "#fff",
            }} />
        </Tabs>
    )
}