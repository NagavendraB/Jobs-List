import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {JobsList} from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Test JobsList Component', () => {
  it('`JobsList` exist and be a component', () => expect(JobsList).toBeInstanceOf(Function));
  
  it('`JobsList` should renders the list with all elements in the provided array', () => {
    const listData = [
      {
        id: 1,
        title: "Frontend Developer",
        description: "You have 3+ years experience as a UX & UI Designer, You know the common design tools and services (we mainly use Figma), Your excellent communication and presentation skills will help you collaborate with team members from a wide range of countries and cultures   You have experience in working in an agile environment and the ability to adapt quickly to changing product priorities    Knowledge of frontend technologies (e.g., CSS, HTML, JS), experience with prototyping tools or motion design is a plus",    
        employment_type: "full_time"
      },
      {
        id: 2,
        title: "Backend Developer",
        description: "You have 6+ years experience as a SQL, ORACLE, You know the common design tools and services (we mainly use Figma), Your excellent communication and presentation skills will help you collaborate with team members from a wide range of countries and cultures   You have experience in working in an agile environment and the ability to adapt quickly to changing product priorities    Knowledge of BACKEND technologies (e.g., SQL), experience with prototyping tools or motion design is a plus",
        employment_type: "freelancer"
      },
    ];
    const component = mount(<JobsList jobs={listData} />);
    const results = component.find('ul').children();
    expect(results.length).toBe(listData.length);
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const component = mount((<JobsList jobs={[{title: 'FE Developer', employment_type: 'Full Time'}]} onClick={mockCallBack} />));
    component.find('a').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});