import { useColorScheme } from "react-native";

interface Cores {
    bgPrimary: string
    bgSecondary: string
    bgInfo?: string
}

const light: Cores = {
    bgPrimary: '#ffffff',
    bgSecondary: '#ff0000',
    bgInfo: '#011e83',
}
const dark: Cores = {
    bgPrimary: '#240707',
    bgSecondary: '#ff0000',
}

export function useColor() {
    const colorScheme = useColorScheme();
    if (colorScheme === 'dark'){
        return dark
    }
    else {
        return light
    }
}