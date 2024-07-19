import React, {useState} from 'react';
import {View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from '../Home';
import Surfing from '../surfing';
import hula from '../hula';
import volcano from '../volcano';

const BottomNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'surfing',
      title: 'Surfing',
      focusedIcon: 'album',
    },
    {
      key: 'hula',
      title: 'Hula',
      focusedIcon: 'history',
    },
    {
      key: 'vulcano',
      title: 'Vulcano',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
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
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default BottomNavigator;
