import React, {useState} from 'react';
import {ListView, StyleSheet, Text, View} from 'react-native';
import styles from "../Style"
export default function TextList() {
	const ds = new ListView.DataSource({
		rowHasChanged: (r1, r2) => r1 !== r2
	});
	const [list,setList]=useState(ds.cloneWithRows(['INF0', 'row 2']))
	return (
		<View style={styles.textList}>
			<h1>
				동작구 소식
			</h1>
			<ListView dataSource={list} renderRow={(rowData) => <Text>{rowData}</Text>}/>
		</View>
	)
}
const a={

}
