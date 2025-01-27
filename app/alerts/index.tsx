import ThemedView from '@/presentation/shared/ThemedView';
import { Alert } from 'react-native';
import ThemedButton from '@/presentation/shared/ThemedButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
    ]);

  return (
    <SafeAreaProvider>
      <ThemedView margin className="flex  items-center">
        <ThemedButton className="my-5" onPress={createTwoButtonAlert}>
          2-Button Alert
        </ThemedButton>
        <ThemedButton onPress={createThreeButtonAlert}>
          3-Button Alert
        </ThemedButton>
      </ThemedView>
    </SafeAreaProvider>
  );
};

export default AlertsScreen;
