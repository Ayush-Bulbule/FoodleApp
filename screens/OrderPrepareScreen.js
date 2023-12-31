import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

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
                <Text className="text-2xl font-bold">Your order is being prepared</Text>
                <Text className="text-xl font-bold">Please wait</Text>
            </View>
        </Screen>
    )
}

export default OrderPrepareScreen