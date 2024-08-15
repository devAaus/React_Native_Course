import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
   return (
      <View>
         <Text style={styles.headingText}>Elevated Cards</Text>
         <ScrollView horizontal style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
               <Text style={styles.text}>Hello!</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
               <Text style={styles.text}>How</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
               <Text style={styles.text}>You</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
               <Text style={styles.text}>Doing!</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
               <Text style={styles.text}>😁</Text>
            </View>
         </ScrollView>
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
      padding: 10
   },
   card: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,
      borderRadius: 10,
      margin: 10
   },
   cardElevated: {
      backgroundColor: "white",
      elevation: 10,
      shadowOffset: {
         width: 1,
         height: 1
      },
      shadowColor: "orange",
      shadowOpacity: 3,
      shadowRadius: 30
   },
   text: {
      color: "black",
      fontSize: 20
   }
})