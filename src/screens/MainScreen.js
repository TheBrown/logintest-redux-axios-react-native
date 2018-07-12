import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import { signout } from '../actions/route/signout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class MainScreen extends Component {

  constructor(props) {
    super(props);

    this._handleLogout = this._handleLogout.bind(this);
  }


  _handleLogout() {
    this.props.signout();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
          </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
          </Text>

        <Button
          title="Log out"
          onPress={this._handleLogout}

        />

      </View>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    logout: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ signout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
