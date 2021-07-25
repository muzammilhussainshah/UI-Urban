import React, { Component } from 'react';
import { Container, Button, Text, Content, Form, Items, Item, Input, Label, Alert, Thumbnail, View, Picker, Spinner } from 'native-base';
import { ScrollView, Image } from 'react-native';
// import * as firebase from 'firebase'
// import strInReqLan from "../store/config/config";
// import ErrorMessage from '../component/errorMessage';
// import LogoImage from '../component/logoImage';
// import { signupAction } from '../store/action/action';
// import { errorRemove } from '../store/action/action';
// import { connect } from 'react-redux';
// import Loading from '../component/loader';




import {
    StyleSheet,
} from 'react-native';

export default class DDown extends Component {
    constructor() {
        super()
        this.state = {
            role: "",

        }
    }






    // onValueChange(value) {
    //     console.log(value)
    //     this.setState({ role: value });
    // }


    render() {
        return (



            <View style={styl.input} >
                <Picker mode="dropdown"
                    selectedValue={this.state.role}
                    style={{
                        // marginLeft: "10%",
                        width: 270
                    }}
                    onValueChange={this.props.onChangeFunc.bind()}
                    selectedValue={this.props.selectedValue}
                >

                    {/* onValueChange={this.onValueChange.bind(this)} > */}
                    <Items style={{ fontSize: 12 }} label="Select Job Status" value="Select Job Status" />
                    <Items style={{ fontSize: 12 }} label="Attendance Paused -Temp Fix" value="Attendance Paused -Temp Fix" />
                </Picker>
            </View>



        );
    }
}

const styl = StyleSheet.create({
    input: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        width: "80%",
        marginLeft: "10%"

    },
})