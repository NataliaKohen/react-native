import ThemedView from '@/presentation/shared/ThemedView';

import { useState } from 'react';
import { View, Text } from 'react-native';

import { Switch } from 'react-native';
import ThemedCard from '../../presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: true,
    isHappy: false,
  });

  return (
    <ThemedView margin>
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        /> */}
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-4"
        />
        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className="mb-4"
        />
        <ThemedSwitch
          text="Contento"
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className="mb-4"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
