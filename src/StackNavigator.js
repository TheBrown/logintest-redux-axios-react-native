import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

const StackNavigator = createStackNavigator({
    Splash: SplashScreen,
    Login: LoginScreen,
    Main: MainScreen
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
});

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  );

const AppWithNavigationState = reduxifyNavigator(StackNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
  });

  const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {  StackNavigator, AppNavigator, middleware }