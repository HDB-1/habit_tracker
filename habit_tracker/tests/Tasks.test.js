import React from 'react';
import { shallow } from 'enzyme';
import Tasks from '../src/components/Tasks/Tasks';
import Task from '../src/components/Task/Task';

describe('shallow Tasks', () => {
    let wrapper;
    const activitiesArray = [{
        username: 'placeholder',
        activityName: 'placeholder',
        frequency: 'placeholder',
        completed: false,
        isPriority: true,
        lastCompleted: 'placeholder',
        streak: 0
      }]

    beforeEach(() => (wrapper = shallow(<Tasks activitiesArray={activitiesArray}/>)))
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})