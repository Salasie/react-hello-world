import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

import Label from './Label.jsx';

describe('<Label/>', function () {
  it('should have a div', function () {
    const wrapper = shallow(<Label/>);
    expect(wrapper.find('div')).to.have.length(1);
  })
});