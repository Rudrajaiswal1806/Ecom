import React, { Component } from "react";
import {Image, View,Text , FlatList,StyleSheet,StatusBar, TouchableOpacity} from "react-native";
import {
  Content,
  Icon,
  Container,
  Left,
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
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state={
     Logout: false,
     category: [
      {
          "name": "All Categories",
          "image": "https://lh3.googleusercontent.com/nAfv6qTytB52IxMu8isGV7rC8SaMY_srhZng5W9TiyQt-zPdm0SE_1Dv8dp6JXKB3g",
      },
      {
          "name": "Offer Zone",
          "image": "https://www.pngkey.com/png/full/259-2599491_special-offer-offer.png",
      },
      {
          "name": "Mobiles",
          "image": "https://techguruguy.com/wp-content/uploads/2018/07/Apple-iPhone-X.png",
      },
      {
          "name": "Sports",
          "image": "https://www.nsoft.com/wp-content/uploads/2017/01/09-VTO.png",
      },
      {
          "name": "Fashion",
          "image": "https://www.uokpl.rs/fpng/d/538-5385034_mall-clipart-couple.png",
      },
      {
          "name": "Electronics",
          "image": "https://img.favpng.com/16/21/6/home-appliance-toy-collectable-antique-industry-png-favpng-pYMWZhgTwi4EQFAhAcK2N7vuM.jpg",
      },
      {
          "name": "Home",
          "image": "https://banner2.cleanpng.com/20180329/ghw/kisspng-laptop-home-appliance-consumer-electronics-lg-elec-home-appliances-5abc9660180504.3899710215223087040984.jpg",
      },
      {
          "name": "Beauty",
          "image": "https://techguruguy.com/wp-content/uploads/2018/07/Apple-iPhone-X.png",
      },
      {
          "name": "Appliances",
          "image": "https://techguruguy.com/wp-content/uploads/2018/07/Apple-iPhone-X.png",
      },
      {
          "name": "Toys & Baby",
          "image": "https://banner2.cleanpng.com/20180702/qiq/kisspng-educational-toys-child-care-toddler-kids-slide-5b3a3d3e182f29.1101789715305434220991.jpg",
      },
      {
          "name": "Flights",
          "image": "https://pm.uokpl.rs/fpng/s/437-4376599_airplane-air-asia.png",
      },
      {
          "name": "Food & More",
          "image": "https://techguruguy.com/wp-content/uploads/2018/07/Apple-iPhone-X.png",
      },
      
      {
          "name": "Gift Cards",
          "image": "https://techguruguy.com/wp-content/uploads/2018/07/Apple-iPhone-X.png",
      },
      
  ],
  categoryProduct:[
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
          <Button transparent onPress={() =>this.props.navigation.openDrawer()}>
            <Icon style={{fontSize:30}} name='menu' type='Ionicons'/>
          </Button>
        </Left>
        <Body>
          <Title style={{fontSize:20,fontWeight:'bold'}}>Ecom App</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('Wishlist')}>
            <Icon name='heart' type='Feather' />
          </Button>
          <Button transparent onPress={() => this.props.navigation.navigate('Cart')}>
            <Icon name='cart' />
          </Button>
        </Right>     
      </Header>
      <View style={[ Styles.bgOrange500, {height:56}]}>
        <Item style={{backgroundColor:'#fff',width:'95%',alignSelf:'center',height:35, marginTop:15 }}>
          <Icon style={{paddingLeft:10,color:'grey',fontSize:18}} name="search" />
          <Input style={{fontSize:14}} placeholder="Search for Products, Brands and More "placeholderTextColor={'grey'} />
        </Item>
      </View>
      <View style={Styles.flatlistview}>
      <FlatList
                  data={this.state.category}
                  renderItem={({item}) =>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}>
                    <View style={{padding:5,alignItems:'center' }}>
                        
                        <Image source={{uri: item.image}}  style={{width:60,height:60}}/>
                      
                      
                          <Text>{item.name} </Text>
                    </View>
                    </TouchableOpacity>}
                  horizontal = { true }
                  showsHorizontalScrollIndicator = { false }
                 
                  />
        </View>
        <ScrollView showsVerticalScrollIndicator = { false }>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetails')}>
        <View style={{backgroundColor:'lightgrey'}}>
        <FlatList
                data={this.state.categoryProduct}
                renderItem={({item}) =>            
                
                    <View style={Styles.flatlist2view}>
                       <View style={{height:'70%',width:'100%'}}>
                        <Image source={{uri: item.image}}  style={{width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                        </View>
                <View style={{height:'30%',width:'100%'}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:5}}>
                      <View>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>Product name</Text>
                        <Text style={{fontSize:10,color:'grey'}}>Product Discription</Text>
                        <Text style={{color:'green'}}>Rs 1149</Text>
                      </View>
                      <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Icon style={{color:'red',fontSize:20}} name='heart' type='Feather' /> 
                      </View>
                    </View>
                </View>
                    </View>
              
            }
                numColumns= {2}
                
            /> 
        </View>
        </TouchableOpacity>
        </ScrollView>
          </Container>
            
    );
  }
}



  