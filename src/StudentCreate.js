import React, {Component} from 'react';
import {View, Text, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Spinner} from './Components';
import {studentChange, studentCreate} from './actions';

class StudentCreate extends Component {

    clickSave() {
        const {firstname, lastname, studentid, branch} = this.props;
        this.props.studentCreate({firstname, lastname, studentid, branch});
    }
    renderButton() {
        if(!this.props.loading) {
            return    <Button onPress={this.clickSave.bind(this)}> Kaydet </Button>;
        }
        return <Spinner size="small" />;
    }

    render() {
        const {inputStyle} = styles;
        return (
            <Card>
            <CardSection>
                 <TextInput 
                    placeholder="Isim" 
                    style={inputStyle} 
                    value={this.props.firstname}
                    onChangeText={firstname => this.props.studentChange({props:'firstname', value:firstname})}
                    />
            </CardSection>
            <CardSection>
                   <TextInput 
                      placeholder="SoyIsim" 
                      style={inputStyle} 
                      value={this.props.lastname}
                      onChangeText={lastname => this.props.studentChange({props:'lastname', value:lastname})}
                      />
            </CardSection>
            <CardSection>
                      <TextInput 
                         placeholder="Ögrenci Numarasi" 
                         style={inputStyle} 
                         value={this.props.studentid}
                         onChangeText={studentid => this.props.studentChange({props: 'studentid', value:studentid})}
                         />
            </CardSection>
            <CardSection>
                <Text>Sube</Text>
                        <Picker 
                            style={{flex:1}}
                            selectedValue={this.props.branch}
                            onValueChange={branch => this.props.studentChange({props:'branch', value:branch})}
                            >
                                <Picker.Item label="A Subesi" value="asube" />
                                <Picker.Item label="B Subesi" value="bsube" />
                                <Picker.Item label="C Subesi" value="csube" />
                                <Picker.Item label="D Subesi" value="dsube" />
                            </Picker>
            </CardSection>
            <CardSection>
               {this.renderButton()}
            </CardSection>
            </Card>
        );
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
};

const mapToStateProps = ({studentListResponse}) => {
    const {firstname, lastname, studentid, branch, loading} = studentListResponse;

    return {firstname, lastname, studentid, branch, loading};
};


export default connect(mapToStateProps, {studentChange, studentCreate})(StudentCreate);