import { View, Text } from 'react-native'
import React from 'react'


const Greeting = ({name})=>{

    //const {name} = props;
    return(
        <view style={{alignItems:'center'}}>
            <text style={{color:'blue',fontSize:20}}>Hello : {name}</text>
        </view>
    );
}

const LotsOfGreeting = () => {
  return (
    <View style={{flex:1,alignItems:'center',top:50}}>
      <Greeting name = 'Merry Christmas'/>
      <Greeting name = 'Happy New Year'/>
      <Greeting name = 'Songkran Festival'/>

    </View>
  )
}

export default LotsOfGreeting