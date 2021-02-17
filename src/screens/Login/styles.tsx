import styled from 'styled-components/native';

export const LoginView = styled.View`
    flex: 1;
    background-color: #292929;
    justify-content: center;
`;

export const LoginIcon = styled.Image`
    max-height: 12%;
    align-self: center;

`

export const LoginUsername = styled.TextInput`
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    max-width: 96%;
    margin-left: 2%; 
    border-radius: 5px;
    min-height: 8%;
     
`

export const LoginButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #FFCE00;
    max-width: 96%;
    flex: 1;
    margin-left: 2%;
    border-radius: 5px;
    flex-direction: row;
    min-height: 80%;
    
    
    
`;

export const LoginButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;