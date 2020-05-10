import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CardSection} from './CardSection';

class ListItem extends Component {
    render() {
        const {firstname, lastname, branch, studentid} = this.props.student;
        return (
            <View>
                <CardSection>
                    <Text>
                        {firstname} {lastname} {branch} {studentid}
                    </Text>
                </CardSection>
            </View>
        );
    }
}
export default ListItem;