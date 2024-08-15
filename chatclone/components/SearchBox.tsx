import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SearchBox() {
   return (
      <View style={styles.container}>
         <Text>Search your chat</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 50,
      borderRadius: 10,
      backgroundColor: '#202D37',
      justifyContent: 'center',
      paddingHorizontal: 20,
      marginTop: 30,
      marginHorizontal: 20
   },
})