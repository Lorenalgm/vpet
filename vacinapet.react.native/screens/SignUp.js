import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

import connectionRef from '../functions/FirebaseService';

import { Container, Field, Submit, ContentContainer, SubmitContainer, CustomText, LogoText } from '../components/Styled';

const uri = 'https://images.pexels.com/photos/2255565/pexels-photo-2255565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

function SignUp({ navigation }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

    return (
        <ImageBackground source={{ uri }} style={{ width: '100%', height: '100%' }}>
            <Container behavior='padding' enabled>
                <ContentContainer>
                    <LogoText margin >vPet</LogoText>
                </ContentContainer>
                <ContentContainer>
                    <Field textContentType='emailAddress' placeholder='Email' value={ email } onChangeText={ text => setEmail(text) } />
                    <Field gap textContentType='password' secureTextEntry={ true } placeholder='Senha' value={ password } onChangeText={ text => setPassword(text) } />
                    <Field gap textContentType='password' secureTextEntry={ true } placeholder='Confirme sua senha' value={ passwordConfirmation } onChangeText={ text => setPasswordConfirmation(text) } />                    
                    <SubmitContainer>
                        <Submit color='#FF978C' title='Criar conta' />
                    </SubmitContainer> 
                    <CustomText margin onPress={ () => navigation.goBack() }>Voltar</CustomText>                   
                </ContentContainer>
            </Container>
        </ImageBackground>
    );
}

export default SignUp;