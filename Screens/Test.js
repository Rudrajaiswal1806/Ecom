import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {Icon} from 'native-base'


class App extends Component {
  state = {
    count: 0
  }

  onPressAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  onPressMinus = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <Icon
         onPress={this.onPressAdd}
        
         name ='home'
        />
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPressMinus}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;
