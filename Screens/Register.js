import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View} from 'react-native';
import { 
  Container, 
  Content,
  Button, 
  Icon, 
  Text, 
  Form, 
  Item, 
  Input} from 'native-base';
import Styles from './Styles';



export default class Register extends Component {
  render() {
    return (
      <Container> 
        <Content style={Styles.mainContent}>
          <Text style={Styles.subTitle}>Welcome to</Text>
          <Text style={Styles.title}>MY APP</Text>
          <Text style={ Styles.title1}>CREATE ACCOUNT</Text>
          <Form>
            <Item style={Styles.item}>
              <Input placeholder="10 Digit mobile number" />
            </Item>
            <Item style={Styles.item}>
              <Input placeholder="Enter Your Full Name" />
            </Item>
            <Item style={Styles.item}>
              <Input placeholder="Enter Email ID" />
            </Item>
            <Item style={Styles.item}>
              <Input placeholder="Enter Password" />
              <Icon style={Styles.iconEye  } name='eye' type='Ionicons' />
            </Item>
          </Form>          
        </Content>
        <View style={Styles.alignBottom}>
          <Button block disabled>
            <Text style={Styles.txt}>CREATE ACCOUNT</Text>
          </Button>
          <Text style={Styles.subTitle1}>By creating account, you accept terms and conditions</Text>
        </View>
      </Container>       
    );
  }
}