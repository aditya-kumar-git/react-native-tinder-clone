import React from "react"
import {
	View,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
	Text,
	ImageBackground,
	StyleSheet,
	Animated,
} from "react-native"
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons"

class AccountInfo extends React.Component {
	state = {
		upperHeight: new Animated.Value(100),
		lowerHeight: new Animated.Value(0),
		lowerOpa: new Animated.Value(0),
		curvedEdges: new Animated.Value(0),
	}

	componentDidMount() {
		Animated.sequence([
			Animated.parallel([
				Animated.timing(this.state.upperHeight, {
					toValue: 65,
					duration: 1500,
				}),
				Animated.timing(this.state.lowerHeight, {
					toValue: 35,
					duration: 1500,
				}),
			]),
			Animated.parallel([
				Animated.timing(this.state.lowerOpa, { duration: 1000, toValue: 1 }),
				Animated.timing(this.state.curvedEdges, {
					duration: 700,
					toValue: 70,
				}),
			]),
		]).start()
	}

	render() {
		var uppH = this.state.upperHeight.interpolate({
			inputRange: [0, 100],
			outputRange: ["0%", "100%"],
		})
		var lowH = this.state.lowerHeight.interpolate({
			inputRange: [0, 100],
			outputRange: ["0%", "100%"],
		})
		return (
			<View style={{ backgroundColor: "rgb(19, 19, 19)", flex: 1 }}>
				<StatusBar hidden />
				<StatusBar barStyle="light-content" />
				<SafeAreaView>
					<Animated.View
						style={{
							height: uppH,
							backgroundColor: "black",
						}}
					>
						<Animated.View
							style={{
								flex: 1,
								backgroundColor: "rgb(19, 19, 19)",
								borderBottomLeftRadius: this.state.curvedEdges,
								borderBottomRightRadius: this.state.curvedEdges,
							}}
						>
							<View
								style={{
									alignItems: "center",
									// justifyContent: "space-evenly",
								}}
							>
								<ImageBackground
									source={{
										uri:
											"https://pbs.twimg.com/profile_images/1259815574877671425/PMad7BLe_400x400.jpg",
									}}
									style={{ height: 150, width: 150, marginTop: 20 }}
									imageStyle={{ borderRadius: 200 }}
								/>
								<View style={{ flexDirection: "row", marginTop: 20 }}>
									<Text
										style={{ color: "white", fontWeight: "bold", fontSize: 25 }}
									>
										Aditya Kumar
									</Text>
									<Text
										style={{
											color: "white",
											fontWeight: "bold",
											fontSize: 25,
											marginHorizontal: 10,
										}}
									>
										,
									</Text>
									<Text
										style={{
											color: "white",
											fontWeight: "bold",
											fontSize: 25,
										}}
									>
										20
									</Text>
								</View>
								<Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
									SRM University
								</Text>
							</View>
							<View
								style={{
									// backgroundColor: "red",
									flex: 1,
									justifyContent: "space-evenly",
									alignItems: "center",
									flexDirection: "row",
								}}
							>
								<TouchableOpacity
									style={{
										alignItems: "center",
										transform: [{ translateY: -15 }],
									}}
								>
									<View style={accountStyles.circleIcons}>
										<MaterialIcons
											name="settings"
											style={accountStyles.iconsInside}
										/>
									</View>
									<Text style={accountStyles.iconText}>Settings</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										alignItems: "center",
										transform: [{ translateY: 15 }],
									}}
								>
									<View style={accountStyles.circleIcons}>
										<AntDesign
											name="camera"
											style={accountStyles.iconsInside}
										/>
									</View>
									<Text style={accountStyles.iconText}>Add Media</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										alignItems: "center",
										transform: [{ translateY: -15 }],
									}}
								>
									<View style={accountStyles.circleIcons}>
										<Entypo name="pencil" style={accountStyles.iconsInside} />
									</View>
									<Text style={accountStyles.iconText}>Edit Profile</Text>
								</TouchableOpacity>
							</View>
						</Animated.View>
					</Animated.View>
					<Animated.View
						style={{
							height: lowH,

							backgroundColor: "black",
						}}
					>
						<Animated.View
							style={{
								opacity: this.state.lowerOpa,
								flex: 1,
								justifyContent: "space-evenly",
								alignItems: "center",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-evenly",
								}}
							>
								<Entypo
									name="key"
									style={{
										color: "white",
										transform: [{ rotateY: "180deg" }, { translateX: 15 }],
										fontSize: 20,
									}}
								/>
								<Text
									style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
								>
									Control Your Profile
								</Text>
							</View>
							<Text style={{ color: "white", fontSize: 18, fontWeight: "200" }}>
								Limit what others see with tinder plus
							</Text>
							<TouchableOpacity
								style={{
									backgroundColor: "#ec4083",
									paddingVertical: 15,
									paddingHorizontal: 25,
									borderRadius: 30,
								}}
							>
								<Text style={{ fontWeight: "bold" }}>Tinder Plus</Text>
							</TouchableOpacity>
						</Animated.View>
					</Animated.View>
				</SafeAreaView>
			</View>
		)
	}
}

var accountStyles = StyleSheet.create({
	circleIcons: {
		backgroundColor: "black",
		padding: 15,
		borderRadius: 100,
	},
	iconText: {
		color: "white",
		fontWeight: "bold",
		marginTop: 5,
	},
	iconsInside: {
		color: "white",
		fontSize: 25,
	},
})

export default AccountInfo
