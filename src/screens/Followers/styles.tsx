import styled from 'styled-components/native'

export const Screen = styled.View`
    background-color: #292929;
    flex:1;
    flex-direction: column;
    
    

    
`;

export const MainView = styled.TouchableOpacity`
    background-color: #292929;
    flex-direction: column;
    flex:1;
    align-items: center;
    border-bottom-color: gray;
    border-bottom-width: 0.5px;
    
`;

export const Container = styled.View`
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    
    
`;

export const UserName = styled.Text`
    color: white;
    font-weight: bold;
    min-width: 80%;
    max-width: 80%;

`;

export const UserPic = styled.Image`
    align-self: center;
    
    padding: 8%;
    left: 3%;
    position: relative;
    border: 1px solid white;
    border-radius: 100px;
`;

export const ArrowIcon = styled.Text`
    color: white;
    font-weight: bold;
    

`;

