import Styled from 'styled-components/native';

export const Container = Styled.KeyboardAvoidingView`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
padding-top: 40px;
padding-bottom: 20px;
`;

export const ContentContainer = Styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SubmitContainer = Styled.View`
    padding-top: 20px;
    width: 80%;
`;

export const GoogleSubmitContainer = Styled.View`
    padding-top: 20px;
    width: 40%;
`;

export const Submit = Styled.Button`
    padding: 30px;
`;

export const Field = Styled.TextInput`
    opacity: .75;
    background-color: #fff;
    padding: 10px;
    width: 80%;
    border-radius: 10px;
    margin-top: ${props => props.gap ? '20px' : '0'};
`;

export const CustomText = Styled.Text`
    color: ${props => !props.theme ? '#828282' : '#fafafa'};
    margin-top: ${props => props.margin ? '20px' : '0'};
    margin-bottom: ${props => props.margin ? '20px' : '0'};
`;

export const LogoText = Styled(CustomText)`
    font-size: 60;
`;