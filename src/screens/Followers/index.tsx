import React from 'react'
import {
    MainView,
    Container,
    UserName,
    UserPic,
    Screen,
    ArrowIcon,
} from './styles'
import TitleDecor  from '../../shared/components/TitleDecor'
import { View, Text, FlatList } from 'react-native'
import {useRoute} from '@react-navigation/native'
import { getUser, getUserFollowers, getUserFollowing, getUserOrgs, getUserRepos } from '../../services'
import {useDispatch, useSelector} from 'react-redux'
import { User, updateUserData, setCurrentUser } from '../../redux/Ducks/UserDuck'



const Followers = ({navigation}) => {
    navigation.screenProps
    const { currentUser } = useSelector(state => state.auth)
    const route = useRoute()
    const currentFlow = route.params?.currentFlow
    
    const data = currentFlow=='followers'? currentUser.followers : currentUser.following
    const dispatch = useDispatch()


    async function getCurrentUser(username: string) {
        const responseUser = await getUser(username)
        const userData: User = {
            username: responseUser.login,
            name: responseUser.name,
            email: responseUser.email,
            bio: responseUser.bio,
            location: responseUser.location,
            company: responseUser.company,
            avatar: responseUser.avatar_url,
            followers_quantity: responseUser.followers,
            following_quantity: responseUser.following,
            repos_quantity: responseUser.public_repos,
            followers: null,
            following: null,
            Repos: null,
            starred: null,
            organizations: null,
        }

        
        dispatch(setCurrentUser(userData))
        
    }
    async function onClick(user: string) {
        await getCurrentUser(user)
        navigation.navigate('Home')
    }
    
   

    const renderItem = ({item}) =>{
        return (
        <MainView onPress={() => onClick(item.login)}>
            <Container>
            <View style={{left: -8}}>
                <TitleDecor/>
             </View>
             <UserPic
                source={{uri:item.avatar_url}}
             />
             <View style={{flexDirection:'row', flex:1, justifyContent:'space-around', left:'7%'}}>
             <UserName>#{item.login}</UserName>
             <ArrowIcon>></ArrowIcon>
             </View>
            </Container> 
        </MainView>
        )
    }

    return (
    <Screen>      
        <FlatList
            data={data}
            renderItem={renderItem}
        />
     </Screen>       
    )
}

export default Followers;