import React from 'react';

var {View, StyleSheet, Alert} = require('react-native');

import {Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import {actions as auth, theme} from "../../../auth/index"

const {signOut} = auth;

const {color} = theme;

class Home extends React.Component {
    constructor() {
        super();
        this.state = {}

    }

    onSignOut = () => {
        this.props.signOut()
            .then(() => Actions.reset("Auth"))
            .catch((error) => {
                Alert.alert('Oops!', error.message);
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    raised
                    borderRadius={4}
                    title={'LOG OUT'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.onSignOut}/>
            </View>
        );
    }
}

export default connect(null, {signOut})(Home);