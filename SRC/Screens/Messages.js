import React from "react"
import { View, SafeAreaView, Text } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

class Messages extends React.Component {
	render() {
		return (
			<View style={{ backgroundColor: "black", flex: 1 }}>
				<SafeAreaView style={{ flex: 1 }}>
					<Text
						style={{
							color: "white",
							fontSize: 40,
							textTransform: "uppercase",
							fontWeight: "bold",
							letterSpacing: 10,
							marginLeft: 20,
						}}
					>
						Messages
					</Text>
					<View
						style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
					>
						<MaterialCommunityIcons
							name="cards"
							style={{ color: "white", fontSize: 200 }}
						/>
						<Text
							style={{
								color: "white",
								fontSize: 30,
								fontWeight: "bold",
								marginVertical: 10,
							}}
						>
							Get Swiping
						</Text>
						<Text
							style={{
								color: "white",
								textAlign: "center",
								fontWeight: "300",
								marginVertical: 10,
								width: "70%",
							}}
						>
							When you match with other users they will apperar here and you can
							chat with them.
						</Text>
					</View>
				</SafeAreaView>
			</View>
		)
	}
}

export default Messages
