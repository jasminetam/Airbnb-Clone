import { shallow } from 'enzyme';
import React from 'react';
import Banner from '../components/Banner';

describe('Banner test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Banner {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Banner component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect components-Banner is rendered', () => {
    const wrapper = setup();
    const Banner = findJSXByAttr('components-Banner', wrapper);
    expect(Banner.length).toBe(1);
  });
});
