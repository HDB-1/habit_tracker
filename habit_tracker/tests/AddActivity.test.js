import React from 'react';
import { shallow } from 'enzyme'
import AddActivity from '../src/components/AddActivity/AddActivity';
import waitUntil from "async-wait-until"; // For async testing of setState functions.
import regeneratorRuntime from 'regenerator-runtime';

describe("Shallow AddActivity", () => {
    let wrapper;
    let addActivityMock = jest.fn()

    beforeEach(() => wrapper = shallow(<AddActivity addNewActivity={addActivityMock} />));

    it("Should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("Should render 1 input element and 1 textarea", () => {
        expect(wrapper.find("input").length).toEqual(1);
        expect(wrapper.find("textarea").length).toEqual(1);
    })
    it("Should render a select element and a submit button", () => {
        expect(wrapper.find("select").length).toEqual(1);
        expect(wrapper.find("button").length).toEqual(1);
    })
    it("Submit button should call addNewActivity function", () => {
        expect(addActivityMock).not.toHaveBeenCalled();
        wrapper.find('button').simulate('click');
        expect(addActivityMock).toHaveBeenCalled();
    })
    it("HandleChangeOfActivityName function should update component state", async () => {
        wrapper.instance().handleChangeOfActivityName('testActivityName');
        await waitUntil(() => wrapper.instance().state.activityName);
        expect(wrapper.instance().state.activityName).toEqual('testActivityName');
    })
    it("HandleChangeOfFrequency function should update component state", async () => {
        wrapper.instance().handleChangeOfFrequency('testFrequencyValue');
        await waitUntil(() => wrapper.instance().state.frequency);
        expect(wrapper.instance().state.frequency).toEqual('testFrequencyValue');
    })
    it("togglePriority function should update component state, alternating between true and false",
    async () => {
        expect(wrapper.instance().state.isPriority).toBeFalsy();
        wrapper.instance().togglePriority();
        await waitUntil(() => wrapper.instance().state.isPriority);
        expect(wrapper.instance().state.isPriority).toEqual(true);
        wrapper.instance().togglePriority();
        await waitUntil(() => !wrapper.instance().state.isPriority);
        expect(wrapper.instance().state.isPriority).toBeFalsy();
    })
    it("Typing in the activityName input element should call handleChangeOfActivityName function", 
    () => {
        let spy = jest.spyOn(wrapper.instance(), "handleChangeOfActivityName");
        wrapper.instance().forceUpdate();  
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('[name="activityName"]').at(0)
        .simulate("change", { target: { value: "anything"}});
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it("Selecting a frequency should call handleChangeOfFrequency function", 
    () => {
        let spy = jest.spyOn(wrapper.instance(), "handleChangeOfFrequency");
        wrapper.instance().forceUpdate();  
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('[name="frequency"]').at(0)
        .simulate("change", { target: { value: "Weekly"}});
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it("Clicking the priority checkbox should call togglePriority function", 
    () => {
        let spy = jest.spyOn(wrapper.instance(), "togglePriority");
        wrapper.instance().forceUpdate();  
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('[name="priority"]').at(0)
        .simulate("click");
        expect(spy).toHaveBeenCalledTimes(1)
    })
})