import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import { ScrollView, TextInput } from 'react-native';
import MatchCard from '../components/MatchCard';
import Header from '../components/Header';
import SubHeaders from '../components/SubHeaders';
import HomeLeagues from '../components/HomeLeagues';
import Feather from '@expo/vector-icons/Feather';
import Transfers from '../components/Transfers';
import Highlights from '../components/Highlights';
import { useState } from 'react';
import OnBoard from '../components/Auth/OnBoard';

const user: boolean = false

export default function App() {
  const [Stories, setStories] = useState([
  {
    id: Number(1),
    coverImage: require('../assets/chelsea.jpeg'),
    viewed: false
  },
  {
    id: Number(2),
    coverImage: require('../assets/MLS.png'),
    viewed: false
  },
  {
    id: Number(3),
    coverImage: require('../assets/laliga.png'),
    viewed: false
  },
  {
    id: Number(4),
    coverImage: require('../assets/psg.jpeg'),
    viewed: false
  },
  {
    id: Number(5),
    coverImage: require('../assets/epl.png'),
    viewed: false
  },
  {
    id: Number(6),
    coverImage: require('../assets/serieA.png'),
    viewed: false
  }
])

const handleView = (id: number) => {
  const updatedStories = Stories.map( story => {
    if (story.id === id) {
      return {
        ...story, viewed: true
      }
    } else {
      return story
    }
  })
  setStories(updatedStories)
}


  return (
    
    <View style={styles.container}>
      { user ? 
      <>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={ styles.searchBarContainer }>
        <Feather name="search" size={24} color={ theme.colors.border } style={ styles.searchIcon } />
        <TextInput returnKeyType='done' placeholder='Search for fixtures' placeholderTextColor={theme.colors.border} style={styles.searchBar} />
      </View>
      <View style={{ height: 120 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} >
          <View style={styles.leagueIconsContainer}>
            <HomeLeagues image={require('../assets/epl.png')} title='EPL' season='2025' />
            <HomeLeagues image={require('../assets/laliga.png')} title='LALIGA' season='2025' />
            <HomeLeagues image={require('../assets/MLS.png')} title='MLS' season='2025' />
            <HomeLeagues image={require('../assets/serieA.png')} title='Serie A' season='2025' />
          </View>
        </ScrollView>
      </View>

      <SubHeaders title='Past Fixtures'/>
      <View style={{ height: 'auto' }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styles.cardsListContainer]}>
        <MatchCard  home='CHE' away='PSG' time='18:30' venue='Stramford Bridge' stage='final' resultInfo='Chealsea won by full time' date='2025-5-11' homeIcon={require('../assets/chelsea.jpeg')} awayIcon={require('../assets/psg.jpeg')} leagueIcon={require('../assets/epl.png')} />
        <MatchCard  home='CHE' away='PSG' time='18:30' venue='Stramford Bridge' stage='final' resultInfo='Chealsea won by full time' date='2025-5-11' homeIcon={require('../assets/chelsea.jpeg')} awayIcon={require('../assets/psg.jpeg')} leagueIcon={require('../assets/epl.png')} />
      </View>
      </ScrollView>
      </View>

      <SubHeaders title='Highlights Stories'/>
      <View style={styles.story}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {
            [...Stories]
              .sort((a: any, b: any) => a.viewed - b.viewed)
              .map(story => (
                <Highlights key={story.id} coverImage={story.coverImage} viewed={story.viewed} onView={() => handleView(story.id)}/>
              ))
          }
      </ScrollView>
        </View>


      <SubHeaders title='Transfers'/>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={{display: 'flex', flexDirection: 'row', gap: 7}}>
          <Transfers fName='Diogo' lName='Jota' position='Forward' age={28} playerImage={require('../assets/diogojota.jpeg')} fromClub={require('../assets/liverpool.png')} toClub={require('../assets/heaven.jpg')} fromClubName='LiverPool' value='$0' type='Free Transfer' />
        </View>
      </ScrollView>
      <StatusBar style='light' />
      </ScrollView>
    </>
   : <OnBoard /> }
    </View> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundSecondary,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  cardsListContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    gap: 4,
  },
  leagueIconsContainer: {
    paddingLeft: 5, 
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
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
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    paddingTop: 22,
    paddingLeft: 16
  },
  story: {
    display: 'flex',
    flexDirection: 'row',
  }
});
