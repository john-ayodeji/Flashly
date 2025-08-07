import { StyleSheet, Text, View, Image } from 'react-native'
import theme from '../theme'
import AntDesign from '@expo/vector-icons/AntDesign';
import type { ImageSourcePropType } from 'react-native';

type Props = {
    playerImage: ImageSourcePropType,
    fromClub: ImageSourcePropType,
    toClub: ImageSourcePropType,
    fromClubName: string,
    value: string,
    type: string,
    fName: string,
    lName: string,
    position: string,
    age: number
}

const Transfers = ({playerImage, fromClub, toClub, fromClubName, value, type, fName, lName, position, age }: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.playerInfo}>
            <View>
                <Image source={playerImage} style={styles.playerIcon} />
            </View>
            <View>
                <Text style={styles.playerNames}>{fName}</Text>
                <Text style={styles.playerNames}>{lName}</Text>
                <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>{position}</Text>
                    <Text style={styles.subText}>Age: {age}</Text>
                </View>
            </View>
        </View>
        <View style={styles.transferInfoContainer}>
            <View style={styles.transferInfo}>
                <Image source={fromClub} style={styles.clubIcons} />
                <Text style={{ color: theme.colors.lightGray, fontSize: 20 }}>{fromClubName}</Text>
                <AntDesign name="arrowright" size={29} color={theme.colors.orangeDark} />
                <View>
                    <Image source={toClub} style={styles.clubIcons}/>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Text style={{ fontSize: 20, color: theme.colors.orangeDark, fontWeight: 'bold' }}> {value} </Text>
                <Text style={{ fontSize: 20, color: theme.colors.orangeDark }}> {type} </Text>
            </View>
        </View>
    </View>
  )
}

export default Transfers

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.cardBackground,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: theme.colors.border,
        padding: 10,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 290,
        height: 230,
        justifyContent: 'flex-start',
        gap: 10,
    },
    playerIcon: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    playerInfo: {
        display:'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    playerNames: {
        fontSize: 22,
        color: theme.colors.lightGray,
        fontWeight: 'bold'
    },
    subTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    subText: {
        color: theme.colors.lightGray,
        fontSize: 17
    },
    clubIcons: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    transferInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    transferInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
    }
})