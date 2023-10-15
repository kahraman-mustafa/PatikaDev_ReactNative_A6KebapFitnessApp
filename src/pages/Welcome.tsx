import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {Colors} from '../themes/colors';

const WelcomeScreen = ({navigation}) => {
  const goToMemberSign = () => {
    navigation.navigate('MemberSignScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.on_surface,
    margin: 10,
  },
});
