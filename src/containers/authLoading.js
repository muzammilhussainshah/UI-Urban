import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View, Image, Text,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
import ActionType from '../store/actions/actionTypes';
const axios = require('axios');


class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);

        this._retrieveData.bind(this);
    }

    componentDidMount() {
        this._retrieveData()
    }

    async _retrieveData() {
        try {
            const value = await AsyncStorage.getItem("ACCESS_TOKEN");
            if (value !== null) {
                // We have data!!
                let obj = JSON.parse(value)
                console.log(obj, "VaLue");
                axios.get('http://urbanapp.co.uk.gridhosted.co.uk/api/jobs?user_id=12&token=fd74a5c9e47c9aa2acf86f5bc44b1ef4ab0dba5d52d95aa92f61d655b387d6c3')
                    .then( (response)=> {
                        // handle success
                        console.log(response.data.jobsData);
                        this.props.jobs(response.data.jobsData)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                Actions.jobs();
            }
            else {
                Actions.login();

            }
        } catch (error) {
            console.log(error);
            // Error retrieving data
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View >
                    <View style={{ paddingTop: 80, marginBottom: 10 }}>
                        <Image style={styles.logo} resizeMode="contain" source={require('../assets/logo.png')} />
                    </View>

                </View>
                <ActivityIndicator size={100} color="#F09302" style={{ paddingBottom: 5 }} />
                <View><Text style={{ color: '#fff', fontSize: 18 }}>Loading . . .  </Text></View>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        jobs: (jobs) => {
            dispatch({ type: ActionType.JOBS, payload: jobs })
        }
    }
}
export default connect(null, mapDispatchToProps)(AuthLoadingScreen)

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 80,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
})
