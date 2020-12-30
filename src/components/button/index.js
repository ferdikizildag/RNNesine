import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

const Button = ({onPress, title, disabled}) => (
  <TouchableOpacity
    onPress={(e) => (!disabled ? onPress(e) : false)}
    style={[style.container, disabled ? style.disabled : null]}>
    <Text>{title}</Text>
  </TouchableOpacity>
);
export default Button;
