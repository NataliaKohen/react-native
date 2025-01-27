import {
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
  Animated,
} from 'react-native';
import React, { useState } from 'react';
import useAnimation from '@/hooks/useAnimation';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
  const [isLoading, setisLoading] = useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{
            position: 'absolute',
          }}
          color="grey"
          size={30}
        />
      )}

      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({});
          setisLoading(false);
        }}
      />
    </View>
  );
};

export default FadeInImage;
