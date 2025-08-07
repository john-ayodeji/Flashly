import { StyleSheet, Text, View } from 'react-native'
import theme from '../theme'

type Props = {
    title: string
}

const SubHeaders = ({ title }: Props) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.headerText}>{ title }</Text>
    </View>
  )
}

export default SubHeaders

const styles = StyleSheet.create({
  headerText: {
    color: theme.colors.textSecondary,
    fontSize: 22
  },
  HeaderContainer: {
    padding: 10,
  },
})



