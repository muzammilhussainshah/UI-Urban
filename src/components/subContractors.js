import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity, Dimensions
} from 'react-native';
import { Fab, Header, Left, Body, Button, Icon, Title, Right } from 'native-base'
import FontAwesome, { Icons } from 'react-native-fontawesome'; import { connect } from 'react-redux';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

class SubContractors extends Component {


    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    render() {
        console.log(this.props.subContractors)
        let arrData = this.props.subContractors
        return (
            <View >
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', paddingVertical: 8 }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' style={{ color: '#fff' }} />
                        </Button>
                    </Left>
                    <View style={{}}>
                        <Title style={{ color: '#686a6d' }}>Subcontractors</Title>

                    </View>
                    <Right style={{ marginRight: 10 }}>
                        <FontAwesome style={{ color: '#000', fontSize: 35 }}>{Icons.plusCircle}</FontAwesome>
                    </Right>
                </View>
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: 'center', paddingBottom: "0%" }}>

                        {
                            arrData.map((val, i) => {
                                console.log(val, "valllllllllllllllllllllllllllllllllllllllll");
                                return (
                                    <TouchableOpacity key={i} style={styles.box} onPress={() => {
                                        // Actions.eventDetails({ val })
                                    }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 16, color: '#686a6d' }}>
                                                    {val.name}
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ paddingRight: 10 }}>
                                                    <Text style={{ fontSize: 16, color: '#686a6d' }}>
                                                        {val.company}
                                                    </Text>
                                                </View>
                                                <View>
                                                    {/* <Text style={{ fontSize: 20, color: '#000' }}> */}
                                                    <FontAwesome style={{ color: '#686a6d', fontSize: 25 }}>{Icons.angleRight}</FontAwesome>
                                                    {/* > */}
                                                    {/* </Text> */}
                                                </View>

                                            </View>
                                            {/* <Text style={{ fontSize: 18, color: '#000' }}>
                                                   >
                                                </Text> */}



                                        </View>


                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    subContractors: state.authReducer.subContractors
});

const mapDispatchToProps = (dispatch) => {
    return {


    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubContractors);

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 50,
        borderTopWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: '3%'

    },
});

