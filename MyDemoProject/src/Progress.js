import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Progress = ({barWidth, indexValForProg, indexValForFlag}) => {
  const separatorDist = barWidth / 5;
  const separatorHeight = 30;
  const percentage = (indexValForProg + 1) * 20;
  const percentageForFlag = (indexValForFlag + 1) * 20;

  return (
    <View style={{height: separatorHeight}}>
      <View
        style={{
          backgroundColor: '#EB8600',
          width: separatorDist * (indexValForProg + 1),
          height: 5,
          borderRadius: 100,
          marginTop: 11,
          zIndex: 2,
          position: 'absolute',
        }}
      />
      <View
        style={{
          backgroundColor: '#DCDCDC',
          width: barWidth,
          height: 5,
          borderRadius: 100,
          marginTop: 11,
          zIndex: 1,
        }}
      />
      <View
        style={{
          width: barWidth,
          flexDirection: 'row',
          height: 30,
          position: 'absolute',
          zIndex: 0,
        }}>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <View
              key={index}
              style={{
                borderColor:
                  indexValForProg === index
                    ? indexValForFlag === index
                      ? '#EB8600' // Apply this color when both conditions are true
                      : '#0AA866' // Apply this color when only indexValForProg condition is true
                    : indexValForFlag === index
                    ? '#EB8600' // Apply this color when only indexValForFlag condition is true
                    : '#CAD2E5', // Default color
                height: 25,
                position: 'absolute',
                left: separatorDist * (index + 1) - 3.5,
                borderRightWidth: 2,
              }}
            />
          ))}
      </View>
      {indexValForProg >= 0 && (
        <View
          style={{
            position: 'absolute',
            left: separatorDist * (indexValForProg + 1) - 10,
            bottom: 27,
            padding: 2,
            borderRadius: 4,
            zIndex: 3,
            marginLeft: -1,
          }}>
          <Image
            source={require('../src/assets/images/doneImg.png')}
            style={{height: 12, width: 12}}
          />
        </View>
      )}
      {indexValForProg >= 0 && (
        <View
          style={{
            position: 'absolute',
            left: separatorDist * (indexValForProg + 1) - 10,
            top: 30,
            padding: 2,
            borderRadius: 4,
            zIndex: 3,
            marginLeft: -3,
          }}>
          <Text
            style={{
              color: '#0AA866',
              fontSize: 10,
              fontWeight: '700',
            }}>
            {percentage}%
          </Text>
        </View>
      )}
      {indexValForFlag >= 0 && (
        <View
          style={{
            position: 'absolute',
            left: separatorDist * (indexValForFlag + 1) - 10,
            bottom: 27,
            padding: 2,
            borderRadius: 4,
            zIndex: 3,
            marginLeft: -5.1,
          }}>
          <Image
            source={require('../src/assets/images/flagImg.png')}
            style={{height: 12, width: 12}}
          />
        </View>
      )}
      {indexValForFlag >= 0 && (
        <View
          style={{
            position: 'absolute',
            left: separatorDist * (indexValForFlag + 1) - 10,
            top: 30,
            padding: 2,
            borderRadius: 4,
            zIndex: 3,
            marginLeft: -3,
          }}>
          <Text
            style={{
              color: '#EB8600',
              fontSize: 10,
              fontWeight: '700',
            }}>
            {percentageForFlag}%
          </Text>
        </View>
      )}
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {},
});
