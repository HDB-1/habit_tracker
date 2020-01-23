import React from 'react';
import { shallow } from 'enzyme';
import Task from '../src/components/Task/Task';

describe("shallow Task", () => {
    let wrapper;
    let activity={
        username: 'placeholder',
        activityName: 'placeholder',
        frequency: 'placeholder',
        completed: false,
        isPriority: true,
        lastCompleted: 'placeholder',
        streak: 0
      }

    beforeEach(() => (wrapper = shallow(<Task activity={activity}/>)))
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})