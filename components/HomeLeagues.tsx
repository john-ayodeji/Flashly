import { StyleSheet, Text, View, Image } from 'react-native'
import theme from '../theme'
import type { ImageSourcePropType } from 'react-native'

type Props = {
    title: string,
    season: string,
    image: ImageSourcePropType
}

const HomeLeagues = ({ title, season, image }: Props) => {
  return (
    <View style={styles.leagueContainers}>
        <Image source={ image } style={styles.leagueIcons} resizeMode='cover'/>
        <View style={styles.leagueTitlesContainer}>
            <Text style={styles.leagueTitles}>{ title }</Text>
            {/* <Text style={styles.leagueTitles}>{ season }</Text> */}
        </View>
    </View>
  )
}

export default HomeLeagues

const styles = StyleSheet.create({

  leagueContainers: {
    width: 'auto',
    height: 'auto',
    padding: 9,
    borderWidth: 0,
    borderColor: theme.colors.border,
    borderRadius: 50,
    alignItems: 'center',
    gap: 5
  },
  leagueTitles: {
    fontSize: 15,
    color: theme.colors.lightGray
  },
  leagueTitlesContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  leagueIcons: {
    width: 70,
    height: 70,
    borderRadius: 50
  },
})