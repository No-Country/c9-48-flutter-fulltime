import { View, StyleSheet } from "react-native"

const Separator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: 1,
  },
});
export default Separator;