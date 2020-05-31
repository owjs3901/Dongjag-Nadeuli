import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Header from "./components/Header";

import styles from "./Style"
import TextList from "./components/TextList";
import {Home, Main, User} from "./pages";

export default function App() {

    //page를 선택함
    const [index,setIndex]=useState(0);



	return (
		<View style={styles.container}>
			<Header/>
			<TextList/>
            {
                ()=> {
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
                }
            }
			<User/>

			<Text>Open up App.tsx to start working on your a~~pp!</Text>
		</View>
	);
}

