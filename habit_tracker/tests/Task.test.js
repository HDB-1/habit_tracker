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
        lastCompleted: new Date(2020, 0, 22, 16, 23),
        streak: 0
    }

    beforeEach(() => (wrapper = shallow(<Task activity={activity}/>)))
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("completedBtn done should call markTaskAs... function when clicked", () => {
        let spy = jest.spyOn(wrapper.instance(), "markTaskAsCompleteAndUpdateStreak");
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('button').simulate("click");
        expect(spy).toHaveBeenCalledTimes(1)
    })
    
})