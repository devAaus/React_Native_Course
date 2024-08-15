import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
   return (
      <View>
         <Text style={styles.headingText}>Flat Cards</Text>
         <View style={styles.container}>
            <View style={[styles.card, styles.card1]}>
               <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.card2]}>
               <Text>Blue</Text>
            </View>
            <View style={[styles.card, styles.card3]}>
               <Text>Yellow</Text>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   headingText: {
      fontSize: 30,
      fontWeight: "bold",
      padding: 10,
      textAlign: "center",
   },
   container: {
      flex: 1,
      flexDirection: "row",
   },
   card: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,
      margin: 10,
      borderRadius: 10
   },
   card1: {
      backgroundColor: "red",
   },
   card2: {
      backgroundColor: "blue",
   },
   card3: {
      backgroundColor: "yellow",
   }
})