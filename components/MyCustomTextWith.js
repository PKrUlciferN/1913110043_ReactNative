import { View, Text } from 'react-native'
import React from 'react'

const Fname = (props) =>{
    return(
        <View style={{flex : 1,fontSize:15,justifyContent:"center",alignItems:'center'}}>
            <text>
                Your First Name is {props.fname} and Last Name is {props.lname}
            </text>
        </View>
    );
}

const MyCustomTextWith = () => {
  return (
    <View style={{flex : 1,fontSize:15,justifyContent:"center",alignItems:'center'}}>
      <Fname fname = 'Pornpawit' lname = 'Tangjittipairoj'/>
      <Fname fname = 'Chayut' lname = 'Sujitvattanasuk'/>
    </View>
  )
}

export default MyCustomTextWith