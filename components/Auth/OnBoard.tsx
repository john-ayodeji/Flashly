import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const OnBoard = () => {
  return (
    <View>
        <View>
            {/* <Image resizeMethod='auto' resizeMode='cover' source={require('../../assets/splash2.png')} /> */}
            <ImageBackground source={require('../../assets/splash2.png')}/>
        </View>
    </View>
  )
}

export default OnBoard

const styles = StyleSheet.create({
})