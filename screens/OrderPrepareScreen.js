import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Screen from '../components/Screen';

const OrderPrepareScreen = () => {
    const navigation = useNavigation();


    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('OrderDeliver')
        }, 3000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <Screen>
            <View className="flex-1 justify-center items-center">
                <Image source={require("../assets/images/delivery.gif")} className="h-64 w-64" />
                <Text className="text-sm mt-4">Your order is being prepared...</Text>

            </View>
        </Screen>
    )
}

export default OrderPrepareScreen