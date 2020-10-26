const React = require("react-native");
const { StyleSheet, Platform, Dimensions } = React;

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

//Login page



  mainContent: {
    flex:1,
    paddingLeft: wp('4%'),
    paddingRight: wp('5%'),
       
  },

  subTitle: {
    fontSize: wp('5%'),
    marginTop: hp('5%'),
    fontWeight: "bold",
    color: "#9FA3AC"
  },

  title: {
    fontSize: wp('8.5%'),
    fontWeight: "bold",
    color: "#1C1A2E"
  },

  title1:{
    fontWeight:'700',
    fontSize:wp('3.5%'),
    marginTop: hp('7%'),
  },

  item: {
    marginTop: hp('2%'),
    marginLeft: 0
  },

   iconEye:{
    color:'grey'
  },

  subTitle1: {
    fontSize: wp('3.5%'),
    fontWeight: '700',
    color: "#1C1A2E",
    alignSelf:'center',
    lineHeight:hp('6%'),
  },

  bgOrange500:{
    backgroundColor:"#ff5722"
  },

  forgetPassword:{
  	color:'#F86E46',
  	fontWeight:'700',
  	lineHeight:hp('8%'),
  	alignSelf: 'flex-end',
  },

  txt:{
    fontSize:wp('5%'),
    fontWeight:'700'
  },

   horizontalLine: {
    marginTop:20,
    borderBottomColor: '#4D4C5C',
    borderBottomWidth:2,
  },

  subTitle1: {
    fontSize: wp('3.5%'),
    fontWeight: '700',
    color: "#1C1A2E",
    alignSelf:'center',
    lineHeight:hp('6%'),
  },
  
  mt3: {
    marginTop: hp('3%'),
  },

  fbColor:{
    backgroundColor:"#5671EA",
  },

  textStyle:{
    textTransform:'capitalize',
    fontWeight:'bold'
  },

  icons:{
    fontSize: 18,
    color: '#fff',
  },

   socialButton:{
  	marginTop:hp('2%'),
  	width:wp('75%'),
  	textTransform: 'capitalize',
  	height:hp('6%'),
  	paddingLeft:wp('2%'),
  	borderRadius:wp('2%'),
  	alignSelf:'center',
  },

  googleColor:{
    backgroundColor:"#DC373B",
  },

  createAccount:{
  	textDecorationLine: 'underline',
  	fontWeight: 'bold',

  },

  txtFooter:{
  	marginTop:hp('10%'),
  	alignSelf:'center'
  },

  //Register

 alignBottom: {
    marginLeft:wp('4%'),
    marginRight:wp('4%'),
    marginBottom:hp('1%')    
  },

  //Home
  flatlistview:{
    height:hp('15%'),
    weight: wp('100%'),
  },

  flatlist2view:{
    borderRadius: 10,
    backgroundColor:'#fff',
    marginTop:10,
    marginHorizontal:wp('2%'),
    flexWrap: "nowrap",
    justifyContent:"space-between",
    height: hp('30%'),
    width:wp('46%'),
    
  },

  //wishlist
  wishlistView:{
    height:hp('30%'),
    flexDirection:'row',
    width:wp('100%')
  },

  height35:{
    height:hp('35%'),
  }

   

}
  

  

  

 

 

  