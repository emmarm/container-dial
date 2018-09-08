import React from 'react';
import { shallow } from 'enzyme';

import GridList from '../../components/GridList';

describe('GridList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<GridList />);
    expect(wrapper).toMatchSnapshot();
  });
});
