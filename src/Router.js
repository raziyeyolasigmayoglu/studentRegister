import React from 'react';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import LoginForm from './LoginForm';
import StudentList from './StudentList';
import StudentCreate from './StudentCreate';
import StudentUpdate from './StudentUpdate';

const RouterComponent = () => {
    return (
    <Router>
        <Stack key="root" hideNavBar>
        <Scene key="kimlik">
            <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" />
        </Scene>
        <Scene key="main">
            <Scene 
            onRight={() => Actions.studentCreate()}
            rightTitle="Yeni"
            key="studentScreen" 
            component={StudentList} 
            title="Ögrenci Listesi Ekrani" />
            <Scene
            key="studentCreate"
            component={StudentCreate}
            title="Ögrenci Kayit Ekrani" />
            <Scene
            key="studentUpdate"
            component={StudentUpdate}
            title="Ögrenci Güncelleme Ekrani" />
        </Scene>
        </Stack>
    </Router>
    );
};

export default RouterComponent;