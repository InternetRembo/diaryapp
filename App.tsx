import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import rootStore, {MSTContext} from './src/mst';
import {default as mapping} from './mapping.json';

import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
        <MSTContext.Provider value={rootStore}>
          <SafeAreaProvider>
            <StatusBar backgroundColor="#E9ECF2" barStyle="dark-content" />
            <AppNavigation />
          </SafeAreaProvider>
        </MSTContext.Provider>
      </ApplicationProvider>
    </>
  );
};

// if (__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
// }

export default App;
