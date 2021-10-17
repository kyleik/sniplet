import React from 'react';
import {View} from 'react-native';
import TopContainer from './TopContainer';
import MainContainer from './MainContainer';
import {SnipletType} from '../../types';

import {setTrue, setFalse} from '../../redux/actions'
import { useSelector, useDispatch, RootStateOrAny, connect } from 'react-redux';

import style from './styles'
import { useEffect } from 'react';

export type ASnipProps = {

    sniplet: SnipletType;
    currentIndex: any;
    currentVisibleIndex: any;
    currentVisibleIndex2?: any;
    currentVisibleIndex3?: any;
    replyItem?: any;

}

const Sniplet = ({sniplet, currentIndex, currentVisibleIndex, replyItem}: ASnipProps) => {

return (
    <View style={{borderTopWidth: 0.5, borderColor: '#d3d3d3', paddingTop: 20, paddingBottom: 20}}>
        <View style={style.container}>
        <TopContainer replyItem={replyItem} currentIndex={currentIndex} currentVisibleIndex={currentVisibleIndex} sniplet={sniplet}></TopContainer>
        </View>
    </View>
)};

export default Sniplet;