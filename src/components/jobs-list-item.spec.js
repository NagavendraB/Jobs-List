import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {JobsListItem} from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Test JobsListItem Component', () => {
  it('`JobsListItem` exist and be a component', () => expect(JobsListItem).toBeInstanceOf(Function));

  it('`JobsListItem` element should render the list item ', () => {
    const component = mount(
      <JobsListItem item={{title: 'FE Developer', employment_type: 'Full Time'}} />
    );
    expect(component.find('.list-item')).toBeTruthy();
    expect(component.find('li')).toBeTruthy();
  });
});