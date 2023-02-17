import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {ImagePicker} from 'react-native-image-picker';

const ImageUploadBox = () => {
    const [image, setImage] = useState(null);

    const handleChoosePhoto = () => {
        ImagePicker.launchImageLibrary({}, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setImage(response.uri);
            }
        });
    };

    return (
        <View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <TouchableOpacity onPress={handleChoosePhoto}>
                <View style={{ width: 200, height: 200, backgroundColor: '#eee' }}>
                    <Text>Select Photo</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ImageUploadBox;