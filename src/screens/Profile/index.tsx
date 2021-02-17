import  React, {useEffect} from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
    HeaderView,
    PrincipalView,
    NumbersView,
    UsernameText,
    LogoutText,
    LogoutButton,
    LogoutImage,
    Titles,
    DescriptionTexts,
    UserPic,
    NumbersText,
    Footter,
    NumbersSelection
} from './styles'
import TitleDecor  from '../../shared/components/TitleDecor'
import { getUserFollowers, getUserFollowing, getUserOrgs, getUserRepos } from '../../services'
import {useDispatch, useSelector} from 'react-redux'
import { User, updateUserData, Logout } from '../../redux/Ducks/UserDuck'
import {useRoute} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'



const Profile = ({navigation}) => {

    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.auth)

    function UserLogout() {
        navigation.navigate('_')
      
    }

    async function catchUserFollowing() {
        const response = await getUserFollowing(currentUser.username)
        const newUserInfo: User = {
            ...currentUser,
            following: response
        }
        dispatch(updateUserData(newUserInfo));
    }

    async function catchUserFollowers() {
        const response = await getUserFollowers(currentUser.username)
        const newUserInfo: User = {
            ...currentUser,
            followers: response
        }
        
        dispatch(updateUserData(newUserInfo));
    }

    async function catchUserRepos() {
        const response = await getUserRepos(currentUser.username).catch(err => console.error(err))
        const newUserInfo: User = {
            ...currentUser,
            Repos: response
        }
        
        dispatch(updateUserData(newUserInfo));
        
    }

  
    async function loadFollowers() {
       await catchUserFollowers()
    //    navigation.navigate('Seguidores', {currentFlow: "followers"})
    }
    
    async function loadFollowing() {
        await catchUserFollowing()
    //    navigation.navigate('Seguindo', {currentFlow: 'following'})
    }
   
    async function loadRepos() {
        await catchUserRepos()
    //    navigation.navigate('Repos')
    }

    
    console.log(currentUser.followers)
    
    useEffect(() => {
        loadFollowers();
        
        loadFollowing();
        
        loadRepos();
        
    },[currentUser.username])
    

    return (
        <View style={{flex:1}}>
            <HeaderView>
                <UsernameText>#{currentUser.username}</UsernameText>
                <LogoutButton onPress={UserLogout}>
                    <LogoutText>Sair</LogoutText>
                    <Icon name="logout" size={22} color="#D03434" />
                </LogoutButton>
            </HeaderView>

            <PrincipalView>
            <UserPic
                source={{uri:currentUser.avatar, cache: 'only-if-cached'}}
                resizeMode={'cover'}
                borderRadius={100}
            />
                <View style={{flexDirection:'row', alignItems: 'center', paddingRight:100}}>
                    <TitleDecor/>
                    <Titles>{currentUser.name? currentUser.name : "Nome"}</Titles>
                </View>
                {currentUser.email && <DescriptionTexts>{currentUser.email}</DescriptionTexts>}
                {currentUser.location && <DescriptionTexts>{currentUser.location}</DescriptionTexts>}
                {currentUser.company && <DescriptionTexts>{currentUser.company}</DescriptionTexts>}

  
            </PrincipalView>
            <NumbersView>
                <NumbersSelection onPress={() =>  navigation.navigate('Seguidores', {currentFlow: "followers"})}>
                    <Titles>{currentUser.followers_quantity}</Titles>
                    <NumbersText>Seguidores</NumbersText>
                </NumbersSelection>
                <NumbersSelection onPress={() => navigation.navigate('Seguindo', {currentFlow: 'following'})}>
                    <Titles>{currentUser.following_quantity}</Titles>
                    <NumbersText>Seguindo</NumbersText>
                </NumbersSelection>
                <NumbersSelection onPress={() => navigation.navigate('Repos')}>
                    <Titles>{currentUser.repos_quantity}</Titles>
                    <NumbersText>Repos</NumbersText>
                </NumbersSelection>
            </NumbersView>
            <Footter>
                <View style={{flexDirection:'row', alignItems: 'center', paddingRight:100}}>
                    <TitleDecor/>
                    <Titles>BIO</Titles>
                </View>
                <DescriptionTexts>{currentUser.bio}</DescriptionTexts>
            </Footter>
        </View>
    )
}
export default Profile;