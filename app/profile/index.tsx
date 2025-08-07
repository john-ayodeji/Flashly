import { StyleSheet, Text, View, Image, Pressable, ScrollView, TextInput } from 'react-native';
import theme from '../../theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import SubHeaders from '../../components/SubHeaders';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const index = () => {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.userInfo}>
          <View style={styles.profileHeader}>
            <Pressable onPress={() => { router.back() }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="caret-back" size={35} color={ theme.colors.orangeDark} />
                <Text style={styles.UserName}>Home</Text>
            </Pressable>
            <View style={styles.share}>
                <Entypo name="log-out" size={24} color="black" />
                <Text>Log Out</Text>
            </View>
          </View>
          <View style={styles.profileImageContainer}>
            <Image source={require('../../assets/default.jpeg')} style={{ height: 120, width: 120, borderRadius: 100}} />
          </View>
          <View style={styles.usernameContainer}>
            <Text style={styles.UserName}>Guest User</Text>
            <Text style={styles.username}>@guestuser</Text>
          </View>
        </View>
        <View style={{ gap: 8, display: 'flex', flexDirection: 'column'}}>
            <SubHeaders title='Edit Profile' />
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10}}>
              <View style={ styles.searchBarContainer }>
                <AntDesign name="user" size={24} color={ theme.colors.lightGray } style={ styles.searchIcon } />
                <TextInput returnKeyType='done' placeholder='Name' placeholderTextColor={theme.colors.border} style={styles.searchBar} />
              </View>
              <View style={ styles.searchBarContainer }>
                <Fontisto name="email" size={24} color={ theme.colors.lightGray } style={ styles.searchIcon } />
                <TextInput returnKeyType='done' placeholder='Email' placeholderTextColor={theme.colors.border} style={styles.searchBar} />
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={{ backgroundColor: theme.colors.orangeDark, width: 140, height: 40, padding: 6, borderRadius: 15, alignItems: 'center' }}>
                <Text style={{ fontSize: 22}}>Edit Info</Text>
              </View>
            </View>
        </View>
        <View style={{ gap: 5}}>
            <SubHeaders title='Change Password' />
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10}}>
              <View style={ styles.searchBarContainer }>
                <MaterialIcons name="password" size={24} color={ theme.colors.lightGray } style={ styles.searchIcon } />
                <TextInput returnKeyType='done' placeholder='Current Password' placeholderTextColor={theme.colors.border} style={styles.searchBar} />
              </View>
              <View style={ styles.searchBarContainer }>
                <MaterialIcons name="password" size={24} color={ theme.colors.lightGray } style={ styles.searchIcon } />
                <TextInput returnKeyType='done' placeholder='New Password' placeholderTextColor={theme.colors.border} style={styles.searchBar} />
              </View>          
              <View style={ styles.searchBarContainer }>
                <MaterialIcons name="password" size={24} color={ theme.colors.lightGray } style={ styles.searchIcon } />
                <TextInput returnKeyType='done' placeholder='Confirm Password' placeholderTextColor={theme.colors.border} style={styles.searchBar} />
              </View>             
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={{ backgroundColor: theme.colors.orangeDark, width: 210, height: 40, padding: 6, borderRadius: 15, alignItems: 'center' }}>
                <Text style={{ fontSize: 22}}>Change Password</Text>
              </View>
            </View>
        </View>
      <StatusBar style='light' />
      </ScrollView>
      </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundSecondary,
    paddingLeft: 10,
    paddingRight: 15,
  },
  userInfo: {
    gap: 12
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20
  },
  UserName: {
    fontSize: 20,
    color: theme.colors.lightGray
  },
  profileImageContainer: {
    height: 130,
    display: 'flex',
    alignItems: 'center',
    padding: 0
  },
  username: {
    fontSize: 15,
    color: theme.colors.lightGray
  },
  usernameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  share: { 
    display: 'flex', 
    flexDirection: 'row', 
    gap: 2, 
    alignItems: 'center', 
    backgroundColor: theme.colors.orangeDark, 
    borderRadius: 20,
    padding: 5,
    height: 40,
    width: 90
  },
  searchBar: {
    borderWidth: 1,
    padding: 5,
    borderColor: theme.colors.border,
    borderRadius: 15,
    height: 50,
    paddingLeft: 49,
    fontSize: 22,
    color: theme.colors.lightGray
  },
  searchBarContainer: {
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    paddingTop: 13,
    paddingLeft: 16
  },
})