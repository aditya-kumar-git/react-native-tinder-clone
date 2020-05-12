import React from "react"
import {
	StyleSheet,
	Text,
	View,
	Animated,
	PanResponder,
	Dimensions,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import AccountInfo from "./SRC/Screens/AccountInfo"
import Swiping from "./SRC/Screens/Swiping"
import Messages from "./SRC/Screens/Messages"
import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons"

export default class App extends React.Component {
	render() {
		var Tab = createMaterialBottomTabNavigator()
		return (
			<NavigationContainer>
				<Tab.Navigator
					activeColor="white"
					inactiveColor="grey"
					barStyle={{ backgroundColor: "black" }}
				>
					<Tab.Screen
						component={AccountInfo}
						name="AccountInfo"
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<MaterialIcons
										name="person"
										size={20}
										color={color}
										style={{
											transform: [{ translateY: focused ? -10 : 0 }],
										}}
									/>
								)
							},
						}}
					/>
					<Tab.Screen
						component={Swiping}
						name="Swiping"
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<FontAwesome5
										name="fire"
										size={20}
										color={color}
										style={{
											transform: [{ translateY: focused ? -10 : 0 }],
										}}
									/>
								)
							},
						}}
					/>
					<Tab.Screen
						component={Messages}
						name="Messages"
						options={{
							tabBarIcon: ({ color, focused }) => {
								return (
									<MaterialIcons
										name="message"
										size={20}
										color={color}
										style={{
											transform: [{ translateY: focused ? -10 : 0 }],
										}}
									/>
								)
							},
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		)
	}
}
