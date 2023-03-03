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
    <View style={{ height: 150, width: 150, backgroundColor: 'grey', marginHorizontal: 20, justifyContent: 'center' }}>
      {imageData ? <Image source={{ uri: imageData }} style={{ height: '100%', width: '100%' }} /> : (
        <TouchableOpacity onPress={openGallery}>
          <Text style={{ alignSelf: 'center' }}>Select an image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageUploadBox;
