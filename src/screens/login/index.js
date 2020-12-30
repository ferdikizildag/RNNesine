import React, {useState} from 'react';
import {View} from 'react-native';
import Layout from 'components/layout';
import CustomTextInput from 'components/customTextInput';
import Button from 'components/button';
import style from './style';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPasswordChange] = useState('');
  const submit = () => {
    console.log(userName);
    console.log(password);
  };
  const userNameChange = (text) => {
    setUserName(text);
  };

  const passwordChange = (text) => {
    setPasswordChange(text);
  };
  return (
    <Layout>
      <View style={style.container}>
        <CustomTextInput onChange={userNameChange} label="E-posta" />
        <CustomTextInput onChange={passwordChange} label="Şifre" />
        <Button
          onPress={submit}
          title="Giriş Yap"
          disabled={!userName || !password}
        />
      </View>
    </Layout>
  );
};

export default Login;
