import { StackNavigator } from '../StackNavigator'
import { NavigationActions } from 'react-navigation';
import { LOG_IN_SUCCESS, LOG_OUT } from '../actions/LoginAction';

const initState = StackNavigator.router.getStateForAction(StackNavigator.router.getActionForPathAndParams('Splash'))

const navReduc = (state = initState, action) => {

    let nextSatte = null;

    switch (action.type) {
        case LOG_IN_SUCCESS:
            nextSatte = StackNavigator.router.getStateForAction(NavigationActions.navigate({ 
                routeName: 'Main'
            }))
            break;
        case LOG_OUT:
            nextSatte = StackNavigator.router.getStateForAction(NavigationActions.navigate({ 
                routeName: 'Login'
            }))
            break;

        default:
            nextSatte = StackNavigator.router.getStateForAction(action, state);
    }

    return nextSatte || initState
}

export default navReduc;