import React, {useState} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
const lStyle = StyleSheet.create({
	container: {
		backgroundColor:'white',
		flex:1
	},
	row:{
		backgroundColor:'#F1F9FF',
		paddingVertical:25,
		margin:7,
		borderRadius:16
	},
	rowText:{
		color:'#0790FF',
		fontSize:18,
		fontWeight:"bold",
		marginHorizontal:16
	}
})


export function User() {
	const [list, setList] = useState(['알림받기', 'row 2'])
	return(
		<View style={lStyle.container}>
			<TouchableOpacity style={lStyle.row}>
				<Text style={lStyle.rowText}>
					알림 받기
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={lStyle.row}>
				<Text style={lStyle.rowText}>
					위치 서비스 동의
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={lStyle.row}>
				<Text style={lStyle.rowText}>
					고객 지원
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={lStyle.row}>
				<Text style={lStyle.rowText}>
					의견 보내기
				</Text>
			</TouchableOpacity>
		</View>
		)
}
