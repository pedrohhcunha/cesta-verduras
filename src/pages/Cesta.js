import React from 'react';

import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'

import topo from '../assets/topo.png'

import Texto from '../components/Texto';

import mock from '../mocks/cesta'

const width = Dimensions.get('screen').width

export default function Cesta(props) {
    return(
        <>
            <Image style={styles.topImage} source={topo} />
            <Texto style={styles.pageTitle}>{mock.topo.titulo}</Texto>
            <View style={styles.section}>
                <Texto style={styles.sectionTitle}>{mock.detalhes.nome}</Texto>
                <View style={styles.productorView}>
                    <Image style={styles.logoImage} source={mock.detalhes.logoFazenda} />
                    <Texto style={styles.sectionProductor}>{mock.detalhes.nomeFazenda}</Texto>
                </View>
                <Texto style={styles.sectionDetails}>{mock.detalhes.descricao}</Texto>
                <Texto style={styles.sectionPrice}>{mock.detalhes.preco}</Texto>
                <TouchableOpacity style={styles.botao}>
                    <Texto style={styles.textBotao}>{mock.detalhes.botao}</Texto>
                </TouchableOpacity>
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
        paddingHorizontal: 16,
    },  
    sectionTitle:{
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
    },
    productorView: {
        flexDirection: 'row',
        paddingVertical: 12,
        alignItems: 'center',
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
        lineHeight: 26,
    },
    sectionPrice: {
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 42,
        color: '#2A9F85',
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    textBotao: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26
    }
})