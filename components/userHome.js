import React ,{useEffect,useState}from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native"
import database from '@react-native-firebase/database'


export default function Course(){

    let [data,setdata]=useState([])


    useEffect(()=>{
        database().ref('/courses').once('value')
    .then(snapshot => {
     console.log(snapshot.val());
     var value = Object.values(snapshot.val())
     console.log(value)
     setdata(value);
    // console.log(snapshot.val());

})
.catch(error => {
    console.error(error);
    });
    },[])
 return (
     <ScrollView>
<View style={styles.container}>
    <Text style={styles.text}>Available Courses</Text>
 {data.map((v,i)=>{
    return <View key={i} style={styles.record}>
    <Text style={styles.recordText}>Course Name: {v.Course}</Text>
    <Text style={styles.recordText}>Teacher's Name: {v.Teacher} </Text>
    <Text style={styles.recordText}>Course Duration: {v.Duration}</Text>
    <Text style={styles.recordText}>Course's Timing: {v.Timing}</Text>
</View>
 })}

</View>
</ScrollView>

);
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        height:1000
               
      },
      record:{
          color:"black",
          marginTop:20,
          backgroundColor:"#205375",
          marginLeft:20,
          marginRight:20,
          borderRadius:20

          
      },
      recordText:{
        color:"#EFEFEF",
        fontSize:20,
        padding:10

      },
      text: {
        marginTop:15,
        color:"black",
        fontSize:30,
        textAlign:"center",
        
      },

    
    
  });

 
      

 