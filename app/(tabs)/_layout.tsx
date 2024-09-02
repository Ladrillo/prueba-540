import { Tabs } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { ORDERS_ENABLED } from '@/config/featureFlags'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders/index"
        options={{
          title: 'Orders',
          tabBarButton: (props) => {
            if (!ORDERS_ENABLED) return null
            return <TouchableOpacity {...props} />
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag' : 'bag-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders/[orderId]"
        options={{
          title: 'Order Details',
          tabBarButton: (props) => {
            if (!ORDERS_ENABLED) return null
            return <TouchableOpacity {...props} disabled={true} />
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'eye' : 'eye-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
