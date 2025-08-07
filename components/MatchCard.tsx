import { StyleSheet, Text, View, Image } from 'react-native'
import theme from '../theme'
import type { ImageSourcePropType } from 'react-native';

type cardDetails = {
    time: string,
    venue: string,
    stage: string,
    home: string,
    away: string,
    resultInfo: string,
    date: string,
    homeIcon: ImageSourcePropType,
    awayIcon: ImageSourcePropType,
    leagueIcon: ImageSourcePropType
}

function MatchCard({ time, venue, stage, home, away, resultInfo, date, homeIcon, awayIcon, leagueIcon }:cardDetails) {
  return (
    <View style={styles.container}>
        <View style={styles.cardSem}>
            <View>
                <Image source={ leagueIcon } style={styles.leagueIcons}/>
            </View>
            <View style={styles.timeVenue}>
                <Text style={styles.otherTexts}>{ date } •</Text>
                <Text style={styles.otherTexts}>{ time } •</Text>
                <Text style={styles.otherTexts}>{ stage }</Text>
            </View>
            <View style={styles.nameContainer}>
                <View style={{ paddingBottom: 25}}>
                    <Text style={styles.nameText}>{ home }</Text>
                </View>
                <View>
                    <Image source={ homeIcon } style={styles.teamIcons}/>
                    <Text style={[styles.nameText, { textAlign: 'center'} ]}>4</Text>
                </View>
                <View style={{ paddingBottom: 25}}>
                    <Text style={styles.nameText}>vs</Text>
                </View>
                <View>
                    <Image source={ awayIcon } style={styles.teamIcons}/>
                    <Text style={[styles.nameText, { textAlign: 'center'} ]}>0</Text>
                </View>
                <View style={{ paddingBottom: 25}}>
                    <Text style={styles.nameText}>{ away }</Text>
                </View>
            </View>
            <View>
                <Text style={[styles.nameText, { fontSize: 16 }]}>{ resultInfo }</Text>
            </View>
            <View>
                <Text style={[styles.nameText, { color: theme.colors.lightGray, fontSize: 16 }]}>{ venue }</Text>
            </View>
        </View>
    </View>
  )
}

export default MatchCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.cardBackground,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: theme.colors.border,
        padding: 20,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 'auto',
        height: 230,
        justifyContent: 'center',
        gap: 10
    },
    nameText: {
        color: theme.colors.orangeDark,
        fontSize: 20,
    },
    otherTexts: {
        color: theme.colors.lightGray,
        fontSize: 15,
        fontWeight: 'bold'
    },
    timeVenue: {
        flexDirection: 'row',
        gap: 5,
        textAlign: 'center',
        paddingBottom: 3
    },
    nameContainer: {
        paddingBottom: 6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    teamIcons: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    leagueIcons: {
        width: 25,
        height: 25,
        borderRadius: 50
    },
    cardSem: {
        gap: 6,
        alignItems: 'center'
    }
})