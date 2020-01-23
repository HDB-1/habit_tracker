import React from 'react'
import { shallow, mount, render } from 'enzyme'
import accountOverview from "../src/containers/AccountOverview"
import Tasks from '../src/components/Tasks/Tasks'
import waitUntil from "async-wait-until"; // For async testing of setState functions.
import regeneratorRuntime from 'regenerator-runtime';
import AddActivity from '../src/components/AddActivity/AddActivity';

let userInfo = {fn: 'text', ln: 'text'}
describe("shallow AccountOverview", () => {
    let wrapper;
    let displayAddActivityComponentMock = jest.fn()

    beforeEach(() => (wrapper = shallow(<accountOverview userInfo={userInfo}/>)))
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("displayAddActivityComponent is called on click of add activity button", () => {
        wrapper.find('button').simulate('click');
        expect(displayAddActivityComponentMock).toHaveBeenCalled();
    })
    it('addActivity component is rendered when state of displayAddActivitycomponent is true',
    async () => {
        wrapper.setState({displayAddActivityComponent: true})
        await waitUntil(() => wrapper.instance().state.displayAddActivityComponent);
        expect(wrapper.containsMatchingElement(<AddActivity />)).toEqual(true)
    })
    it('addActivity button changes state correctly',
    async () => {
        wrapper.instance().displayAddActivityComponent()
        await waitUntil(() => wrapper.instance().state.displayAddActivityComponent)
        expect(wrapper.instance().state.displayAddActivityComponent).toEqual(true)
    })

})

describe('mounted AccountOverview', () => {
    let wrapper;
    let allActivities = [{
        username: 'jszrt',
        activityName: 'tennis',
        frequency: 'monthly',
        completed: false,
        isPriority: false,
        lastCompleted: '2019-12-16T14:34:43.432Z',
        streak: 0
    }]
    let displayAddActivityComponentMock = jest.fn()

    beforeEach(() => (wrapper = mount(<accountOverview userInfo={userInfo}/>)))
    it('Tasks component should only be rendered if activities are currently held in state',
    async () => {
        expect(wrapper.find(<Tasks />).length).toEqual(0)
        wrapper.setState({allActivities: allActivities})
        await waitUntil(() => wrapper.instance().state.allActivities);
        expect(wrapper.find(<Tasks />).length).toEqual(1);
    })
})





