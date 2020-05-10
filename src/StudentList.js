import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {CardSection} from './Components';
import {studentListData} from './actions';

class StudentList extends Component {

    componentDidMount() {
        this.props.studentListData();
    }

    renderRow({item}) {
        return (
            <TouchableWithoutFeedback onPress={() => Actions.studentUpdate({student: item})}>
                <View>
                    <CardSection>
                        <Text>
                            {item.firstname} {item.lastname}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
     
    
    render() {
        return(
            <FlatList 
                data={this.props.studentsArray}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

const mapStateToProps = ({studentDataResponse}) => {
    const studentsArray = _.map(studentDataResponse, (val, uid) => {
        return {...val, uid };
    });
    return {studentsArray};
};

export default connect(mapStateToProps, { studentListData })(StudentList);