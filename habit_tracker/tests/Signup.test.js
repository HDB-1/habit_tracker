import React from 'react'
import { shallow } from 'enzyme'
import Signup from "../src/components/Signup/Signup"
import waitUntil from "async-wait-until"; // For async testing of setState functions.
import regeneratorRuntime from 'regenerator-runtime';

describe("shallow Login", () => {
    let wrapper;
    let signupNewUserMock = jest.fn()

    beforeEach(() => (wrapper = shallow(<Signup signup={signupNewUserMock}/>)))
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should have 4 input fields and a button", () => {
        expect(wrapper.find("input").length).toEqual(4);
        expect(wrapper.find("button").length).toEqual(1);
    })
    it("HandleChangeOfFn function should update component state", async () => {
        wrapper.instance().handleChangeOfFn('testFn');
        await waitUntil(() => wrapper.instance().state.fn);
        expect(wrapper.instance().state.fn).toEqual('testFn');
    })
    it("HandleChangeOfLn function should update component state", async () => {
        wrapper.instance().handleChangeOfLn('testLn');
        await waitUntil(() => wrapper.instance().state.ln);
        expect(wrapper.instance().state.ln).toEqual('testLn');
    })
    it("HandleChangeOfUsername function should update component state", async () => {
        wrapper.instance().handleChangeOfUsername('testUsername');
        await waitUntil(() => wrapper.instance().state.username);
        expect(wrapper.instance().state.username).toEqual('testUsername');
    })
    it("HandleChangeOfPassword function should update component state", async () => {
        wrapper.instance().handleChangeOfPassword('testPassword');
        await waitUntil(() => wrapper.instance().state.password);
        expect(wrapper.instance().state.password).toEqual('testPassword');
    })
    it("Typing in the fn input element should call handleChangeOfFn function", 
    () => {
        let spy = jest.spyOn(wrapper.instance(), "handleChangeOfFn");
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('[name="fn"]').at(0)
        .simulate("change", { target: { value: "anything"}});
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it("Typing in a ln should call handleChangeOfLn function", 
    () => {
        let spy = jest.spyOn(wrapper.instance(), "handleChangeOfLn");
        wrapper.instance().forceUpdate();  
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('[name="ln"]').at(0)
        .simulate("change", { target: { value: "whateverYouPlease"}});
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it("Typing in a username should call handleChangeOfUsername function", 
    () => {
        let spy = jest.spyOn(wrapper.instance(), "handleChangeOfUsername");
        wrapper.instance().forceUpdate();  
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('[name="userName"]').at(0)
        .simulate("change", { target: { value: "whateverYouPlease"}});
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it("Typing in a password should call handleChangeOfPassword function", 
    () => {
        let spy = jest.spyOn(wrapper.instance(), "handleChangeOfPassword");
        wrapper.instance().forceUpdate();  
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('[name="password"]').at(0)
        .simulate("change", { target: { value: "whateverYouPlease"}});
        expect(spy).toHaveBeenCalledTimes(1)
    })
    it("signupButton should call 'signupNewUser' function when clicked", 
    async () => {
        wrapper.setState({fn: 'placeholder', ln: 'placeholder', username: 'placeholder', password: 'placeholder'})
        // Adding placeholder data is needed to stop the function throwing a TypeError when given parameters equal to null
        await waitUntil(() => wrapper.instance().state.fn && wrapper.instance().state.ln && wrapper.instance().state.username && wrapper.instance().state.password);
        expect(signupNewUserMock).not.toHaveBeenCalled();
        wrapper.find('button').simulate('click');
        expect(signupNewUserMock).toHaveBeenCalled();
    })
})