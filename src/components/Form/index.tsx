import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { captureScreen } from 'react-native-view-shot'
import FileSystem from 'expo-file-system'

import { styles } from './styles';
import { theme } from '../../theme';
import { FeedbackType } from '../Widget';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { api } from '../../libs/api';

interface Props {
  feedbackType: FeedbackType
  onCancel: () => void
  onFeedbackSent: () => void
}

export function Form({ feedbackType, onCancel, onFeedbackSent }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState("")
  const [isSending, setIsSending] = useState(false)

  const feedbackInfo = feedbackTypes[feedbackType]

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }

  function handleRemove() {
    setScreenshot(null)
  }

  async function handleSendFeedback() {
    if (isSending) {
      return
    }

    setIsSending(true)

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot,
        comment
      })

      onFeedbackSent()
    }
    catch (err) {
      console.log(err)
    }
    finally {
      setIsSending(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancel}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={ feedbackInfo.image }
            style={styles.image}
          />
          <Text style={styles.title}>
            { feedbackInfo.title }
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleRemove}
          screenshot={screenshot}
        />

        <Button
          onPress={handleSendFeedback}
          isLoading={isSending}
        />
      </View>
    </View>
  );
}