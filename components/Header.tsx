import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import theme from '../theme'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const Header = () => {
  const [loaded, error] = useFonts({
    'Winky-Rough': require('../assets/fonts/Winky_Rough/WinkyRough-Italic-VariableFont_wght.ttf')
  })
  const user: boolean = false
  return (
    <View style={styles.container}>
      <Pressable>
        <Link href={'/profile'}>
      <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <View>
          <Image source={require('../assets/default.jpeg')} style={styles.profilePhoto}/>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column'}}>
           <Text style={styles.mainText}>Guest User</Text>
           <Text style={{ fontSize: 12, color: theme.colors.lightGray}}>@guestuser</Text>
        </View>
      </View>
      </Link>
      </Pressable>
      <MaterialIcons name="notifications-none" size={30} color={theme.colors.orangeDark} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 14,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mainText: {
    color: theme.colors.orangeDark,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Winky-Rough',
  },
  loginButton: {
    backgroundColor: theme.colors.orangeDark,
    borderWidth: 3,
    borderColor: theme.colors.border,
    borderRadius: 10,
    height: 39,
    width: 100,
    padding: 3,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginButtonText: {
    color: theme.colors.black,
    fontSize: 20,
    fontWeight: '500',
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 5,
    gap: 10,
    alignItems: 'center'
  },
  userName: {
    fontSize: 25,
    color: theme.colors.lightGray
  }
})