import React, {useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// import Swiper from 'react-native-swiper/src/';
import styles from "../Style"
import { Ionicons } from '@expo/vector-icons';

const lStyle = StyleSheet.create({
	listHeader:{
		backgroundColor:'#FFFFFF',
		width:'100%',
		borderTopColor:'black',
		borderBottomColor:'black',
		borderTopWidth:1,
		borderBottomWidth:1,
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
	},
	swiper:{
		height:235-54,
		backgroundColor:'white'
	},
	swiperEl:{
		margin:20,
		alignItems:"center",
		height:235-54,
	},
	swiperImg:{
		height:100,
		width:100,
		backgroundColor:'#BCE0FD'
	},
	swiperTitle:{
		marginTop:8 ,
		fontSize:18,
		color: '#0790FF',
		fontWeight:'bold'
	},
	textList:{
		backgroundColor:'#FFFFFF',
		width:'100%',
		paddingVertical:20,
		borderBottomColor:'black',
		borderBottomWidth:1
	}
})
export default function CardView(props:{title:string}) {
	const [list, setList] = useState(['INF0', 'row 2'])
	return (
		<View style={lStyle.textList}>
			<View style={lStyle.listHeader}>
				<Text style={lStyle.title}>
					{props.title}
				</Text>
			</View>
			<ScrollView style={lStyle.swiper} horizontal>
				<View style={lStyle.swiperEl}>
					<View style={lStyle.swiperImg}>
						<Ionicons name="md-checkmark-circle" size={32} color="green" />
					</View>
					<Text style={lStyle.swiperTitle}>
						시설이름
					</Text>
				</View>
				<View style={lStyle.swiperEl}>
					<View style={lStyle.swiperImg}>
						<Ionicons name="md-checkmark-circle" size={32} color="green" />
					</View>
					<Text style={lStyle.swiperTitle}>
						시설이름
					</Text>
				</View>
			</ScrollView>
		</View>
	)
}
