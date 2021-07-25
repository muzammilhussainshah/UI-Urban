import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { store } from './store/store';
import Login from "./components/login";
import Jobsheet from "./components/Jobsheet";
import Jobs from "./components/jobs";
import SubContractors from "./components/subContractors";
import inAttendance from "./components/inAttendance";
import AuthLoading from "./containers/authLoading";


const iconProfile = () => (
    <FontAwesome style={{ color: '#000', fontSize: 30 }}>{Icons.user}</FontAwesome>
)
const iconEvents = () => (
    <FontAwesome style={{ color: '#000', fontSize: 30 }}>{Icons.listUl}</FontAwesome>
)

export default class Routes extends Component {
    onBackPress = () => {
        Actions.pop();
        return true;
    };




    render() {

        return (
            <Provider store={store}>
                <Router backAndroidHandler={this.onBackPress} navigationBarStyle={{ backgroundColor: '#0a2c52' }}>
                    <Scene key="root">
                    <Scene
                            initial
                            key="Jobsheet"
                            component={Jobsheet}
                            
                            // title="Jobsheet"
                            // titleStyle={{ color: 'white' }}
                            hideNavBar={true}
                            />
                        <Scene
                            key="splash"
                            component={AuthLoading}
                            initial
                            title="authLoading"
                            // titleStyle={{ color: 'white' }}
                            hideNavBar={true}
                        />
                        <Scene
                            key="login"
                            component={Login}
                            title="Login"
                            // titleStyle={{ color: 'white' }}
                            hideNavBar={true}
                        />


                        <Scene
                            key="inAttendance"
                            component={inAttendance}
                            title="Login"
                            // titleStyle={{ color: 'white' }}
                            hideNavBar={true}
                        />

                        <Scene
                            tabs={true}
                            hideNavBar={true}
                            // tabBarStyle={{ backgroundColor: '#0a2c52', zIndex: -1000, position: 'relative' }}
                            titleStyle={{
                                color: '#ffffff'
                            }}
                        >
                            <Scene
                                icon={iconEvents}
                                key="jobs"
                                hideNavBar={true}
                                component={Jobs}
                                title="Jobs"
                            >


                            </Scene>

                            <Scene
                                hideNavBar={true}
                                icon={iconProfile}
                                key="subContractors"
                                component={SubContractors}
                                title="SubContractors"
                            />

                        </Scene>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
