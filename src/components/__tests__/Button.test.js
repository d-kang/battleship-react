import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Button from '../Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Button
        buttonText={'Hello World'}
        onClick={()=>{}}
      />
    );
  });

  it('should have a `button` element', () => {
    console.log('>>>', wrapper.find('button'))
    expect(
      wrapper.containsMatchingElement(
        <button>Hello World</button>
      )
    ).toBe(true);
  });

  it('should have one `button` element', () => {
    expect(
      wrapper.find('button')
    ).toHaveLength(1);
  });

});