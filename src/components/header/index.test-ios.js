import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgUri} from 'react-native-svg';
import style from './style';

const Header = () => (
  <View style={style.container}>
    <SvgUri
      width="140"
      height="50"
      uri="http://localhost:3000/images/nesine-logo.svg"
    />
    <Text>İos</Text>
    <View style={style.buttonList}>
      <TouchableOpacity style={style.loginButton}>
        <Text style={style.loginButtonText}>GİRİŞ YAP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.registerButton}>
        <Text style={style.registerButtonText}>ÜYE OL</Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default Header;
