import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
   const contacts = [
      {
         "uid": 1,
         "name": "Jane Smith",
         "status": "Designing User Interfaces",
         "image": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
         "uid": 2,
         "name": "Alice Johnson",
         "status": "Developing APIs",
         "image": "https://images.unsplash.com/photo-1463227438464-68cf21a01f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
         "uid": 3,
         "name": "Bob Brown",
         "status": "Writing Documentation",
         "image": "https://images.unsplash.com/photo-1531314888229-c4b4682c3118?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
         "uid": 4,
         "name": "Emily Davis",
         "status": "Testing and Debugging",
         "image": "https://images.unsplash.com/photo-1488539621750-1e0a7ebf61b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
         "uid": 5,
         "name": "Michael Green",
         "status": "Optimizing Performance",
         "image": "https://images.unsplash.com/photo-1500264345546-767369bbd93c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      }
   ]
   return (
      <View>
         <Text style={styles.headingText}>ContactList</Text>
         <ScrollView
            style={styles.container}
            scrollEnabled={false}
         >
            {contacts.map((c) => (
               <View key={c.uid} style={styles.contactCard}>
                  <Image
                     source={{ uri: c.image }}
                     style={styles.userImage}
                  />
                  <View style={styles.userInfo}>
                     <Text style={styles.userName}>{c.name}</Text>
                     <Text style={styles.userStatus}>{c.status}</Text>
                  </View>
               </View>
            ))}
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
   container: {},
   contactCard: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      margin: 10,
      borderRadius: 10,
      backgroundColor: "#f5f5f5",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2
   },
   userImage: {
      width: 50,
      height: 50,
      borderRadius: 25
   },
   userInfo: {
      paddingLeft: 10
   },
   userName: {
      color: "black",
      fontWeight: "bold",
      fontSize: 18
   },
   userStatus: {
      color: "gray",
   }
})