import React, {useState} from 'react';
import {FlatList, ListView, StyleSheet, Text, View} from 'react-native';
import styles from "../Style"

const lStyle = StyleSheet.create({
	listHeader:{
		backgroundColor:'#FFFFFF',
		width:'100%',
	}
	,
	listView: {
		paddingHorizontal: 12
	},
	listText: {
		fontSize: 18,
		borderBottomWidth:1,
		borderBottomColor:'gray'
	},
	title:{
		fontSize:24,
		margin:8
	}
})
export default function TextList() {
	const [list, setList] = useState(['INF0', 'row 2'])
	return (
		<View style={styles.textList}>
			<View style={lStyle.listHeader}>
				<Text style={lStyle.title}>
					동작구 소식
				</Text>
			</View>
			<FlatList style={lStyle.listView} data={list}
			          renderItem={(rowData) => <Text style={lStyle.listText}>{rowData.item}</Text>}/>
		</View>
	)
}
