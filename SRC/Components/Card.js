import React from "react"
import { View, Dimensions, Text, ImageBackground } from "react-native"
import { AntDesign } from "@expo/vector-icons"

class Card extends React.Component {
	render() {
		return (
			<ImageBackground
				style={{
					height: "100%",
					width: "100%",
				}}
				source={{ uri: this.props.dataProp.urls.small }}
				imageStyle={{ borderRadius: 20 }}
			>
				<View
					style={{
						backgroundColor: "rgba(0,0,0,0.3)",
						flex: 1,
						flexDirection: "row",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							alignSelf: "flex-end",
							width: "100%",
							marginBottom: 20,
						}}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 30,
								marginLeft: 20,
							}}
						>
							{this.props.dataProp.user.first_name}
						</Text>
						<AntDesign
							name="infocirlce"
							style={{ fontSize: 25, color: "white", marginRight: 20 }}
						/>
					</View>
				</View>
			</ImageBackground>
		)
	}
}

export default Card
