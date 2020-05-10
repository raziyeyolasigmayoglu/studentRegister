import React, {Component} from 'react';
import {Text, TextInput, Picker} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Spinner} from './Components';
import {studentChange, studentUpdate, studentDelete} from './actions';

class StudentUpdate extends Component {
    state = {firstname: '', lastname: '', studentid: '', branch: ''}

    componentDidMount(){
        const {firstname, lastname, studentid, branch} = this.props.student;
        this.setState({firstname, lastname, studentid, branch});
    }

    clickUpdate() {
        const {firstname, lastname, studentid, branch} = this.state;
        this.props.studentUpdate({firstname, lastname, studentid, branch, uid: this.props.student.uid});
    }

    clickDelete() {
        this.props.studentDelete({ uid: this.props.student.uid});
    }

    renderButton() {
        if(!this.props.loadingUpdate) {
            return    <Button onPress={this.clickUpdate.bind(this)}> Güncelle </Button>;
        }
        return <Spinner size="small" />;
    }
    renderDeleteButton() {
        if(!this.props.loadingDelete) {
            return    <Button onPress={this.clickDelete.bind(this)}> Sil </Button>;
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
                    value={this.state.firstname}
                    onChangeText={firstname => this.setState({firstname})}
                    />
            </CardSection>
            <CardSection>
                   <TextInput 
                      placeholder="SoyIsim" 
                      style={inputStyle} 
                      value={this.state.lastname}
                      onChangeText={lastname => this.setState({lastname})}
                      />
            </CardSection>
            <CardSection>
                      <TextInput 
                         placeholder="Ögrenci Numarasi" 
                         style={inputStyle} 
                         value={this.state.studentid}
                         onChangeText={studentid => this.setState({studentid})}
                         />
            </CardSection>
            <CardSection>
                <Text>Sube</Text>
                        <Picker 
                            style={{flex:1}}
                            selectedValue={this.state.branch}
                            onValueChange={branch => this.setState({branch})}
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
            <CardSection>
               {this.renderDeleteButton()}
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

const mapToStateProps = ({studentUpdateResponse}) => {
    const {loadingUpdate, loadingDelete} = studentUpdateResponse;

    return {loadingUpdate, loadingDelete};
};


export default connect(mapToStateProps, {studentChange, studentUpdate, studentDelete})(StudentUpdate);