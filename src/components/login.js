import React, { Component } from 'react';
import { Button, Text, Icon } from 'native-base';
import {
  StyleSheet, ScrollView, View, KeyboardAvoidingView,
  ActivityIndicator, Image, TextInput
} from 'react-native';
import { connect } from "react-redux";
import { onLoginAction } from "../store/actions/authAction"


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loader: false

    }
  }

  onLoginFunc() {
    let credentials = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(this.props, "func")
    this.props.loginData(credentials)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff'
      }}>
        <ScrollView>
          <View style={styles.container}>


            <View style={{ alignItems: 'center' }}>
              <View style={{ paddingTop: 80, marginBottom: 10 }}>
                <Image style={styles.logo} resizeMode="contain" source={require('../assets/logo_CMYK.png')} />
              </View>
              <View style={{ paddingVertical: 25 }}>
                <Text style={{ fontSize: 30, color: '#6b6b6b' }}>
                  Sign in
          </Text>
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TextInput placeholder='Email' keyboardAppearance='default' autoCapitalize='none' returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput placeholder='Password' secureTextEntry returnKeyType='go' keyboardAppearance='default' style={styles.textbox}
                onChangeText={password => this.setState({ password })}
              />
              <Button block style={styles.button} onPress={this.onLoginFunc.bind(this)}><Text style={{ fontSize: 15 }}>Sign in</Text></Button>

              <View >
                <Text style={{ fontSize: 15, color: '#6b6b6b' }}>
                  Forgot Password ?
          </Text>
              </View>
            </View>
            {/* <View  style={{ flex:1}}> */}
            {/* </View> */}
            {this.state.loader ?
              <ActivityIndicator size="large" color="#0000ff" /> : null}

          </View>
        </ScrollView>
      </View>

    );
  }




  //End Class
}
let mapDispatchToProps = (dispatch) => {
  return {
    loginData: (credentials) => {
      dispatch(onLoginAction(credentials))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  container: {

    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    fontSize: 18,
    textAlign: 'left',
    width: 320,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: '#c0c3c3',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    color: "#000000",
  },
  logo: {
    width: 150,
    height: 80,

  },

  button: {
    backgroundColor: '#4A525E',
    width: 320,
    height: 50,
    marginBottom: 10
  }
});
