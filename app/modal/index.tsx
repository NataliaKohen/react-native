import ThemeButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView margin>
      <Link asChild href="/modal/modal-window" className="mx-4">
        <Text className="text-light-text dark:text-dark-text my-2 text-xl">
          Abrir Modal
        </Text>
      </Link>
      <ThemeButton
        onPress={() => router.push('/modal/modal-window')}
        className="mx-4"
      >
        Abrir otro modal
      </ThemeButton>
    </ThemedView>
  );
};
export default ModalScreen;
