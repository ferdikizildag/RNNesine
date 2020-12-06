import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import axios from 'axios';
import style from './style';
import Layout from 'components/layout';
import {AppContext} from 'context';

const MatchList = ({navigation}) => {
  const [bultenData, setBultenData] = useState([]);
  const {basket} = useContext(AppContext);

  const addBasket = (match, ratio) => {
    basket.update({
      id: match.id,
      name: match.name,
      ratio: ratio,
    });
  };

  const isRatioSelected = (match, ratio) => {
    const existBasketItem = basket.get.find(
      (item) => item.id === match.id && item.ratio === ratio,
    );
    return existBasketItem ? true : false;
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/matches')
      .then((response) => setBultenData(response.data));
  }, []);

  return (
    <Layout style={style.container}>
      <Button title="Basket" onPress={() => navigation.navigate('Basket')} />
      <ScrollView>
        {bultenData.map((item, index) => (
          <View key={index}>
            <View style={style.leagueHeader}>
              <View style={style.leagueNameContainer}>
                <Image
                  style={style.flag}
                  source={{
                    uri: item.flag,
                  }}
                />
                <Text style={style.leagueName}>{item.leagueName}</Text>
              </View>
              <Text style={style.matchDate}>{item.date}</Text>
            </View>
            {item.matches.map((match, key) => (
              <View key={key}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Detail', {match: match})}>
                  <Text style={style.matchName}>{match.name}</Text>
                </TouchableOpacity>
                <View style={style.ratioTitleContainer}>
                  <View style={style.ratioTitleItem}>
                    <Text style={style.ratioTitleItemText}>MS 1</Text>
                  </View>
                  <View style={style.ratioTitleItem}>
                    <Text style={style.ratioTitleItemText}>MS 0</Text>
                  </View>
                  <View style={style.ratioTitleItem}>
                    <Text style={style.ratioTitleItemText}>MS 2</Text>
                  </View>
                  <View style={style.ratioTitleItem}>
                    <Text style={style.ratioTitleItemText}>2,5 Alt</Text>
                  </View>
                  <View style={style.ratioTitleItem}>
                    <Text style={style.ratioTitleItemText}>2,5 Üst</Text>
                  </View>
                </View>
                <View style={style.ratioTitleContainer}>
                  <TouchableOpacity
                    style={[
                      style.ratioItem,
                      isRatioSelected(match, match.ratios.ms1) &&
                        style.ratioItemSelected,
                    ]}
                    onPress={() => addBasket(match, match.ratios.ms1)}>
                    <Text style={style.ratioItemText}>{match.ratios.ms1}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      style.ratioItem,
                      isRatioSelected(match, match.ratios.ms0) &&
                        style.ratioItemSelected,
                    ]}
                    onPress={() => addBasket(match, match.ratios.ms0)}>
                    <Text style={style.ratioItemText}>{match.ratios.ms0}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      style.ratioItem,
                      isRatioSelected(match, match.ratios.ms2) &&
                        style.ratioItemSelected,
                    ]}
                    onPress={() => addBasket(match, match.ratios.ms2)}>
                    <Text style={style.ratioItemText}>{match.ratios.ms2}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      style.ratioItem,
                      isRatioSelected(match, match.ratios.alt) &&
                        style.ratioItemSelected,
                    ]}
                    onPress={() => addBasket(match, match.ratios.alt)}>
                    <Text style={style.ratioItemText}>{match.ratios.alt}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      style.ratioItem,
                      isRatioSelected(match, match.ratios.ust) &&
                        style.ratioItemSelected,
                    ]}
                    onPress={() => addBasket(match, match.ratios.ust)}>
                    <Text style={style.ratioItemText}>{match.ratios.ust}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};
export default MatchList;
