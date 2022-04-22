import { observer } from 'mobx-react-lite';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { simpleStore } from '../store/simple';

const SimpleInputOutput = observer(() => {
  const {data, setData} = simpleStore;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>{data}</Text>
      <TextInput 
        onChangeText={setData}
        style={{
          width: 100,
          height: 50,
          backgroundColor: 'salmon'
        }}
      />
    </View>
  );
});

export default SimpleInputOutput;