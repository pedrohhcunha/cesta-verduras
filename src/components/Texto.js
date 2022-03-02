import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto(props){
    return (
        <Text style={[props.style, props.style?.fontWeight === 'bold' ? styles.boldText : styles.text]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: 'normal'
    },
    boldText: {
        fontFamily: "MontserratBold",
        fontWeight: 'normal'
    }
})