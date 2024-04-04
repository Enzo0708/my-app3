import { Tabs } from "expo-router"

export default function layout() {
    return (
        <Tabs>
            <Tabs.Screen name="Scanner" />
            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#ff0000",
                },
                }} />
        </Tabs>
    )
}