import React from 'react'
import { Tabs } from 'expo-router';
import { Octicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.black,
                tabBarShowLabel: false,
            }}>
            <Tabs.Screen name='product' options={{
                tabBarIcon: ({ size, color }) => <Octicons name="home" size={size} color={color} />
            }} />
            <Tabs.Screen name='analytic' options={{
                tabBarIcon: ({ size, color }) => <MaterialIcons name="bar-chart" size={size} color={color} />
            }} />
            <Tabs.Screen name='orders' options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="cart-outline" size={size} color={color} />
            }} />
        </Tabs>
    )
}