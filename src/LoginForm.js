import React, {Component} from 'react';
import {TextInput, Alert, View} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from './actions';
import {Button, Card, CardSection, Spinner} from './Components';

class LoginForm extends Component{
    state = {email: '', password: '', loading: false};

    clickLogin() {
        const { email, password } = this.props;
        this.props.loginUser({email,password});
    }

    loginSucces() {
        console.log('basarili');
        this.setState({ loading: false });
    }

    loginFail() {
        console.log('Hata aldi');
        this.setState({ loading: false });
        Alert.alert(
            'Mesaj',
            'Kullanici adi veya sifreniz hatali!',
            [
                { text: 'Tamam', onPress: () => null }
            ]
        );
    }

    renderButton() {
        if(!this.props.loading) {
            return   <Button onPress={this.clickLogin.bind(this)}> GIRIS </Button>;
        }
        return <Spinner size="small" />;
    }

    render(){
        const { inputStyle } = styles;
        return(
            <View style={{flex:1, backgroundColor: 'white'}}>
            <Card>
                <CardSection>
                    <TextInput 
                    placeholder="E-mail" 
                    style={inputStyle} 
                    value={this.props.email}
                    onChangeText={email => this.props.emailChanged(email)}
                    />
                </CardSection>
                <CardSection>
                <TextInput 
                    secureTextEntry
                    placeholder="Password" 
                    style={inputStyle} 
                    value={this.props.password}
                    onChangeText={password => this.props.passwordChanged(password)}
                    />
                </CardSection>
                <CardSection>
                  {this.renderButton()}
                </CardSection>
            </Card>
            </View>
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

const mapStateToProps = ({authenticationResponse}) => {
    const {email, password, loading} = authenticationResponse;
    return {
        email: 'test@test.com',
        password: '123456',
        loading
    };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);