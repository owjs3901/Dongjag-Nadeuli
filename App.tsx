import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from "./components/Header";

import styles from "./Style"
import TextList from "./components/TextList";
import Footer from "./components/Footer";
import {Home, Main, User} from "./pages";

export default function App() {

    //page를 선택함
    const [index,setIndex]=useState(0);
	return (
		<View style={styles.container}>
			<Header/>
			<ScrollView style={{flex:1,marginBottom:48,backgroundColor:'white'}}>
            {
	            (()=> {
                    switch (index) {
                        case 0:
                            return <Home/>
                        case 1:
                            return <Main/>
                        case 2:
                            return <User/>
                        default:
                            return <Main/>

                    }
                })()
            }
			</ScrollView>
			<Footer clickEvent={(ind)=>{
				setIndex(ind);
			}}/>
		</View>
	);
}

