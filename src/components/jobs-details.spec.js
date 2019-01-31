import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {JobDetails} from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Test JobsListItem Component', () => {
  it('`JobDetails` exist and be a component', () => expect(JobDetails).toBeInstanceOf(Function));
});