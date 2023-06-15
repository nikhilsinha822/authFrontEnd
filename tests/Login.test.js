import React from 'react';
import renderer from 'react-test-renderer';

import Login from '..\src\component\Login.js';

describe('<Login />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Login />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });