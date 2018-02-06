import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Button from '../Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  let wrapper;

  const minProps = {
    buttonText: 'Hello World',
    onClick: () => {},
  };

  beforeEach(() => {
    wrapper = shallow(
      <Button
        {...minProps}
      />
    );
  });

  it('renders Button without exploding', () => {
    expect(wrapper.length).toBe(1);
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