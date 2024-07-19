import BottomNavigator from './src/views/bottomNavigator';
import {ComponentType} from 'react';

type routesObjectType = {
  name: string;
  component: ComponentType<any>;
  options?: {
    headerShown?: boolean;
  };
};

const routes: Array<routesObjectType> = [
  {name: 'Main', component: BottomNavigator, options: {headerShown: false}},
];
export default routes;
