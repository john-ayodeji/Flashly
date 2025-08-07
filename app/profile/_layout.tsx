import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ title: 'Profile', headerShown: false }} />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})