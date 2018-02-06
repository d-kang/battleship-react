import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Boards from '../Boards';
import BoardMap from '../BoardMap';
import { createBoard } from '../../helpers';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  player: createBoard(),
  opponent: createBoard()
};

describe('Boards', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Boards
        {...props}
      />
    );
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