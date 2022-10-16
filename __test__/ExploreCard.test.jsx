import { shallow } from 'enzyme';
import React from 'react';
import ExploreCard from '../components/ExploreCard';

describe('ExploreCard test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<ExploreCard {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect ExploreCard component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect components-ExploreCard is rendered', () => {
    const wrapper = setup();
    const ExploreCard = findJSXByAttr('components-ExploreCard', wrapper);
    expect(ExploreCard.length).toBe(1);
  });
});
