import styled from 'styled-components/native'

export const Screen = styled.View`
    background-color: #292929;
    flex:1;
    flex-direction: column;

`;

export const MainView = styled.View`
    background-color: #292929;
    flex-direction: row;
    flex:1;
    padding-top: 2%;
    align-items: center;
    border-bottom-color: gray;
    border-bottom-width: 0.5px;
`;

export const Header = styled.View`
    background-color: #292929;
`;

export const Title = styled.Text`
    color: white;
    font-weight: bold;
    min-width: 80%;
    max-width: 80%;
`;

export const Description = styled.Text`
    color: white;
    font-size: 10px;
    max-width: 88.5%;
`;

export const RatingView = styled.View`
    flex-direction: row;
    padding-bottom: 2%;
    padding-top: 2%;
`;

export const RatingText = styled.Text`
    color: white;
    font-size: 10px;
`;

export const LockerView = styled.View`
    padding-bottom: 2%;
    padding-top: 2%;
    padding-right: 11.5%;
`;
