import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import successImg from '../../assets/success.png'
import { Copyright } from '../Copyright';

interface Props {
  onSendFeedback: () => void
}

export function Success({ onSendFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity
        onPress={onSendFeedback}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}