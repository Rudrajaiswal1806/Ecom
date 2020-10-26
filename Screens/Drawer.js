
import React, { Component } from "react";
import {Image, View,Text , TouchableOpacity} from "react-native";
import {Icon} from "native-base";
import Styles from './Styles';
export default class Drawer extends Component {
  
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <View style={{flex:1}}>
            <View style={{backgroundColor:"#ff5722",padding:10}}>
                <View style={{marginTop:30,}}>
                    <Image source={{uri:"https://www.uokpl.rs/fpng/d/538-5385034_mall-clipart-couple.png"}}  style={{width:50,height:50,borderRadius:30}}/>
                </View>
                <Text style={{color:'#ffff',marginTop:5,fontSize:18}}>Rudra jaiswal</Text>
                <Text style={{color:'#ffff',marginVertical:5}}>rudrajaiswal@gmail.com</Text>
            </View>
            <View style={{paddingHorizontal:10}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <Icon style={{color:'grey',fontSize:20}}name="home"  />
                  <Text style={{marginLeft:20,fontSize:18,color:'grey'}}> Home</Text>
                </View>
            </TouchableOpacity>   
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <Icon style={{color:'grey',fontSize:20}}name="list" type="FontAwesome" />
                  <Text style={{marginLeft:20,fontSize:18,color:'grey'}}>Category</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Wishlist')}>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <Icon style={{color:'grey',fontSize:20}}name="heart" type="FontAwesome" />
                  <Text style={{marginLeft:20,fontSize:18,color:'grey'}}>Wishlist</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <Icon style={{color:'grey',fontSize:20}}name="cart" />
                  <Text style={{marginLeft:20,fontSize:18,color:'grey'}}>Cart</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetails')}>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <Icon style={{color:'grey',fontSize:20}}name="basket" type="Ionicons"/>
                  <Text style={{marginLeft:20,fontSize:18,color:'grey'}}>My Orders</Text>
                </View>
            </TouchableOpacity>
            <View style={{borderWidth:1,marginTop:10,borderColor:'grey'}}></View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <Icon style={{color:'grey',fontSize:20}}name="call" type="Ionicons" />
                  <Text style={{marginLeft:20,fontSize:18,color:'grey'}}>Help & Support</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                  <Icon style={{color:'grey',fontSize:20}}name="power-off" type="FontAwesome" />
                  <Text style={{marginLeft:20,fontSize:18,color:'grey'}}>Logout</Text>
                </View>
            </TouchableOpacity>
            
            </View>
        </View>        
    );
  }
}


