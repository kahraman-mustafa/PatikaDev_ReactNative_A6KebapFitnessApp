import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from '../themes/colors';

const MemberResult = ({route}) => {
  const {user} = route.params;

  return (
    <SafeAreaView>
      <Text style={styles.message}>Kayıt Tamamlandı</Text>
      <Text style={styles.label}>Üye Adı: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
      <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
      <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
      <Text style={styles.label}>Üye Memleketi: {user.userHometown}</Text>
    </SafeAreaView>
  );
};

export default MemberResult;

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    color: Colors.tertiary,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: Colors.primary,
  },
});
