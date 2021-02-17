import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    MainView,
    Title,
    Description,
    RatingView,
    LockerView,
    RatingText,
    Header,
    Screen
} from './styles'
import TitleDecor  from '../../shared/components/TitleDecor'
import { View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Repositories = ({navigation}) => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.auth)
    const data = currentUser.Repos

    const renderItem = ({item}) => {
        return (
            
            <MainView>

            <View style={{left: -8, bottom: 21}}>
              <TitleDecor/>
            </View>

            <View style={{flex: 1, left: 2}}>
                <View>
                    <Title>{item.name}</Title>
                    <Description>
                        {item.description}
                    </Description>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <RatingView>
                    <Icon name={"star-outline"} size={15} color={"#FFCE00"}/>
                    <RatingText>{item.stargazers_count}</RatingText>
                </RatingView>
                <LockerView>
                    <Icon name={"lock-open"} size={15} color={"#63BF1F"}/>
                </LockerView>
                </View>
            </View>

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

export default Repositories;