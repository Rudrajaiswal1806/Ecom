
import React, { Component } from "react";
import {Image, View,Text , FlatList,StyleSheet,StatusBar, TouchableOpacity} from "react-native";
import {
  Content,
  Icon,
  Container,
  Left,
  Footer,
  FooterTab,
  SearchBar,
  Right,
  Subtitle,
  Title,
  Item,
  Input,
  Button,
  Header,
  Body
} from "native-base";
import Styles from './Styles';
import { ScrollView } from "react-native-gesture-handler";
export default class Wishlist extends Component {
  
  constructor(props) {
    super(props);
    this.state={
          cart:[
                  {
                      "image": "https://www.uokpl.rs/fpng/d/538-5385034_mall-clipart-couple.png",
                  },
                  {
                      "image": "https://banner2.cleanpng.com/20180329/ghw/kisspng-laptop-home-appliance-consumer-electronics-lg-elec-home-appliances-5abc9660180504.3899710215223087040984.jpg",
                  },
                  {
                      "image": "https://techguruguy.com/wp-content/uploads/2018/07/Apple-iPhone-X.png",
                  },
                  {
                      "image": "https://www.nsoft.com/wp-content/uploads/2017/01/09-VTO.png",
                  },
                  {
                      "image": "https://www.uokpl.rs/fpng/d/538-5385034_mall-clipart-couple.png",
                  },
                  {
                      "image": "https://banner2.cleanpng.com/20180329/ghw/kisspng-laptop-home-appliance-consumer-electronics-lg-elec-home-appliances-5abc9660180504.3899710215223087040984.jpg",
                  },   
                ]  
        }
      }

  render() {
    return (
        <Container>
          <Header style={{marginTop:20,backgroundColor:"#ff5722"}} >
              <StatusBar backgroundColor={'#ff5722'} barStyle={'light-content'}/>
              <Left>
                <Button transparent>
                  <Icon style={{fontSize:30}} name='keyboard-backspace' type='MaterialCommunityIcons' 
                        onPress={() =>this.props.navigation.goBack()}/>
                </Button>
              </Left>
              <Body>
                <Title style={{fontSize:20,fontWeight:'bold'}}>Wishlist</Title>
              </Body>
              <Right/>    
          </Header>
          <FlatList
              data={this.state.cart}
              renderItem={({item}) =>
              <View style={{flexDirection:'row',height:120,marginTop:5,borderBottomWidth:1,borderBottomColor:'lightgrey',padding:10}}>
                  <View style={{width:'25%'}}>
                    <Image source={{uri: item.image}}  style={{width:'100%',height:'100%'}}/>
                  </View>
                  <View style={{width:'75%'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                      <View>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>Product name</Text>
                        <Text style={{fontSize:10,color:'grey'}}>Product Discription</Text>
                        <Text style={{color:'green'}}>Rs 1149</Text>
                      </View>
                      <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Icon name='delete' type='MaterialIcons' /> 
                      </View>
                    </View>
                  </View>
              </View>}
              horizontal = { false }
              initialNumToRender= {11}
              showsHorizontalScrollIndicator = { false }
          />
        </Container>      
    );
  }
}


