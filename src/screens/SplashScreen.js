import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { getToken } from '../localStorage'
import { NavigationActions } from 'react-navigation';

class SplashScreen extends Component {

    constructor(props){
        super(props);
    }

    navigate = (roueName) =>{
        this.props.navigation.dispatch(NavigationActions.navigate({ routeName:roueName }))
    }

    checkToken = () =>{
        const token = getToken().then(token => {

            console.log("Token : " + token)
            if(token !== null && token.trim().length > 0){
                this.navigate('Main');
            }else {
                this.navigate('Login');
            }

        }).catch(err => {
            console.log(err);
            this.navigate('Login')
        })

    }

    componentDidMount(){
        this.checkToken();
    }

    render () {
        return (
            <View style={styles.container}/>
        );
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
});