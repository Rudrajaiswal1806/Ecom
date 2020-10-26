
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
export default class Cart extends Component {
  
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
            <Title style={{fontSize:20,fontWeight:'bold'}}>Cart</Title>
          </Body>
          <Right/>    
        </Header>
        <Content style={[Styles.mainContent]}>
          <FlatList
              data={this.state.cart}
              renderItem={({item}) =>
                <View>
                  <View style={{flexDirection:'row',height:110,marginTop:5,paddingVertical:5}}>
                    <View style={{width:'25%'}}>
                      <Image source={{uri: item.image}}  style={{width:'100%',height:'100%'}}/>
                    </View>
                    <View style={{width:'75%',paddingLeft:10}}>
                      <Text style={{fontSize:15,fontWeight:'bold'}}>Product name</Text>
                      <Text style={{fontSize:10,color:'grey'}}>Product Discription</Text>
                      <Text style={{color:'green'}}>Rs 1149</Text>
                      <Text style={{fontSize:12,color:'grey'}}>Delivery Chrge Free</Text>
                      <Text style={{marginTop:5,fontSize:12,color:'grey'}} ><Text>Qty: 1</Text>    Size: 39</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row',height:40,marginBottom:5}}>
                    <View style={{width:'50%',alignItems:'center',justifyContent:'center',flexDirection:'row',borderColor:'lightgrey',borderBottomWidth:1,borderTopWidth:1,borderRightWidth:1}}>
                      <Icon style={{fontSize:20,color:'grey'}} name='cross' type='Entypo'/>
                      <Text style={{fontWeight:'bold',color:'grey'}}>Remove</Text>
                    </View>
                    <View style={{width:'50%',alignItems:'center',justifyContent:'center',flexDirection:'row', borderColor:'lightgrey',borderBottomWidth:1,borderTopWidth:1}}>
                      <Icon style={{fontSize:20,color:'grey'}} name='edit' type= 'MaterialIcons' />
                      <Text style={{fontWeight:'bold',paddingLeft:10,color:'grey'}}>Edit</Text>
                    </View>
                  </View>
                </View>
              }
              horizontal = { false }
              initialNumToRender= {11}
              showsHorizontalScrollIndicator = { false }
          />
                  
        </Content>
        <Footer>
          <FooterTab>
            
            <Button style={{backgroundColor:'#fff'}} onPress={() => this.props.navigation.navigate('Wishlist')}>
              <Text style={{fontWeight:'bold'}}>TOTAL AMOUNT</Text>
            </Button> 
            <Button active style={{backgroundColor:"#ff5722"}}>
              <Text style={{color:'#fff',fontWeight:'bold'}}>PAYMENT</Text>
            </Button>              
          </FooterTab>
        </Footer>
      </Container>      
    );
  }
}


