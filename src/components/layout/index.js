import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from 'components/header';
import style from './style';

const Layout = ({children}) => (
  <SafeAreaView style={style.container}>
    <Header />
    {children}
  </SafeAreaView>
);
export default Layout;
