import React from 'react';

import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

import topo from '../assets/topo.png'

const width = Dimensions.get('screen').width

export default function Cesta(props) {
    return(
        <>
            <Image style={styles.topImage} source={topo} />
            <Text style={styles.pageTitle}>Detalhes da cesta:</Text>
        </>
    )
}

const styles = StyleSheet.create({
    topImage: {
        width: '100%',
        height: 578 / 768 * width
    }, 
    pageTitle: {
        width: '100%',
        position: "absolute",
        fontSize: 16,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        padding: 16
    }
})