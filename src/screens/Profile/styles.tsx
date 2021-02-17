import styled from 'styled-components/native'
// import TitleDecor

export const HeaderView = styled.View`
    background-color: #1F1F1F;
    min-height: 20%;
    max-height: 20%;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row
    flex:1


`;

export const PrincipalView = styled.View`
    background-color: #292929;
    flex:1;
    justify-content: center;
    max-height: 30%;
    padding-bottom: 17%;
    
    
`;

export const Footter = styled(PrincipalView)`
    min-height: 40%;
    padding-top: 5%;
    justify-content: flex-start;
  
`;

export const UsernameText = styled.Text`
    color: white;
    font-weight: bold;
    margin-left: 5%
    top: 3%;
`;

export const LogoutButton = styled.TouchableOpacity`
    flex-direction: row;
    margin-right: 3%;
    top:9%;
 
`;

export const LogoutImage = styled.Image`
    max-height: 3%;
    max-width: 3%;
    position: absolute;
    align-self: center;
    padding-left: 15%;

`;

export const LogoutText = styled.Text`
    color: white;
    padding-right: 1%;

`;

export const UserPic = styled.Image`
    align-self: center;
    width: 20%;
    height: 20%;
    position: relative;
    padding: 15%;
    bottom: 15%;
    border: 2px solid white;
    border-radius: 100px;
`;

export const Titles = styled.Text`
    color: white;
    font-weight: bold
    justify-content: center;
    align-self: center;
    font-size: 22px;
    margin-left: 2%;
    margin-right: 3%;
    flex-wrap: wrap;
    text-align: justify;
`;

export const DescriptionTexts = styled.Text`
    color: white
    margin-left: 6.5%;
    max-width: 90%;
`;

export const NumbersText = styled(DescriptionTexts)`
    align-self: center;
    
`;

export const NumbersView = styled.View`
    background-color: #383838;
    flex:1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-height: 12%;
    margin-left: -10px;

`;

export const NumbersSelection = styled.TouchableOpacity`
    flex-direction: column;

`;

