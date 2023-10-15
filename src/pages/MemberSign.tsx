import React, {useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

  const handleSubmit = () => {
    if (!userName || !userSurname || !userAge || !userMail || !userHometown){
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };

    navigation.navigate('MemberResultScreen', {user});
  };

  return (
    <SafeAreaView>
      <View>
        <Input
          label="Üye Adı: "
          placeholder="Üye adını giriniz..."
          onChaneText={setUserName}
        />
        <Input
          label="Üye Soyadı: "
          placeholder="Üye soyadını giriniz..."
          onChaneText={setUserSurname}
        />
        <Input
          label="Üye Yaşı: "
          placeholder="Üye yaşını giriniz..."
          onChaneText={setUserAge}
        />
        <Input
          label="Üye E-posta: "
          placeholder="Üye e-postasını giriniz..."
          onChaneText={setUserMail}
        />
        <Input
          label="Üye Memleketi: "
          placeholder="Üye memleketini giriniz..."
          onChaneText={setUserHometown}
        />
        <Button text="Kaydı Tamamla" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default MemberSign;
