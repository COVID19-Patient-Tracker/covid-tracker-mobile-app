import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, ScrollView, ImagePickerResult, Platform } from 'react-native';

import {ImagePickerResultType} from '../constants/datatypes';

import CustomButton from '../components/Layout/CustomButton';

import { theme } from '..//shared/theme';
import { Navigation } from '../constants/types';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-elements'
import axios from "axios";

type Props = {
    navigation: Navigation;
};

export default function UploadXrayScreen() {
    const [selectedImage, setSelectedImage] = useState({ localUri: '' });
    const [image, setImage] = useState<Blob >();

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
       
    };

    const handleUpload =  () => {
        if (selectedImage.localUri !== '' && image !== null) {
            console.log(selectedImage.localUri);
            const formData = new FormData()
            formData.append('image', Platform.OS === 'ios' ? selectedImage.localUri.replace('file://', '') : selectedImage.localUri, "123");
            //There is an error check later
            // axios.post("https://pneumonia-prediction-sep.herokuapp.com/predict",formData)
            // .then((result) => {
            //     console.log(result);
            //     const normalAcc = parseFloat(result.data.normal);
            //     const pneumoniaAcc = parseFloat(result.data.pneumonia)
            //     if(normalAcc < pneumoniaAcc){
                    
            //     }else{
                    
            //     }
            // });

        } else {
            console.log("Select a file error message");
        }
    };


    if (selectedImage.localUri !== '') {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.instructions}>
                        This model is a self-diagnosis that is meant to help individials to get an prediction of the
                        covid pneumonia level according to the chest X-ray and seek appropriate medical treatments accordingly.
                    </Text>
                </View>
                <Image
                    source={{ uri: selectedImage.localUri }}
                    style={styles.thumbnail}
                />

                <TouchableOpacity onPress={handleUpload} style={styles.button}>
                    <Icon name='backup' color="#fff" />
                    <Text style={styles.buttonText}>&nbsp;&nbsp;Upload X-Ray</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.instructions}>
                    This model is a self-diagnosis that is meant to help individials to get an prediction of the
                    covid pneumonia level according to the chest X-ray and seek appropriate medical treatments accordingly.
                </Text>
            </View>

            <Text style={styles.instructions}>
                Please upload a clear image of your chest X-ray.
            </Text>

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Icon name='add' color="#fff" />
                <Text style={styles.buttonText}>&nbsp;Select X-Ray</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    instructions: {
        fontSize: 16,
        marginHorizontal: 15,
        marginBottom: 10,
        lineHeight: 22,
    },
    button: {
        backgroundColor: '#066c66',
        padding: 12,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    info: {
        backgroundColor: '#5bf5ec',
        width: "100%",
        padding: 5,
        margin: 5,
        marginBottom: 20,
    },
});

