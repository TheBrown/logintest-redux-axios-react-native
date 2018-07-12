import React, { Component } from 'react';
import { 
  Text, 
  StyleSheet, 
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView

} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { authenticate } from '../actions/route/login';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      passwd: ""
    }
    this._handleLogin = this._handleLogin.bind(this);
  }

 _handleLogin(e){
  const { uname, passwd } = this.state;
  this.props.authenticate(uname, passwd);
 }

 _handleUnameChange = (uname) => {
   this.setState({ uname: uname })
 }

 _handlePasswd = (passwd) => {
   this.setState({ passwd: passwd })
 }

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.logoContainer}>
              <View style={styles.logoContainer}>
                {/* <Image style={styles.logo} 
                source={require('../assets/laoitdev_logo.png')}
                /> */}
                <Text style={styles.title}>
                  Welcome to Login Test
                </Text>
              </View>
              <View style={styles.infoContainer}>

                <Text style={styles.errorText}>
                  {
                    this.props.login.signInError ? JSON.stringify(this.props.login.errMessage): ""
                  }
                </Text>

                <TextInput style={styles.input} 
                  placeholder="Enter Username/Email"
                  placeholderTextColor='rgba(255, 255, 255, 0.8)'
                  keyboardType='email-address'
                  returnKeyType='next'
                  autoCorrect={false}
                  value={this.state.uname}
                  onChangeText={ this._handleUnameChange }
                
                />

                <TextInput style={styles.input} 
                  placeholder="Enter password"
                  placeholderTextColor='rgba(255, 255, 255, 0.8)'
                  keyboardType='email-address'
                  returnKeyType='go'
                  secureTextEntry
                  value = { this.state.passwd }
                  autoCorrect={false}
                  onChangeText={ this._handlePasswd }
                  ref={"txtPassword"}
                />

                <TouchableOpacity style={styles.buttonContainer} 
                  onPress={this._handleLogin}>
                  <Text style={styles.buttonText}>{

                    this.props.login.isAuthenticating ? "Login...":"Login"

                    }</Text>
                    
                </TouchableOpacity>

              </View>
            </View>
          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>

      </SafeAreaView>   
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ authenticate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(32, 53, 70)',
    flex: 1,
    flexDirection: 'column',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    width: 128,
    height: 60
  },
  title: {
    color: '#f7c744',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    opacity: 0.9
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
    // backgroundColor: 'red'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32, 53, 70)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorText: {
    color: '#ff0000',
    fontSize: 18,
    textAlign: 'center',
    marginTop: -20,
    opacity: 0.9
  }

});