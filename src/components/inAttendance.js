import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity, Dimensions, AsyncStorage
} from 'react-native';


import DDown from '../components/dropdown';
import FIcon from 'react-native-vector-icons/Ionicons';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import { Fab, Header, Left, Body, Button, Icon, Title, Textarea, Form } from 'native-base'

import { connect } from "react-redux";
import { onLoginAction } from "../store/actions/authAction"
import Picker from 'react-native-roll-picker'
// import DropdownMenu from 'react-native-dropdown-menu';




class inAttendance extends Component {

    constructor(props) {
        super(props);
        this.state = {

            flag: false,
            role: "Select Job Status"

        }
        this.rowIndex0 = 0;
        this.rowIndex1 = 0;
        this.rowIndex2 = 0;


    }




    onValueChange(value) {
        console.log(value, "valueeeeee")
        this.setState({ role: value });
    }


    render() {
        var data = [["C", "Java", "JavaScript", "PHP"]];

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#fff'
            }}>
                <View style={{
                    height: 60,
                    backgroundColor: '#fff',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: "row",
                    borderBottomColor: '#F4F4F4',
                    borderBottomWidth: 1,
                }}>
                    <View style={{ flex: 1 }}>
                        <FIcon name='ios-arrow-back' size={25} color="#000" style={{
                            paddingLeft: '16%',
                        }} onPress={() => { Actions.pop() }} />
                    </View>
                    <View style={{ flex: 2.5, justifyContent: "flex-start" }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>
                            Jobsheet 02123W
                        </Text>
                    </View>
                </View>
                <View style={{
                    // flex: 1,
                    justifyContent: "flex-start", marginHorizontal: "10%", marginTop: 8,
                    alignItems: "center",
                    // backgroundColor: "red",
                    height: "20%"
                }}>
                    <TouchableOpacity style={{
                        height: 30, justifyContent: "center", alignItems: "center",
                        backgroundColor: "#ffba5c", width: "80%"
                    }}>
                        <Text style={{ fontSize: 14, color: "#fff", }}>
                            In Attendence
                            </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#5C6570", marginTop: 4, fontWeight: "600" }}>
                        Leeds Trinity
                            </Text>
                    <Text style={{ fontSize: 14, color: "#9DA9B9", marginTop: 4 }}>
                        Fitting Rooms , Changing Cubical Damaged
                            </Text>
                </View>




                <DDown
                    onChangeFunc={this.onValueChange.bind(this)}
                    selectedValue={this.state.role}

                />

                {
                    (this.state.role === "Select Job Status") ?
                        (
                            <View style={{ flex: 1, }}>
                                <Picker

                                    // fontSize={50}


                                    // style={{fontSize:15}}
                                    data={[
                                        {
                                            optionName: 'Attendance Paused - No Temp Fix',
                                        },
                                        {
                                            optionName: 'Attendance Paused -Temp Fix',
                                        },
                                        {
                                            optionName: 'Completed'
                                        },
                                    ]}


                                    ref='_Picker'
                                    name='optionName'

                                    onRowChange={index => {
                                        this.rowIndex0 = index;
                                        this.rowIndex1 = 0;
                                        this.rowIndex2 = 0;

                                        // this.refs._Picker.setDataSource(data);
                                    }
                                    }
                                />

                            </View>) :
                        <View style={{ flex: 1, width: "80%", marginLeft: "10%" }}>
                            <Text style={{
                                fontWeight: "bold",
                                marginTop: 14,
                                color:"black"

                            }}>Notes</Text>
                            <Textarea
                                rowSpan={6}

                                value={this.state.notes
                                }
                                bordered placeholder="Will need to return but have made  a temporary fix" placeholderTextColor="grey" onChangeText={(text) => { this.setState({ notes: text }) }} />
                        </View>
                }




                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: "center" }} >
                    {/* <View style={{ flex : 1,   justifyContent: "flex-end", marginHorizontal: "10%" , 
                marginTop : 8 ,  alignItems : "center" }}> */}
                    <TouchableOpacity style={{
                        height: 55, justifyContent: "center", alignItems: "center",
                        backgroundColor: "#00a6ff", width: "70%", borderRadius: 7, marginBottom: 12
                    }}>


                        <Text style={{ fontSize: 16, color: "#fff", }}>
                            Save and Close Job
                            </Text>
                    </TouchableOpacity>
                    <View style={{
                        justifyContent: 'space-around', flexDirection: 'row',
                        height: 60, borderTopColor: "#E7E9EB", borderTopWidth: 1
                    }}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <FIcon name='md-stats' size={20} color="#cccccc" style={{}} />
                            <Text style={{ fontSize: 12 }}>
                                Status
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <FIcon name='md-stats' size={20} color="#cccccc" style={{}} />
                            <Text style={{ fontSize: 12 }}>
                                Labour
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <FIcon name='md-stats' size={20} color="#cccccc" style={{}} />
                            <Text style={{ fontSize: 12 }}>
                                Material
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <FIcon name='md-stats' size={20} color="#cccccc" style={{}} />
                            <Text style={{ fontSize: 12 }}>
                                Employement
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >

        );
    }




    //End Class
}
let mapDispatchToProps = (dispatch) => {
    return {
        // loginData: (credentials) => {
        //   dispatch(onLoginAction(credentials))
        // }
    }
}

export default inAttendance

const styles = StyleSheet.create({

});
