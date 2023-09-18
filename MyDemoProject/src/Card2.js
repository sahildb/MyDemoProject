import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Progress from './Progress';

const Card2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.dateContainer}>
          <View style={styles.dateInnerContainer}>
            <Text style={styles.dateText}>28</Text>
            <Text style={styles.monthText}>Oct</Text>
          </View>
          <Text style={styles.timeText}>12:45 pm</Text>
        </View>
        <View style={styles.quizInfoContainer}>
          <Text style={styles.quizTitle}>Current Affairs Quiz</Text>
          <Text style={styles.languageText}>Language - English</Text>
        </View>
        <Image
          source={require('../src/assets/images/share.png')}
          style={styles.shareImage}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 30,
          marginTop: 10,
        }}>
        <Text style={{color: '#6D6886', fontSize: 12}}>Accuracy Achieved</Text>
        <Text style={{marginRight: 50, color: '#6D6886', fontSize: 12}}>
          Completion Time
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginTop: 15, marginLeft: 30}}>
          <Progress barWidth={120} indexValForProg={1} indexValForFlag={4} />
        </View>
        <View style={{marginTop: 15, marginLeft: 60}}>
          <Progress barWidth={120} indexValForProg={1} indexValForFlag={3} />
        </View>
      </View>

      <View style={{marginHorizontal: 30, marginBottom: 10, marginTop: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#E7ECFF',
            padding: 15,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#4E69FF', fontWeight: '700', fontSize: 16}}>
            Play more 1-on-1 Quiz
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card2;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,

    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  dateContainer: {
    backgroundColor: '#D7FFE7',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  dateInnerContainer: {
    flexDirection: 'row',
  },
  dateText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  monthText: {
    alignSelf: 'flex-end',
    fontWeight: '400',
    color: '#000000',
    marginLeft: 2,
    fontSize: 14,
  },
  timeText: {
    marginTop: 3,
    color: '#404040',
    fontWeight: '400',
    fontSize: 10,
  },
  quizInfoContainer: {
    flex: 0.9,
  },
  quizTitle: {
    marginTop: 5,
    color: '#000000',
    fontWeight: '400',
    fontSize: 16,
  },
  languageText: {
    marginTop: 6,
    color: '#6D6886',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 1,
  },
  shareImage: {
    height: 22,
    width: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginRight: 10,
  },
});
