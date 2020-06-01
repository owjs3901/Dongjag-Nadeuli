import React from 'react';
import {ScrollView, StyleSheet, Text, View,Image} from 'react-native';
// import Swiper from 'react-native-swiper/src/';
import {Ionicons} from '@expo/vector-icons';

const lStyle = StyleSheet.create({
	listHeader: {
		backgroundColor: '#FFFFFF',
		width: '100%',
		borderTopColor: 'black',
		borderBottomColor: 'black',
		borderTopWidth: 1,
		borderBottomWidth: 1,
	}
	,
	listView: {
		paddingHorizontal: 12
	},
	listText: {
		fontSize: 18,
		borderBottomWidth: 1,
		borderBottomColor: 'gray'
	},
	title: {
		fontSize: 24,
		margin: 8
	},
	swiper: {
		height: 235 - 54,
		backgroundColor: 'white'
	},
	swiperEl: {
		margin: 20,
		alignItems: "center",
		height: 235 - 54,
	},
	swiperImg: {
		height: 100,
		width: 100,
		backgroundColor: '#BCE0FD'
	},
	swiperTitle: {
		marginTop: 8,
		fontSize: 18,
		color: '#0790FF',
		fontWeight: 'bold'
	},
	textList: {
		backgroundColor: '#FFFFFF',
		width: '100%',
		paddingVertical: 20,
		borderBottomColor: 'black',
		borderBottomWidth: 1
	}
})
export default function CardView(props: { title: string, data: Array<(Array<string>)> }) {
	return (
		<View style={lStyle.textList}>
			<View style={lStyle.listHeader}>
				<Text style={lStyle.title}>
					{props.title}
				</Text>
			</View>
			<ScrollView style={lStyle.swiper} horizontal>
				{
					props.data.map((e) => (
						<View style={lStyle.swiperEl}>
							<View style={lStyle.swiperImg}>
								<Image style={lStyle.swiperImg} source={{uri:e[0]}} />
							</View>
							<Text style={lStyle.swiperTitle}>
								{e[1]}
							</Text>
						</View>
					))
				}
			</ScrollView>
		</View>
	)
}
