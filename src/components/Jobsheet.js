import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity, Dimensions, AsyncStorage
} from 'react-native';
import FIcon from 'react-native-vector-icons/Ionicons';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import { Fab, Header, Left, Body, Button, Icon, Title } from 'native-base'

import { connect } from "react-redux";
import { onLoginAction } from "../store/actions/authAction"


class Jobsheet extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
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
                <View style={{ flex : 1,   justifyContent: "flex-start", marginHorizontal: "10%" , marginTop : 8 , 
                alignItems : "center" }}>
                    <TouchableOpacity style={{
                        height: 30, justifyContent: "center", alignItems: "center",
                        backgroundColor: "#00A6FF" ,width : "80%" 
                    }}>
                        <Text style={{ fontSize: 14, color: "#fff" ,  }}>
                            Pending Attendence
                            </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, color: "#5C6570" , marginTop : 4 , fontWeight : "600" }}>
                        Leeds Trinity
                            </Text>
                    <Text style={{ fontSize: 14, color: "#9DA9B9" , marginTop : 4 }}>
                        Fitting Rooms , Changing Cubical Damaged
                            </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end'  ,alignItems : "center" }} >
                {/* <View style={{ flex : 1,   justifyContent: "flex-end", marginHorizontal: "10%" , 
                marginTop : 8 ,  alignItems : "center" }}> */}
                    <TouchableOpacity style={{
                        height: 55, justifyContent: "center", alignItems: "center",
                        backgroundColor: "#77D353" ,width : "70%" , borderRadius : 7 , marginBottom : 12 
                    }}>
                        <Text style={{ fontSize: 16, color: "#fff" ,  }}>
                            Clock In
                            </Text>
                    </TouchableOpacity>
                    {/* </View> */}
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', 
                     height: 60, borderTopColor: "#E7E9EB", borderTopWidth: 1 }}>
                        <TouchableOpacity style={{flex : 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <FIcon name='md-stats' size={20} color="#cccccc" style={{}} />
                            <Text style={{ fontSize: 12 }}>
                                Status
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex : 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <FIcon name='md-stats' size={20} color="#cccccc" style={{}} />
                            <Text style={{ fontSize: 12 }}>
                                Labour
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex : 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <FIcon name='md-stats' size={20} color="#cccccc" style={{}} />
                            <Text style={{ fontSize: 12 }}>
                                Material
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex : 1, flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <FIcon name='md-stats' size={20} color="#cccccc" style={{}} />
                            <Text style={{ fontSize: 12 }}>
                                Employement
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

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

export default Jobsheet

const styles = StyleSheet.create({

});
