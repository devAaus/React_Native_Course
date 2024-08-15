import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
   return (
      <View>
         <Text style={styles.headingText}>Trending Places</Text>
         <View style={[styles.card, styles.cardElevated]}>
            <Image
               source={{
                  uri: 'https://images.unsplash.com/photo-1512276926457-a2f9c7ec55b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyZW5kaW5nJTIwcGxhY2VzJTIwaW4lMjBuZXBhbHxlbnwwfHwwfHx8MA%3D%3D'
               }}
               style={styles.cardImage}
            />
            <View style={styles.cardBody}>
               <Text style={styles.cardTitle}>Buddha Stupa</Text>
               <Text style={styles.cardLabel}>Boudha,Kathmandu,Nepal</Text>
               <Text style={styles.cardDescription}>Bouddha, also known as Boudhanath, Khasti Chaitya and Khāsa Chaitya is a stupa in Kathmandu, Nepal. Located about 11 km from the center and northeastern outskirts of Kathmandu, its massive mandala makes it one of the largest spherical stupas in Nepal and the world.</Text>
               <Text style={styles.cardFooter}>1 hour away</Text>
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
   card: {
      height: 420,
      margin: 10,
      padding: 10,
      borderRadius: 10,
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
   cardImage: {
      height: 200,
      borderRadius: 10,
   },
   cardBody: {
      flex: 1,
      flexGrow: 1,
      padding: 10
   },
   cardTitle: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
   },
   cardLabel: {
      color: "black",
      fontSize: 14,
      fontWeight: "semibold",
      marginBottom: 10
   },
   cardDescription: {
      color: "gray",
      fontSize: 14,
      marginBottom: 10
   },
   cardFooter: {
      color: "black",
      fontSize: 14,
   },
})