
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
export default class ProductDetails extends Component {
  
  constructor(props) {
    super(props);
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
              <Title style={{fontSize:20,fontWeight:'bold'}}>Details</Title>
            </Body>
            <Right>          
              <Button transparent onPress={() => this.props.navigation.navigate('Cart')}>
                <Icon name='cart' />
              </Button>
            </Right>     
          </Header>
      <Content style={[Styles.mainContent]}>
        <View style={[Styles.height35,{paddingVertical:10}]}>
          <Image source={{uri:"https://www.uokpl.rs/fpng/d/538-5385034_mall-clipart-couple.png"}}  style={{width:'100%',height:'100%'}}/>
        </View>
        <Text style={{fontSize:15,fontWeight:'bold'}}>Product Name</Text>
        <Text style={{fontSize:18,fontWeight:'bold'}}>Rs 1149</Text>
        <Text style={{fontSize:12,fontWeight:'bold',color:'grey'}}>Free Delivery</Text>
        <View style={{flexDirection:'row',marginTop:5}}>
          <Text style={{backgroundColor:'green',color:'#fff',width:'14%',textAlign:'center'}}>4.3 <Icon style={{color:'#fff',fontSize:12}} name='star' type='MaterialCommunityIcons'/></Text>
          <Text style={{paddingLeft:5,fontSize:14,fontWeight:'bold',color:'grey'}}>50 Rating & 15 Reviews</Text>
        </View>
        <View style={{flexDirection:'row',height:40,marginVertical:5}}>
          <View style={{width:'33%',alignItems:'center',justifyContent:'center',flexDirection:'row',borderColor:'lightgrey',borderBottomWidth:1,borderTopWidth:1,borderRightWidth:1}}>
            <Icon style={{fontSize:18,color:'grey'}} name='share' type='Entypo'/>
            <Text style={{fontWeight:'bold',paddingLeft:10,color:'grey'}}>Share</Text>
          </View>
          <View style={{width:'33%',alignItems:'center',justifyContent:'center',flexDirection:'row',borderColor:'lightgrey',borderBottomWidth:1,borderTopWidth:1,borderRightWidth:1}}>
            <Icon style={{fontSize:18,color:'grey'}} name='save' type='Feather' />
            <Text style={{fontWeight:'bold',paddingLeft:10,color:'grey'}}>Similar</Text>
          </View>
          <View style={{width:'33%',alignItems:'center',justifyContent:'center',flexDirection:'row', borderColor:'lightgrey',borderBottomWidth:1,borderTopWidth:1}}>
            <Icon style={{fontSize:18,color:'grey'}} name='heart' type='Feather' />
            <Text style={{fontWeight:'bold',paddingLeft:10,color:'grey'}}>Wishlist</Text>
          </View>
        </View>
        <Text style={{marginVertical:'1%',fontWeight:'bold',fontSize:18}}>Product Details</Text>
    <Text style={{fontSize:15,fontWeight:'bold',color:'grey' }}>{'\u2022'} Regular fit</Text>
        <Text style={{fontSize:15,fontWeight:'bold',color:'grey'}}>{'\u2022'} Fabric: Cotton</Text>
        <Text style={{fontSize:15,fontWeight:'bold',color:'grey'}}>{'\u2022'} Pattern: Printed</Text>
        <Text style={{fontSize:15,fontWeight:'bold',color:'grey'}}>{'\u2022'} Color: Red</Text>
      </Content>
      <Footer>
          <FooterTab>
          <Button style={{backgroundColor:'#fff'}}>
              <Text style={{fontWeight:'bold'}}>ADD TO CART</Text>
            </Button> 
            <Button active style={{backgroundColor:"#ff5722"}}>
              <Text style={{color:'#fff',fontWeight:'bold'}}>BUY NOW</Text>
            </Button>
            
          </FooterTab>
        </Footer>
        </Container>      
    );
  }
}


