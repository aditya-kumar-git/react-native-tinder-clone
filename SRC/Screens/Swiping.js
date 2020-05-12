import React from "react"
import {
	SafeAreaView,
	View,
	Text,
	Animated,
	PanResponder,
	Dimensions,
	FlatList,
	TouchableOpacity,
} from "react-native"
import Card from "../Components/Card"
import { Entypo, AntDesign } from "@expo/vector-icons"
import Axios from "axios"

class Swiping extends React.Component {
	state = {
		translateTheCard: new Animated.ValueXY(0),
		actualWidth: Dimensions.get("screen").width,
		showArr: [],
		moveThis: 0,
	}

	getPHOTOS = async () => {
		var response = await Axios.get("https://api.unsplash.com/search/photos", {
			params: { query: "girls" },

			headers: {
				Authorization: "Client-ID 21BDFqzN_YoecVKMijHetBlOhYKzi4MdwxztBOdOhr4",
			},
		})

		console.log(response.data.results)
		this.setState({
			showArr: response.data.results,
		})
	}

	componentDidMount() {
		if (!this.state.showArr[1]) {
			this.getPHOTOS()
		} else {
			console.log("YOOO")
		}
	}

	render() {
		var nextOpacity = this.state.translateTheCard.x.interpolate({
			inputRange: [-this.state.actualWidth, 0, this.state.actualWidth],
			outputRange: [1, 0, 1],
			extrapolate: "clamp",
		})
		var nextScale = this.state.translateTheCard.x.interpolate({
			inputRange: [-this.state.actualWidth / 2, 0, this.state.actualWidth / 2],
			outputRange: [1, 0.9, 1],
			extrapolate: "clamp",
		})
		var rotateUpper = this.state.translateTheCard.x.interpolate({
			inputRange: [-this.state.actualWidth / 2, 0, this.state.actualWidth / 2],
			outputRange: ["-10deg", "0deg", "10deg"],
			extrapolate: "clamp",
		})

		var _panHAND = PanResponder.create({
			onStartShouldSetPanResponder: () => {
				return true
			},
			onPanResponderMove: Animated.event([
				null,
				{
					dx: this.state.translateTheCard.x,
					// dy: this.state.translateTheCard.y,
				},
			]),
			onPanResponderRelease: (eve, ges) => {
				if (ges.dx >= this.state.actualWidth / 2) {
					Animated.spring(this.state.translateTheCard, {
						toValue: this.state.actualWidth + 100,
					}).start(() => {
						this.setState(
							{
								moveThis: this.state.moveThis + 1,
							},
							() => {
								this.state.translateTheCard.setValue({ x: 0, y: 0 })
							}
						)
					})
				} else if (ges.dx <= -this.state.actualWidth / 2) {
					Animated.spring(this.state.translateTheCard, {
						toValue: {
							x: -this.state.actualWidth - 100,
							y: Dimensions.get("screen").height + 100,
						},
					}).start(() => {
						this.setState(
							{
								moveThis: this.state.moveThis + 1,
							},
							() => {
								this.state.translateTheCard.setValue({ x: 0, y: 0 })
							}
						)
					})
				} else {
					Animated.spring(this.state.translateTheCard, {
						toValue: { x: 0, y: 0 },
					}).start()
				}
			},
		})

		var renderCards = () => {
			return this.state.showArr
				.map((item, index) => {
					if (index < this.state.moveThis) {
						return null
					} else if (index === this.state.moveThis) {
						return (
							<Animated.View
								{..._panHAND.panHandlers}
								style={{
									position: "absolute",
									alignSelf: "center",
									transform: [
										{ rotate: rotateUpper },
										...this.state.translateTheCard.getTranslateTransform(),
									],
									height: "95%",
									width: "95%",
								}}
								key={item.id}
							>
								<Card colcol="green" dataProp={item} />
							</Animated.View>
						)
					} else {
						return (
							<Animated.View
								// {..._panHAND.panHandlers}
								style={{
									position: "absolute",
									alignSelf: "center",
									opacity: nextOpacity,
									transform: [{ scale: nextScale }],
									height: "95%",
									width: "95%",
									// transform: this.state.translateTheCard.getTranslateTransform(),
								}}
								key={item.id}
							>
								<Card colcol="green" dataProp={item} />
							</Animated.View>
						)
					}
				})
				.reverse()
		}
		return (
			<View style={{ backgroundColor: "black", flex: 1 }}>
				<SafeAreaView style={{ flex: 1 }}>
					<View style={{ height: "90%" }}>{renderCards()}</View>
					<View
						style={{
							height: "10%",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-evenly",
						}}
					>
						<TouchableOpacity>
							<Entypo name="cross" style={{ color: "red", fontSize: 55 }} />
						</TouchableOpacity>

						<TouchableOpacity>
							<AntDesign
								name="star"
								style={{ color: "lightskyblue", fontSize: 30 }}
							/>
						</TouchableOpacity>

						<TouchableOpacity>
							<AntDesign
								name="heart"
								style={{ color: "lightgreen", fontSize: 50 }}
							/>
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			</View>
		)
	}
}

export default Swiping
