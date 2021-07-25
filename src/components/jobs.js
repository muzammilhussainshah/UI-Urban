import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity, Dimensions, AsyncStorage
} from 'react-native';
import { Fab, Header, Left, Body, Button, Icon, Title } from 'native-base'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { connect } from 'react-redux';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

class Jobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobState: [],
            status: [
                { value: 'Pending Attendance', color: "#FFBA5B" },
                { value: 'Attendance paused - temp fix', color: "#FFBA5B" },
                { value: 'Attendance paused - no temp fix', color: "#FFBA5B" },
                { value: 'In Attendance', color: "#03D274" },
                { value: 'Completed - Awaiting Signature ', color: "#FFBA5B" },
                { value: 'Completed - Signature Received ', color: "#13CE67" },
                { value: 'Completed - Invoiced', color: "#13CE67" },
                { value: 'Closed - Payment Received', color: "#03D274" },
            ]
        }

    }

    fetchJobs() {

        console.log(this.props.obj, "fetchjobuserInfo")
        // this.setState({userInfoState:this.props.userInfo})


    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.jobs, "JOBS")
        this.setState({
            jobState: nextProps.jobs
        })

    }

    logOut = () => {
        this.setState({ jobState: [] })
        AsyncStorage.removeItem("ACCESS_TOKEN")
        Actions.login()
    }

    render() {
        // console.log(this.state.userInfoState,"RenderUserInfo")
        console.log(this.state.jobState, "jobState")
        let jobsArray = this.state.jobState
        let arrData = this.props.data
        return (
            <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
                <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#696c72', flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Left>
                        <Button transparent>
                            <Icon name='arrow-back' style={{ color: '#fff' }} />
                        </Button>
                    </Left> */}
                    <Body style={{}}>
                        <Title style={{ color: '#686a6d', paddingTop: 6 }}>Jobs for John Smith</Title>
                        <TouchableOpacity onPress={() => this.logOut()}><Title style={{ color: '#1EA0FF', fontSize: 15, paddingBottom: 8, padding: 3 }}>Log Out</Title></TouchableOpacity>

                    </Body>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>

                        {
                            jobsArray.map((val, i) => {
                                // console.log(val, "valllllllllllllllllllllllllllllllllllllllll");
                                return (
                                    <TouchableOpacity key={i} style={styles.box} onPress={() => {
                                        if (val.status === '3') {
                                            { console.log(val) }
                                            Actions.inAttendance()

                                        }
                                        else {
                                            Actions.Jobsheet()

                                        }
                                    }}>
                                        <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#696c72' }}>
                                            <View style={styles.Row1}>
                                                <View style={{ flex: 1.2, }}>
                                                    <Text style={{ fontSize: 18, color: '#5e6063', fontWeight: '400' }}>
                                                        {val.job_no}
                                                    </Text>
                                                </View>
                                                <View style={{ flex: 2.5 }}>
                                                    <View
                                                        style={{ backgroundColor: this.state.status[val.status].color, height: 28, alignItems: "center", justifyContent: "center" }}
                                                    >
                                                        <Text style={{ fontSize: 14, color: '#fff', textAlign: "center" }}>
                                                            {this.state.status[val.status].value}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={styles.Row1}>
                                                <View style={{ width: '30%' }}>
                                                    <Text style={styles.Row2}>
                                                        {val.client}
                                                    </Text>
                                                </View>
                                                <View style={{ marginRight: 13 }}>
                                                    <Text style={styles.Row3}>
                                                        Agreed SLA Date: {val.agreed_sla_date}
                                                    </Text>
                                                </View>
                                            </View>

                                            <View style={{ paddingHorizontal: '5%', paddingVertical: 10 }}>
                                                <Text style={styles.Row4}>
                                                    {val.description}
                                                </Text>
                                            </View>
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
    data: state.authReducer.data,
    jobs: state.authReducer.jobs
});

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Jobs);

const styles = StyleSheet.create({
    box: {
        width: '100%',
    },
    Row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingTop: 12,
        paddingBottom: 0,
        alignItems: 'center',
        // height : 40

    },
    Row2: { fontSize: 14, color: '#606770' },
    Row3: { fontSize: 12, color: '#606770' },
    Row4: { fontSize: 14.5, color: '#606770' },

    status: {
        backgroundColor: '#03D274',
        width: 240,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    status1: {
        backgroundColor: '#1EA0FF',
        width: 240,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

