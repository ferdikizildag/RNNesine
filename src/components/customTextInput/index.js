import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import style from './style';

const CustomTextInput = ({onChange, label}) => {
  const [value, setValue] = useState('');
  const onChangeText = (text) => {
    setValue(text);
    onChange(text);
  };
  return (
    <>
      <Text style={style.label}>{label}</Text>
      <TextInput
        style={style.container}
        onChangeText={onChangeText}
        value={value}
      />
    </>
  );
};
export default CustomTextInput;
