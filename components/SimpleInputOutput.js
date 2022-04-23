import { observer } from 'mobx-react-lite';
import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import { arrayStore } from '../store/array';
import { simpleStore } from '../store/simple';

const SimpleInputOutput = observer(() => {
  const {data, setData} = simpleStore;
  const {arr, pushArr, getCount, getArr, deleteArr} = arrayStore;
  const nama = 'andik';
  const umur = 21;

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
      <View>
      <Button 
        title='get'
        onPress={() => {
          console.log(getArr);
        }}
      />
      <Button 
        title='push'
        onPress={() => {
          pushArr({nama, umur});
        }}
      />
      <Button 
        title='count'
        onPress={() => {
          console.log(getCount);
        }}
      />
      <Button 
        title='delete'
        onPress={() => {
          console.log(deleteArr(0.456059051091557));
        }}
      />
      </View>
    </View>
  );
});

export default SimpleInputOutput;