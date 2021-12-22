import * as React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import {testText} from '@dependent/const';
import {push} from '@dependent/navigation'


interface IProps {
}

const Comp = (props: IProps):JSX.Element => {
  return(
    <View>
      <Text>
        This is {testText} !!!!!!
      </Text>
      <TouchableOpacity onPress={() =>{
        push('/second/22')
      }}>
        <Text>Go Second</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Comp;
