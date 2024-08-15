import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Stories() {

   const users = [
      {
         "uid": 1,
         "name": "Jane Smith",
         "image": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
         "uid": 2,
         "name": "Alice Johnson",
         "image": "https://images.unsplash.com/photo-1463227438464-68cf21a01f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
         "uid": 3,
         "name": "Bob Brown",
         "image": "https://images.unsplash.com/photo-1531314888229-c4b4682c3118?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
         "uid": 4,
         "name": "Emily Davis",
         "image": "https://images.unsplash.com/photo-1488539621750-1e0a7ebf61b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
         "uid": 5,
         "name": "Michael Green",
         "image": "https://images.unsplash.com/photo-1500264345546-767369bbd93c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
         "uid": 6,
         "name": "Sarah Lee",
         "image": "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
         "uid": 7,
         "name": "David Kim",
         "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
         "uid": 8,
         "name": "Olivia Chen",
         "image": "https://images.unsplash.com/photo-1542452376175-82b6fb643412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      }
   ]

   return (
      <View style={styles.container}>
         <Text style={styles.title}>
            RECENT UPDATES
         </Text>
         <ScrollView horizontal style={styles.storiesContainer}>
            {users.map((user) => (
               <View key={user.uid} style={styles.story}>
                  <Image
                     source={{ uri: user.image }}
                     style={styles.userImage}
                  />
               </View>
            ))}
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      borderBottomWidth: 1,
      borderColor: '#15232A',
      paddingVertical: 10,
      marginLeft: 20
   },
   title: {
      fontSize: 16,
      fontWeight: 'bold',
      padding: 10
   },
   storiesContainer: {
      flex: 1,
      flexDirection: 'row',
      marginVertical: 10,
      marginBottom: 20
   },
   story: {
      marginHorizontal: 8
   },
   userImage: {
      width: 70,
      height: 70,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: 'skyblue'
   }
})