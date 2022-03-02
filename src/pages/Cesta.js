import React from 'react';

import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

import topo from '../assets/topo.png'
import logo from '../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Cesta(props) {
    return(
        <>
            <Image style={styles.topImage} source={topo} />
            <Text style={styles.pageTitle}>Detalhes da cesta:</Text>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Cesta de verduras</Text>
                <View style={styles.productorView}>
                    <Image style={styles.logoImage} source={logo} />
                    <Text style={styles.sectionProductor}>PH Farm</Text>
                </View>
                <Text style={styles.sectionDetails}>Uma cesta com produtos selecionados cuidadosamente para você e sua familia.</Text>
                <Text style={styles.sectionPrice}>R$ 23,90</Text>
            </View>
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
    },
    section: {
        paddingVertical: 8,
        paddingHorizontal: 16 
    },  
    sectionTitle:{
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'
    },
    productorView: {
        flexDirection: 'row',
        paddingVertical: 12,
        alignItems: 'center'
    },
    logoImage: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    sectionProductor: {
        fontSize: 16,
        lineHeight: 26,
    },
    sectionDetails: {
        fontSize: 16,
        color: "#A3A3A3",
        lineHeight: 26
    },
    sectionPrice: {
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 42,
        color: '#2A9F85',
        marginTop: 8
    }
})