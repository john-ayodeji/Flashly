import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import theme from '../theme'
import type { ImageSourcePropType } from 'react-native';
import { useState } from 'react';

type Props = {
    coverImage: ImageSourcePropType,
    viewed: boolean,
    onView: () => void
}

const Highlights = ({ coverImage, viewed, onView }: Props) => {
  return (
    <View style={styles.storyContainer}>
        <Pressable onPress={ onView } android_disableSound>
            <View style={[styles.storyIconContainer, viewed ? {borderColor: theme.colors.border} : { borderColor: theme.colors.orangeDark } ]}>
                <Image source={coverImage} style={styles.storyIcon}/>
            </View>
        </Pressable>
    </View>
  )
}

export default Highlights

const styles = StyleSheet.create({
    storyContainer: {
        width: 100,
        height: 'auto',
        alignItems: 'center',
    },
    storyIcon: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    storyIconContainer: {
        width: 85,
        height: 85,
        borderWidth: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: theme.colors.border
    },
})