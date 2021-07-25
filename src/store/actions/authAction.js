import { ActionType } from './../actions';
const axios = require('axios');
import { AsyncStorage } from "react-native"
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';

export function onLoginAction(credentials) {

    return dispatch => {
        console.log(credentials, "ATIONghjg")
        let data = {
            "email": "cms@wdymail.co.uk",
            "password": "testing"
        }
        console.log(data, "dta")
        axios.post('http://urbanapp.co.uk.gridhosted.co.uk/api/login', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response.data.userData, "ahsdjkhasjkdhjkhsadjk");

                let obj = response.data.userData
                console.log(obj, "USER OBJ")
                console.log(JSON.stringify(obj))
                // dispatch({type:ActionType.USER_INFO,payload:obj})
                AsyncStorage.setItem("ACCESS_TOKEN", JSON.stringify(obj))
                axios.get('http://urbanapp.co.uk.gridhosted.co.uk/api/jobs?user_id=12&token=fd74a5c9e47c9aa2acf86f5bc44b1ef4ab0dba5d52d95aa92f61d655b387d6c3')
                    .then(function (response) {
                        // handle success
                        console.log(response.data.jobsData);
                        dispatch({type:ActionType.JOBS,payload:response.data.jobsData})
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                Actions.jobs();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}