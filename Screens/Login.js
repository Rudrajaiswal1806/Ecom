import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Form,
  Item,
  Input,
} from 'native-base';
import Styles from './Styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <Content style={Styles.mainContent}>
          <Text style={Styles.subTitle}>Welcome to</Text>
          <Text style={Styles.title}>MY APP</Text>
          <Text style={ Styles.title1}>LOGIN TO YOUR ACCOUNT</Text>
          <Form>
            <Item style={Styles.item}>
              <Input placeholder="Enter Email ID" />
            </Item>
            <Item style={Styles.item}>
              <Input placeholder="Enter Password" />
              <Icon style={Styles.iconEye} name="eye" type="Ionicons" />
            </Item>
            <Text style={[Styles.subTitle1, Styles.forgetPassword]}>
              Forgot Password?
            </Text>

            <Button style={Styles.bgOrange500} block onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={Styles.txt}>LOGIN</Text>
            </Button>
          </Form>
          <View style={Styles.horizontalLine}/>
          <Text style={[Styles.subTitle1, Styles.mt3]}>
            CONTINUE WITH SOCIAL ACCOUNTS
          </Text>
          <Button style={[Styles.socialButton, Styles.fbColor]}>
            <Text style={Styles.textStyle}>
              <Icon
                active
                name="facebook"
                type="Fontisto"
                style={Styles.icons}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue
              with Facebook
            </Text>
          </Button>
          <Button style={[Styles.socialButton, Styles.googleColor]}>
            <Text style={Styles.textStyle}>
              <Icon
                active
                name="googleplus"
                type="AntDesign"
                style={Styles.icons}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue with
              Google
            </Text>
          </Button>
          <Text style={Styles.txtFooter}>
            Dont have an account?{' '}
            <Text
              onPress={() => this.props.navigation.navigate('Register')}
              style={Styles.createAccount}>
              CREATE NOW
            </Text>
          </Text>
          
        </Content>
      </Container>
    );
  }
}
