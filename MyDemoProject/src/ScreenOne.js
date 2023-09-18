import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import Card2 from './Card2';

const ScreenOne = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#1F3876', flex: 0.32}}>
        <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
          <Image
            source={require('../src/assets/images/arrowLeft.png')}
            style={{height: 20, width: 20}}
          />
          <Text
            style={{
              color: '#FFFFFF',
              marginLeft: 35,
              fontSize: 16,
              fontWeight: '700',
            }}>
            InstaQuiz Result Summary
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 40,
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../src/assets/images/star.png')}
            style={{height: 45, width: 45}}
          />

          <View style={{flex: 0.8}}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: '700',
              }}>
              Amount Won
            </Text>
            <Text
              style={{
                color: '#FBC343',
                fontSize: 36,
                fontWeight: '700',
              }}>
              ₹30
            </Text>
          </View>
          <View style={{marginTop: 20, marginRight: 30}}>
            <Text
              style={{
                color: '#AFA6D7',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Entry Fee
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: '700',
                alignSelf: 'flex-end',
              }}>
              Rs.15
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#D2CBEE',
              fontWeight: '400',
              fontSize: 12,
            }}>
            You won 2x of your entry fee
          </Text>
          <Image
            source={require('../src/assets/images/infocircle.png')}
            style={{height: 16, width: 16, marginLeft: 5}}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 35}}>
          <Card2 />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({});
