import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Submit, Field, ContentContainer, CustomText, SubmitContainer, LogoText } from '../components/Styled';

import connectionRef from '../functions/FirebaseService';

function PasswordRecover({ navigation }) {
    const [ email, setEmail ] = useState('');
    const { auth } = connectionRef;

    const uri = 'https://images.pexels.com/photos/290204/pexels-photo-290204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

    const handleSubmit = () => {
        // ENVIA LINK PARA EMAIL
    
    };

    return(
        <ImageBackground source={{ uri }} style={{ width: '100%', height: '100%' }}>
            <Container behavior='padding' enabled>
                <ContentContainer>
                    <LogoText margin>vPet</LogoText>
                </ContentContainer>
                <ContentContainer>
                    <Field textContentType='emailAddress' placeholder='Email Cadastrado' value={ email } onChangeText={ text => setEmail(text) } />
                    <SubmitContainer>
                        <Submit color='#FF978C' title='Recuperar senha' onPress={ handleSubmit } />
                    </SubmitContainer>
                    <CustomText margin>Uma nova será enviada ao seu e-mail</CustomText>
                    <CustomText margin onPress={ () => navigation.goBack() }>Voltar</CustomText>
                </ContentContainer>
            </Container>
        </ImageBackground>
    );
}

export default PasswordRecover;