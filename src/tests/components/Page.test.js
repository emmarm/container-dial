import React from 'react';
import { shallow } from 'enzyme';

import { Page } from '../../components/Page';

describe('Page component', () => {
  const props = {
    container: {
      name: 'Default',
      color: 'black'
    },
    theme: {
      primary: '#333',
      dark: '#000',
      light: '#fff'
    },
    background: {
      container: 'Default',
      image: {
        urls: {
          full: 'image.jpg'
        }
      }
    }
  };
  const wrapper = shallow(<Page {...props} />);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sets background to image if supplied in prop', () => {
    const bg = wrapper.find('.page');
    expect(bg.prop('style')).toEqual({
      backgroundImage: `url('${props.background.image.urls.full}')`
    });
  });

  it('sets background to theme color if no image supplied', () => {
    const background = { container: 'Default', image: undefined };
    const wrapper = shallow(
      <Page
        container={props.container}
        theme={props.theme}
        background={background}
      />
    );
    const bg = wrapper.find('.page');
    expect(bg.prop('style')).toEqual({
      backgroundImage: `linear-gradient(to bottom, ${props.theme.primary}, ${
        props.theme.primary
      })`
    });
  });

  it('sets title color to theme light', () => {
    const title = wrapper.find('.page__title');
    expect(title.prop('style')).toEqual({ color: props.theme.light });
  });

  it('sets title text to container name', () => {
    const title = wrapper.find('.page__title');
    expect(title.text()).toBe(props.container.name);
  });
});
