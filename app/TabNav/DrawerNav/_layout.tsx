import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '@comp/CustomDrawer';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { MaterialIcons } from '@expo/vector-icons';

export default function layout() {
    return (
        <Drawer drawerContent={(...props) => (
            CustomDrawer(...props)
        )}>
            <Drawer.Screen name="Home" options={{headerShown: false, drawerIcon: ({size, color}) =>(
                <MateralIcons name="home" size={size} color={color} />
            )}} />
        </Drawer>
    )
}