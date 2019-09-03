import Styled from 'styled-components/native';

export const LoginMainContainer = Styled.KeyboardAvoidingView`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #fafafa;
`;

export const LoginField = Styled.TextInput`
    background-color: #fff;
    padding: 10px;
    width: 80%;
    border-radius: 10px;
    margin-top: 20px;
`;

export const LoginSubmit = Styled.Button`
    margin-top: 20px;
    padding: 20px;
`;