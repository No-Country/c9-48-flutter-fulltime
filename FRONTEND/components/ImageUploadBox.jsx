import { React, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  }
};

const ImageUploadBox = () => {
  const [imageData, setImageData] = useState(null);

  const openGallery = async () => {
    const response = await launchImageLibrary(options);
    if (!response.didCancel && !response.errorCode) {
      setImageData(response.assets[0].uri);
    }
  };

  return (
    <View style={{ height: 150, width: 150, backgroundColor: '#FF5E5E', marginHorizontal: 20, justifyContent: 'center' }}>
      {imageData ? <Image source={{ uri: imageData }} style={{ height: '100%', width: '100%' }} /> : (
        // <View>
        <TouchableOpacity 
        style={{height: 150, width: 150, justifyContent: 'center'}}
        onPress={openGallery}>
          <Text style={{ alignSelf: 'center' , color: 'white'}}>Sube una foto</Text>
        </TouchableOpacity>
        // <View/>
      )}
    </View>
  );
};

export default ImageUploadBox;
