import React from 'react';
import renderer from 'react-test-renderer';

import Registartion from '..\src\component\Registartion.js';

describe('<Registartion />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Registartion />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });