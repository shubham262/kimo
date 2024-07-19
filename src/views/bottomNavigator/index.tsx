import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BottomNavigation,
  PaperProvider,
  MD3LightTheme,
} from 'react-native-paper';
import Home from '../Home';
import Surfing from '../surfing';
import hula from '../hula';
import volcano from '../volcano';
import HomeFocused from '../../assets/svg/HomeFocused';
import SurfingIcon from '../../assets/svg/Surfing';
import UnfocusedHulaIcon from '../../assets/svg/UnfocusedHulaIcon';
import UnfocusedVulocanoIcon from '../../assets/svg/UnfocusedVulocanoIcon';
import FocusedSurfing from '../../assets/svg/focusedSurfing';
import FocusedVulcano from '../../assets/svg/FocusedVulcano';
import FocusedHulaIcon from '../../assets/svg/FocusedHuluIcon';
import UnfocusedHomeIcon from '../../assets/svg/UnfocusedHome';

const theme = {
  ...MD3LightTheme,
  dark: false,
};

const BottomNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: HomeFocused,
      unfocusedIcon: UnfocusedHomeIcon,
    },
    {
      key: 'surfing',
      title: 'Surfing',
      focusedIcon: FocusedSurfing,
      unfocusedIcon: SurfingIcon,
    },
    {
      key: 'hula',
      title: 'Hula',
      focusedIcon: FocusedHulaIcon,
      unfocusedIcon: UnfocusedHulaIcon,
    },
    {
      key: 'vulcano',
      title: 'Vulcano',
      focusedIcon: FocusedVulcano,
      unfocusedIcon: UnfocusedVulocanoIcon,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    surfing: Surfing,
    hula: hula,
    vulcano: volcano,
  });

  return (
    <View style={{flex: 1}}>
      <PaperProvider
        theme={{
          ...theme,
          colors: {secondaryContainer: 'transparent'},
        }}>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
          activeColor="rgba(0, 128, 128, 1)"
          barStyle={styles.bottomNavigationStyling}
          compact={true}
        />
      </PaperProvider>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  bottomNavigationStyling: {
    backgroundColor: 'rgba(255, 255, 255, 1)', // iOS shadow properties
    shadowColor: 'rgba(7, 56, 56, 0.8)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    // Android shadow properties
    elevation: 8,
  },
});
