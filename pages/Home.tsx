import React, {useEffect, useState} from "react";
import TextList from "../components/TextList";
import {View} from "react-native";
import CardView from "../components/CardView";


export function Home() {
	const [data1,setData1]=useState<Array<(Array<string>)>>([])
	// console.log('야호',data1)
	useEffect(()=>{
		fetch('https://www.dongjak.go.kr/media/mcms/apiImage/list.do?cateName=24&menuNo=600027')
			.then(res=>{
				return res.text()
			})
			.then(res=>{
				const k=res.match(/<img src=\"http[^>]*>/g)
				const q=(k?.filter(s=>s!=null).map(s=>{
						const k:RegExpMatchArray | null=s.match(/src=\"([^\"]*)/);
						const k1:RegExpMatchArray | null=s.match(/alt=\"([^\"]*)/);
						if(k!=null&&k1!=null)
							return [k[1],k1[1]]
					}
				))
				if(q!=null){
					const li:Array<(Array<string>)>=[]
					for(let i=0;i<q.length;i++){
						const e=q[i]
						// @ts-ignore
						li.push([String(e[0]),String(e[1])]);
					}
					setData1(li)
				}
			})

	},[])

	return(
		<View>
			<TextList/>
			<CardView title={"우리 공네 축제"} data={data1}/>
			<CardView title={"동작구 명소"} data={[]}/>
			<CardView title={"동작구 시설"} data={[]}/>
			<CardView title={"통합 예약"} data={[]}/>
			<TextList/>
		</View>
	)
}
