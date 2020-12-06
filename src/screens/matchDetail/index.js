import React from 'react';
import {Text, Button} from 'react-native';
import Layout from 'components/layout';

const MatchDetail = ({navigation, route}) => (
  <Layout>
    <Text>{route.params.match.name} İstatistikleri</Text>
    <Button title="Geri" onPress={() => navigation.goBack()} />
  </Layout>
);
export default MatchDetail;
