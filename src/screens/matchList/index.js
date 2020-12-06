import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import axios from 'axios';
import style from './style';
import Layout from 'components/layout';
import {AppContext} from 'context';
import {FlatList} from 'react-native-gesture-handler';

const MatchList = ({navigation}) => {
  const [bultenData, setBultenData] = useState([]);
  const {basket} = useContext(AppContext);

  const addBasket = useCallback(
    (match, ratio, ratioName) => {
      basket.update({
        id: match.id,
        name: match.name,
        ratio: ratio,
        ratioName: ratioName,
      });
    },
    [basket],
  );

  const isRatioSelected = useCallback(
    (match, ratio) => {
      const existBasketItem = basket.get.find(
        (item) => item.id === match.id && item.ratio === ratio,
      );
      return existBasketItem ? true : false;
    },
    [basket.get],
  );

  useEffect(() => {
    axios
      .get('http://localhost:3000/matches')
      .then((response) => setBultenData(response.data));
  }, []);

  const renderItem = useCallback(
    ({item}) => (
      <View>
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
                onPress={() => addBasket(match, match.ratios.ms1, 'MS 1')}>
                <Text
                  style={[
                    style.ratioItemText,
                    isRatioSelected(match, match.ratios.ms1) &&
                      style.ratioItemTextSelected,
                  ]}>
                  {match.ratios.ms1}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  style.ratioItem,
                  isRatioSelected(match, match.ratios.ms0) &&
                    style.ratioItemSelected,
                ]}
                onPress={() => addBasket(match, match.ratios.ms0, 'MS 0')}>
                <Text
                  style={[
                    style.ratioItemText,
                    isRatioSelected(match, match.ratios.ms0) &&
                      style.ratioItemTextSelected,
                  ]}>
                  {match.ratios.ms0}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  style.ratioItem,
                  isRatioSelected(match, match.ratios.ms2) &&
                    style.ratioItemSelected,
                ]}
                onPress={() => addBasket(match, match.ratios.ms2, 'MS 2')}>
                <Text
                  style={[
                    style.ratioItemText,
                    isRatioSelected(match, match.ratios.ms2) &&
                      style.ratioItemTextSelected,
                  ]}>
                  {match.ratios.ms2}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  style.ratioItem,
                  isRatioSelected(match, match.ratios.alt) &&
                    style.ratioItemSelected,
                ]}
                onPress={() => addBasket(match, match.ratios.alt, 'ALT')}>
                <Text
                  style={[
                    style.ratioItemText,
                    isRatioSelected(match, match.ratios.alt) &&
                      style.ratioItemTextSelected,
                  ]}>
                  {match.ratios.alt}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  style.ratioItem,
                  isRatioSelected(match, match.ratios.ust) &&
                    style.ratioItemSelected,
                ]}
                onPress={() => addBasket(match, match.ratios.ust, 'ÜST')}>
                <Text
                  style={[
                    style.ratioItemText,
                    isRatioSelected(match, match.ratios.ust) &&
                      style.ratioItemTextSelected,
                  ]}>
                  {match.ratios.ust}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    ),
    [addBasket, isRatioSelected, navigation],
  );

  return (
    <Layout style={style.container}>
      <FlatList
        data={bultenData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={2}
      />
    </Layout>
  );
};
export default MatchList;
