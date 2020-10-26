import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

  const initialState={
    count:1
  }

  const reducer = (state=initialState, action) =>{
    switch (action.type)
      {
        case 'INCREASE_COUNT':
          return{count:state.count +1}
        case 'DECREASE_COUNT':
            return{count:state.count -1}
      }
    return state
  }

  const store = createStore(reducer)

 class Redux extends Component  {
 
   render(){
      return (
          <Provider store={store}>
            <Button/>
          </Provider> 
    );
  }
}
export default Redux;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
