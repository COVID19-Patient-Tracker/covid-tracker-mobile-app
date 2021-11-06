import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import CustomBackground from '../components/Layout/CustomBackground';
import CustomButton from '../components/Layout/CustomButton';
import CustomTextInput from '../components/Layout/CustomTextInput';
import CustomHeader from '../components/Layout/CustomHeader';

import { theme } from '../shared/theme';
import { Navigation } from '../constants/types';
import {
  emailValidator,
  passwordValidator,
  idValidator,
  nicValidator,
} from '../shared/utils';
import {API_URL} from '../shared/routes';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [patient_id, setPatient_id] = useState('');
  const [nic, setNic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [patient_idErr, setPatient_idErr] = useState('');
  const [nicErr, setNicErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const _onSignUpPressed = () => {
    const patient_idError = idValidator(patient_id);
    const nicError = nicValidator(nic);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (emailError || passwordError || patient_idError || nicError) {
      setPatient_idErr(patient_idError)
      setNicErr(nicError);
      setEmailErr(emailError);
      setPasswordErr(passwordError);
      return;
    }

    const payload = {
      patient_id,
      nic,
      email,
      password,
    };

    fetch(`${API_URL}/app/V1/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            console.log("Error occured");
            console.log(jsonRes);
            setIsError(true);
            setMessage(jsonRes.exception);
          } else {
            //onLoggedIn(jsonRes.token);
            console.log("No error");
            setIsError(false);
            setMessage(jsonRes.exception);
            navigation.navigate('UserRoot');
          }
        } catch (err) {
          console.log(err);
        };
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <CustomBackground>
      <CustomHeader>Sign Up Here</CustomHeader>

      <CustomTextInput
        label="Patient ID"
        returnKeyType="next"
        value={patient_id}
        keyboardType="numeric"
        onChangeText={text => {
          setPatient_id(text);
          setPatient_idErr('');
          setIsError(false);
          setMessage('');
        }}
        error={!!patient_idErr}
        errorText={patient_idErr}
      />

      <CustomTextInput
        label="NIC"
        returnKeyType="next"
        value={nic}
        maxLength={11}
        onChangeText={text => {
          setNic(text);
          setNicErr('');
          setIsError(false);
          setMessage('');
        }}
        error={!!nicErr}
        errorText={nicErr}
      />

      <CustomTextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={text => {
          setEmail(text);
          setEmailErr('');
          setIsError(false);
          setMessage('');
        }}
        error={!!emailErr}
        errorText={emailErr}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <CustomTextInput
        label="Password"
        returnKeyType="done"
        value={password}
        maxLength={16}
        onChangeText={text => {
          setPassword(text);
          setPasswordErr('');
          setIsError(false);
          setMessage('');
        }}
        error={!!passwordErr}
        errorText={passwordErr}
        secureTextEntry
      />
      {isError && <Text style={styles.errorText}>{message}</Text>}

      <CustomButton mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </CustomButton>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </CustomBackground>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  errorText: {
    fontWeight: 'bold',
    color: theme.colors.error,
},
});

export default memo(RegisterScreen);
