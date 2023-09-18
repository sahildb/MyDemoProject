import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', marginHorizontal: 0}}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../src/assets/images/Vector.png')}
          style={styles.currImgStyle}>
          <Text style={styles.currTxtStyle}>Current Affairs</Text>
        </ImageBackground>
        <View style={styles.rowContainer}>
          <View style={styles.dateContainer}>
            <View style={styles.dateInnerContainer}>
              <Text style={styles.dateText}>11</Text>
              <Text style={styles.monthText}>Sept</Text>
            </View>
            <Text style={styles.timeText}>12:45 pm</Text>
          </View>
          <View style={styles.quizInfoContainer}>
            <Text style={styles.quizTitle}>Current Affairs Quiz</Text>
            <Text style={styles.languageText}>Language - English</Text>
          </View>
          <View>
            <Image
              source={require('../src/assets/images/arrow.png')}
              style={styles.arrowImage}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
          }}>
          <View>
            <Text style={styles.accuracyText}>Accuracy</Text>

            <View style={styles.flagContainer}>
              <Image
                source={require('../src/assets/images/flag.png')}
                style={styles.flagImage}
              />
              <Text style={styles.flagText}>Planned</Text>
              <Image
                source={require('../src/assets/images/doneImg.png')}
                style={styles.doneImage}
              />
              <Text style={styles.flagText}>Achieved</Text>
            </View>
            <View style={styles.accuracyRow}>
              <Text style={styles.PlannedPer}>80%</Text>
              <Image
                source={require('../src/assets/images/rightArrow.png')}
                style={styles.rightArrow}
              />
              <Text
                style={{color: '#1B1144', fontWeight: '700', marginRight: 25}}>
                60%
              </Text>
            </View>
          </View>
          <View
            style={{
              marginRight: 30,
            }}>
            <Text style={{fontWeight: '700', color: '#6D6886', marginLeft: 26}}>
              Completion Time
            </Text>
            <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 22}}>
              <Image
                source={require('../src/assets/images/flag.png')}
                style={{height: 20, width: 20}}
              />
              <Text style={styles.flagText}>Planned</Text>
              <Image
                source={require('../src/assets/images/doneImg.png')}
                style={{height: 15, width: 15, marginLeft: 5}}
              />
              <Text style={styles.flagText}>Achieved</Text>
            </View>
            <View style={styles.lastContainer}>
              <Text style={styles.PlannedMin}>15m</Text>
              <Image
                source={require('../src/assets/images/rightArrow.png')}
                style={styles.rightArrow}
              />
              <Text style={styles.AchievedMin}>10m</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.infoLabel}>Entry Fee</Text>
            <Text style={styles.infoValue}>Rs.15</Text>
          </View>
          <View>
            <Text style={styles.infoLabel}>No of Qs.</Text>
            <Text style={styles.infoValue}>10</Text>
          </View>
          <View>
            <Text style={styles.infoLabel}>Amount Earned</Text>
            <Text style={styles.amountEarned}>Rs.21</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  currImgStyle: {
    height: 30,
    width: 150,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currTxtStyle: {
    color: '#212121',
    fontSize: 16,
    fontWeight: '400',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: '#F0EDFF',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  dateInnerContainer: {
    flexDirection: 'row',
  },
  dateText: {
    fontSize: 20,
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
  },
  quizInfoContainer: {
    marginRight: 55,
  },
  quizTitle: {
    marginTop: 10,
    color: '#1B1144',
    fontWeight: '700',
    fontSize: 14,
  },
  languageText: {
    marginTop: 10,
    color: '#6D6886',
    fontWeight: '400',
    fontSize: 12,
  },
  arrowContainer: {
    marginRight: 0,
  },
  arrowImage: {
    height: 20,
    width: 15,
    alignSelf: 'center',
    marginTop: 15,
  },
  accuracyContainer: {
    flex: 1,
  },
  accuracyText: {
    fontWeight: '700',
    color: '#6D6886',
    marginLeft: 10,
  },
  flagContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  flagImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginLeft: 7,
  },
  doneImage: {
    height: 15,
    width: 15,
    marginLeft: 5,
  },
  flagText: {
    marginLeft: 5,
    color: '#6D6886',
  },
  accuracyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accuracyValue: {
    color: '#1B1144',
    fontWeight: '700',
  },
  completionTimeContainer: {
    flex: 1,
    marginRight: 30,
  },
  completionTimeText: {
    fontWeight: '700',
    color: '#6D6886',
    marginLeft: 26,
  },
  completionTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  completionTimeValue: {
    color: '#1B1144',
    fontWeight: '700',
  },
  rightArrow: {
    height: 10,
    width: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    alignItems: 'center',
  },
  PlannedMin: {
    color: '#1B1144',
    fontWeight: '700',
    marginLeft: 48,
  },
  PlannedPer: {
    color: '#1B1144',
    fontWeight: '700',
    marginLeft: 34,
  },
  AchievedMin: {
    color: '#1B1144',
    fontWeight: '700',
    marginRight: 28,
  },
  lastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoLabel: {
    color: '#6D6886',
    fontWeight: '400',
  },
  infoValue: {
    color: '#000000',
    fontWeight: '700',
    marginTop: 5,
  },
  amountEarned: {
    color: '#0AA866',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 5,
  },
});
