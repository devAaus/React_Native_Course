import {
   StyleSheet,
   Text,
   View,
   Linking,
   Image,
   TouchableOpacity
} from 'react-native'
import React from 'react'

export default function ActionCard() {
   function openWebsite(url: string) {
      Linking.openURL(url)
   }
   return (
      <View>
         <Text style={styles.headingText}>Blog Card</Text>
         <View style={styles.card}>
            <View style={styles.cardHeader}>
               <Text style={styles.title}>
                  What is React Native?
               </Text>
            </View>
            <Image
               source={{
                  uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*74NwxNdMYcbJ6RPL.png'
               }}
               style={styles.cardImage}
            />
            <View style={styles.cardBody}>
               <Text numberOfLines={3}>
                  React Native is a JavaScript framework that allows you to build native mobile apps using React. It’s a popular choice for developers because it offers a number of advantages over other mobile development frameworks.
               </Text>
            </View>
            <View style={styles.cardFooter}>
               <TouchableOpacity
                  onPress={() => openWebsite('https://medium.com/@allrounddiksha/what-is-react-native-1d564da4a3bd')}
               >
                  <Text style={styles.readMore}>Read More</Text>
               </TouchableOpacity>
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
      width: 300,
      height: 360,
      marginHorizontal: 'auto',
      marginVertical: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#005f73",
      elevation: 10,
      shadowOffset: {
         width: 1,
         height: 1
      },
      shadowColor: "orange",
      shadowOpacity: 1,
      shadowRadius: 30
   },
   cardHeader: {
      height: 40,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
   title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
   },
   cardImage: {
      height: 200,
      borderRadius: 10,
   },
   cardBody: {
      padding: 10,
   },
   cardFooter: {
      padding: 10,
   },
   readMore: {
      color: "orange",
      fontWeight: "bold",
   }
})