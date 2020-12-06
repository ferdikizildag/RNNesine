import React, {useContext} from 'react';
import {Text, Button, View} from 'react-native';
import Layout from 'components/layout';
import {AppContext} from 'context';
import style from './style';

const Basket = ({navigation}) => {
  const {basket} = useContext(AppContext);
  const renderTotalRatio = () => {
    let total = 1;
    basket.get.map((item) => {
      total *= Number(item.ratio);
    });
    return total.toFixed(2);
  };
  return (
    <Layout>
      <View style={style.container}>
        {basket.get.map((item, key) => (
          <View key={key} style={style.couponRow}>
            <Text>{item.name}</Text>
            <Text>{item.ratioName}</Text>
            <Text>{item.ratio}</Text>
          </View>
        ))}
        <View style={style.couponRow}>
          <Text>Toplam</Text>
          <Text>{basket.get.length > 0 ? renderTotalRatio() : '0.00'}</Text>
        </View>
        <Button title="Oyna" onPress={() => alert('Kuponunuz oynandı.')} />
      </View>
    </Layout>
  );
};

export default Basket;
