import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Boards from '../Boards';
import BoardMap from '../BoardMap';
import { createBoard } from '../../helpers';

Enzyme.configure({ adapter: new Adapter() });



describe('Boards', () => {
  const minProps = {
    player: createBoard(),
    opponent: createBoard()
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Boards {...minProps} />
    );
  });

  it('renders Boards without exploding', () => {
    expect(wrapper.length).toBe(1);
  });

  it('renders two <BoardMap /> components', () => {
    expect(
      wrapper.find(BoardMap)
    ).toHaveLength(2);
  });

  it('should have one `div` element', () => {
    expect(
      wrapper.find('div')
    ).toHaveLength(1);
  });

});