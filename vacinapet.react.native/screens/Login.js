import React, { useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';

import connectionRef from '../functions/FirebaseService';

import { Container, Field, Submit, ContentContainer, SubmitContainer, GoogleSubmitContainer, CustomText, LogoText } from '../components/Styled';

function Login({ navigation: { navigate } }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { auth } = connectionRef;
    
    const uri = 'https://images.pexels.com/photos/2886042/pexels-photo-2886042.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
    
    const handleSubmit = () => {
        if(email && password) auth().signInWithEmailAndPassword(email, password).then(result => {
            setEmail('');
            setPassword('');
        });
    };

    useEffect(() => {
        // auth().onAuthStateChanged(user => {
        //     if(user) navigate('home');
        // })
    }, []);

    return (
        <ImageBackground source={{ uri }} style={{ width: '100%', height: '100%' }}>
            <Container behavior='padding' enabled>
                <ContentContainer>
                    <LogoText margin >vPet</LogoText>
                </ContentContainer>
                <ContentContainer>
                    <GoogleSubmitContainer>
                        <Submit color='#FFAEA6' title='Google' />
                    </GoogleSubmitContainer>
                    <CustomText margin>Ou</CustomText>
                    <Field textContentType='emailAddress' placeholder='Email' value={ email } onChangeText={ text => setEmail(text) } />
                    <Field gap textContentType='password' secureTextEntry={ true } placeholder='Senha' value={ password } onChangeText={ text => setPassword(text) } />
                    <SubmitContainer>
                        <Submit color='#FF978C' title='Entrar' onPress={ handleSubmit } />
                    </SubmitContainer>
                    <CustomText margin onPress={ () => navigate('passwordRecover') } >Esqueci minha senha</CustomText>                    
                    <CustomText margin onPress={ () => navigate('signUp') } >Chegou agora? Cadastre-se</CustomText>                    
                </ContentContainer>
            </Container>
        </ImageBackground>
        );
}
    
export default Login;