import React, { useState } from 'react';
import axios from "axios";
import { Text, StyleSheet, TouchableOpacity, View, Image, Platform, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';

import XrayResultCard from '../components/UserScreen/XrayResultCard';

export default function UploadXrayScreen() {
    const [selectedImage, setSelectedImage] = useState({ localUri: '' });
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [prediction, setPrediction] = useState("NORMAL");
    const [acc, setAcc] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };


    const handleUpload = async () => {

        if (selectedImage.localUri !== '') {

            //There is an error in ios platform
            const image_uri =  Platform.OS === 'ios' ? selectedImage.localUri.replace('file://', '') : selectedImage.localUri;

            const response = await fetch(image_uri);
            const blob = await response.blob();

            const formData = new FormData();
            formData.append('image', blob, "xray_image.jpg");
      
            setLoading(true);

            axios.post("https://pneumonia-prediction-sep.herokuapp.com/predict", formData)
                .then((result) => {
                    console.log(result);

                    const normalAcc = parseFloat(result.data.normal);
                    const pneumoniaAcc = parseFloat(result.data.pneumonia);

                    if (normalAcc < pneumoniaAcc) {
                        setPrediction("PNEUMONIA");
                        setAcc(pneumoniaAcc * 100)
                    } else {
                        setPrediction("NORMAL")
                        setAcc(normalAcc * 100)
                    }

                    setLoading(false);
                    setCompleted(true);
                    setShowResult(true);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    setIsError(true);
                    setCompleted(false);
                    setMessage("An error occured. Try Again Later");
                });

        } else {
            console.log("Select a file error message");
            setLoading(false);
            setIsError(true);
            setCompleted(false);
            setMessage("An error occured. Try Again Later");
        }
    };

    const handleDone = () => {
        setLoading(false);
        setIsError(false);
        setCompleted(false);
        setShowResult(false);
        setMessage('');
        setAcc(0);
        setSelectedImage({ localUri: '' });

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

                {isError &&
                    <View style={styles.msgView}>
                        <Text style={styles.instructions}>{message}</Text>
                        <TouchableOpacity onPress={handleDone} style={styles.button}>
                            <Icon name='done' color="#fff" />
                            <Text style={styles.buttonText}>&nbsp;&nbsp;Done</Text>
                        </TouchableOpacity>
                    </View>
                }

                <Image
                    source={{ uri: selectedImage.localUri }}
                    style={styles.thumbnail}
                />

                {loading &&
                    <View>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={styles.instructions}>Please wait. This will take some time.</Text>
                    </View>
                }

                {!loading && !completed &&
                    <TouchableOpacity onPress={handleUpload} style={styles.button}>
                        <Icon name='backup' color="#fff" />
                        <Text style={styles.buttonText}>&nbsp;&nbsp;Upload X-Ray</Text>
                    </TouchableOpacity>
                }

                {showResult && <XrayResultCard result={prediction} accuracy={acc} />}


                {completed &&
                    <TouchableOpacity onPress={handleDone} style={styles.button}>
                        <Icon name='done' color="#fff" />
                        <Text style={styles.buttonText}>&nbsp;&nbsp;Done</Text>
                    </TouchableOpacity>
                }

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

            {isError &&
                <View style={styles.msgView}>
                    <Text style={styles.instructions}>{message}</Text>
                    <TouchableOpacity onPress={handleDone} style={styles.button}>
                        <Icon name='done' color="#fff" />
                        <Text style={styles.buttonText}>&nbsp;&nbsp;Done</Text>
                    </TouchableOpacity>
                </View>
            }

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
        backgroundColor: '#73d9d3',
        width: "100%",
        padding: 5,
        margin: 5,
        marginBottom: 20,
    },
    msgView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

