import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import {
    LoginView,
    LoginButton,
    LoginButtonText,
    LoginUsername,
    LoginIcon
} from './styles'
import * as Yup from 'yup'
import { View, Keyboard } from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import { setCurrentUser, User, updateUserData } from "../../redux/Ducks/UserDuck"
import { getUser, getUserFollowers, getUserFollowing, getUserOrgs, getUserRepos } from '../../services'
import Icon from 'react-native-vector-icons/Ionicons'


const Login = ({navigation}) => {
    
    const {currentUser} = useSelector((state) => state.auth);
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
        Keyboard.dismiss()
        await getCurrentUser(user)
        navigation.navigate('Home')
    }

    return (
        <LoginView>
            
            <LoginIcon
                source={require("../../assets/git-hub-icon.png")}
                resizeMode={'center'}
                tintColor={"#FFCE00"}
            />
            <Formik
                initialValues={{
                    user: "",
                }}
                validationSchema={Yup.object({
                    user: Yup.string()          
                      .required('Campo Obrigatório')})}
                onSubmit={(values) => {
                    setTimeout(() => {console.log(JSON.stringify(values, null, 2));
                    }, 400);
                }}
            >
               {({ handleChange, handleBlur, values }) => (
                <>
                <View style={{paddingBottom: "2%", paddingTop: "7%"}}>
                    <LoginUsername
                        placeholder={"Usuário"}
                        onChangeText={handleChange('user')}
                        onBlur={handleBlur('user')}
                        value={values.user}
                        />
                </View>
                <View style={{minHeight: 60}}>
                <LoginButton onPress={() => {onClick(values.user); values.user=""}}>
                    <LoginButtonText>
                       ENTRAR 
                   </LoginButtonText>
                   <Icon name={'arrow-forward-outline'} size={30}/>
               </LoginButton>
               </View>
               </>

               )}
            </Formik>

            
        </LoginView>
    )
}

export default Login