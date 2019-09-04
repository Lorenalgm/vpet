import Styled from 'styled-components/native';

// LOGIN
export const LoginMainContainer = Styled.KeyboardAvoidingView`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: #fafafa;
`;

export const LoginPositionContainer = Styled.View`
    width: 100%; 
    display: flex; 
    alignItems: center;
    padding-top: 100px;
`;

export const LoginField = Styled.TextInput`
    background-color: #fff;
    padding: 10px;
    width: 80%;
    border-radius: 10px;
    margin-top: 20px;
`;

export const LoginSubmit = Styled.Button`
    padding: 30px;
`;

export const LoginText = Styled.Text`
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #fafafa;
`;

// BASE
export const BaseMainContainer = Styled.KeyboardAvoidingView`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

// SIGNUP
// PASSWORDRECOVER