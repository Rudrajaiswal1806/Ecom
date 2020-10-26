import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {connect} from 'react-redux'

 class Button extends Component  {


   render(){ 
       if(this.props.count==0){
        return(
            <View style={styles.container}>
                <View style={{width:50,backgroundColor:'lightgrey',borderWidth:1}}>
                <TouchableOpacity onPress={()=>this.props.plus()}>
              <Text style={{fontSize:20,textAlign:'center'}}>ADD</Text>
            </TouchableOpacity>
                </View>
            </View>
       )}
    else{
  return (
        <View style={styles.container}>
          <View style={{flexDirection:'row',width:90, alignItems:'center',backgroundColor:'lightgrey', justifyContent:'space-around',borderWidth:1}}>
            <TouchableOpacity onPress={()=>this.props.plus()}>
              <Text style={{fontSize:20,width:30,textAlign:'center'}}>+</Text>
            </TouchableOpacity>
              <Text style={{fontSize:20,width:30,textAlign:'center'}}>{this.props.count}</Text>
            <TouchableOpacity onPress={()=>this.props.minus()}>
              <Text style={{fontSize:30,width:30,textAlign:'center'}}>-</Text>
            </TouchableOpacity>
         </View>  
        </View>
    );
  }
  }
}

function mapStateToProps(state){
    return{
        count:state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        plus : () => dispatch({type:'INCREASE_COUNT'}),
        minus : () => dispatch({type:'DECREASE_COUNT'}),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Button)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
