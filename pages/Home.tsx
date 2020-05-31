import React from "react";
import TextList from "../components/TextList";
import {View} from "react-native";
import CardView from "../components/CardView";


export function Home() {
	return(
		<View>
			<TextList/>
			<CardView title={"우리 공네 축제1"}/>
			<CardView title={"동작구 명소"}/>
			<CardView title={"동작구 시설"}/>
			<CardView title={"통합 예약"}/>
			<TextList/>
		</View>
	)
}
