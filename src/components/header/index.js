import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgUri} from 'react-native-svg';
import style from './style';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <SvgUri
          width="140"
          height="50"
          uri="http://localhost:3000/images/nesine-logo.svg"
        />
      </TouchableOpacity>
      <View style={style.buttonList}>
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={style.loginButtonText}>GİRİŞ YAP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.registerButton}>
          <Text style={style.registerButtonText}>ÜYE OL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
