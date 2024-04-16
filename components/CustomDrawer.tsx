import { DrawerItemList } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

export default function CustomDrawer(props: any) {
    return (
        <View>
            <Text>Custom Drawer</Text>
            <DrawerItemList {...props} />
        </View>
    )
}