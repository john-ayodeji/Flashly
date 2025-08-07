import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { BlurView } from 'expo-blur'
import theme from "../theme";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

export default function layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name="profile" options={{ title: 'Profile', headerShown: false }}/>
        </Stack>
    )
}

const styles = StyleSheet.create({})