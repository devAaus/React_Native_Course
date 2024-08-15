import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ChatList() {
   const contacts = [
      {
         "uid": 1,
         "name": "Jane Smith",
         "message": "Thank you for your help!",
         "image": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "time": "12:03"
      },
      {
         "uid": 2,
         "name": "Alice Johnson",
         "message": "How are you?",
         "image": "https://images.unsplash.com/photo-1463227438464-68cf21a01f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
         "time": "11:30"
      },
      {
         "uid": 3,
         "name": "Bob Brown",
         "message": "I'm good.",
         "image": "https://images.unsplash.com/photo-1531314888229-c4b4682c3118?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "time": "04:09"
      },
      {
         "uid": 4,
         "name": "Emily Davis",
         "message": "Have a nice day!",
         "image": "https://images.unsplash.com/photo-1488539621750-1e0a7ebf61b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
         "time": "01:01"
      },
      {
         "uid": 5,
         "name": "Michael Green",
         "message": "What's up?",
         "image": "https://images.unsplash.com/photo-1500264345546-767369bbd93c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
         "time": "Yesterday"
      },
      {
         "uid": 6,
         "name": "Sarah Lee",
         "message": "Meeting postponed",
         "image": "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
         "time": "Yesterday"
      },
      {
         "uid": 7,
         "name": "David Chen",
         "message": "I'll call you soon.",
         "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
         "time": "Yesterday"
      },
      {
         "uid": 8,
         "name": "Jessica Park",
         "message": "Have a nice day!",
         "image": "https://images.unsplash.com/photo-1611200945005-403b70229452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
         "time": "Yesterday"
      },
      {
         "uid": 9,
         "name": "Jane Kim",
         "message": "See you tomorrow.",
         "image": "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
         "time": "2 days ago"
      },
      {
         "uid": 10,
         "name": "Michael Smith",
         "message": "Let's catch up later.",
         "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
         "time": "2 days ago"
      },
      {
         "uid": 11,
         "name": "James Brown",
         "message": "Meeting at 3 PM?",
         "image": "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
         "time": "2 days ago"
      },
      {
         "uid": 12,
         "name": "Emily Davis",
         "message": "Can you send the files?",
         "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
         "time": "3 days ago"
      },
   ]
   return (
      <ScrollView
         style={styles.container}
         scrollEnabled={false}
      >
         {contacts.map((c) => (
            <View key={c.uid} style={styles.chatCard}>
               <Image
                  source={{ uri: c.image }}
                  style={styles.userImage}
               />
               <View style={styles.userInfo}>
                  <Text style={styles.userName}>{c.name}</Text>
                  <Text style={styles.userStatus}>{c.message}</Text>
               </View>
               <Text style={styles.userTime}>{c.time}</Text>
            </View>
         ))}
      </ScrollView>
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
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 20
   },
   chatCard: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 30
   },
   userImage: {
      width: 55,
      height: 55,
      borderRadius: 50,
   },
   userInfo: {
      paddingLeft: 10
   },
   userName: {
      fontWeight: "bold",
      fontSize: 18
   },
   userStatus: {
      color: "gray",
   },
   userTime: {
      color: "gray",
      position: "absolute",
      right: 10
   }
})