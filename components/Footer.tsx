import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles=StyleSheet.create({
	footer:{
		position:"absolute",
		bottom:0,
		flexDirection:'row',
		width:'100%',
		backgroundColor:'white'
	}
})

export default function Header(props:{clickEvent:(index:number)=>void}) {
	return (
		<View style={styles.footer}>
			<TouchableOpacity style={{flex:1,height:48,alignItems:'center',justifyContent:'center'}}
			onPress={()=>{
				props.clickEvent(0)
			}}>
				<Text style={{textAlign:'center',marginVertical:'auto'}}>
					홈
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{flex:1,height:48,alignItems:'center',justifyContent:'center'}}
			                  onPress={()=>{
				                  props.clickEvent(1)
			                  }}>
				<Text style={{textAlign:'center',marginVertical:'auto'}}>
					스템프
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{flex:1,height:48,alignItems:'center',justifyContent:'center'}}
			                  onPress={()=>{
				                  props.clickEvent(2)
			                  }}>
				<Text style={{textAlign:'center',marginVertical:'auto'}}>
					유저
				</Text>
			</TouchableOpacity>
		</View>
	)
}
const a={

}
