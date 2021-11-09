import React, { memo, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';

import CustomBackground from '../components/Layout/CustomBackground';
import CustomTextInput from '../components/Layout/CustomTextInput';
import CustomButton from '../components/Layout/CustomButton';
import CustomHeader from '../components/Layout/CustomHeader';

import { theme } from '../shared/theme'
import { emailValidator, passwordValidator } from '../shared/utils';

import { Navigation } from '../constants/types';
import { API_URL } from '../shared/routes';

type Props = {
    navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const _onLoginPressed = () => {
        const emailError = emailValidator(email);
        const passwordError = passwordValidator(password);

        if (emailError || passwordError) {
            setEmailErr(emailError);
            setPasswordErr(passwordError);
            return;
        }

        const payload = {
            email,
            password,
        };

        fetch(`${API_URL}/login`, {
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

            <CustomHeader>Welcome back...</CustomHeader>

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

            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.label}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            {isError && <Text style={styles.errorText}>{message}</Text>}

            <CustomButton mode="contained" onPress={_onLoginPressed}>
                Login
            </CustomButton>

            <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </CustomBackground>
    );
};

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
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

export default memo(LoginScreen);