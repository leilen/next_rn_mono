import * as React from 'react';
import { View, Text } from 'react-native';
import {getQueryParams} from '@dependent/navigation';

interface IProps {
}

const Comp = (props: IProps):JSX.Element => {
  return(
    <View>
      <Text>
        This is second page
      </Text>
      <Text>
        idx: {getQueryParams()['idx']}
      </Text>
    </View>
  )
}

export default Comp;
