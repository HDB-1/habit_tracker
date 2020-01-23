import React from 'react'
import { shallow } from 'enzyme'
import Login from "../src/components/Login/Login"
import waitUntil from "async-wait-until"; // For async testing of setState functions.
import regeneratorRuntime from 'regenerator-runtime';

describe("shallow Login", () => {
    let wrapper;
    let checkCredentialsMock = jest.fn()

    beforeEach(() => (wrapper = shallow(<Login checkCredentials={checkCredentialsMock}/>)))
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should have 2 input fields and a button", () => {
        expect(wrapper.find("input").length).toEqual(2);
        expect(wrapper.find("button").length).toEqual(1);
    })
    it("loginButton should call 'checkCredentials' function when clicked", 
    async () => {
        wrapper.setState({currentInputUsername: "placeholder", currentInputPassword: "alsoAPlaceholder"})
        // Adding placeholder data is needed to stop the function throwing a TypeError when given parameters equal to null
        await waitUntil(() => wrapper.instance().state.currentInputPassword && wrapper.instance().state.currentInputUsername);        expect(checkCredentialsMock).not.toHaveBeenCalled();
        wrapper.find('button').simulate('click');
        expect(checkCredentialsMock).toHaveBeenCalled();
    })
    it("HandleChangeOfPassword function should update component state", async () => {
        wrapper.instance().handleChangeOfPassword('testPassword');
        await waitUntil(() => wrapper.instance().state.currentInputPassword);
        expect(wrapper.instance().state.currentInputPassword).toEqual('testPassword');
    })
    it("HandleChangeOfUsername function should update component state", async () => {
        wrapper.instance().handleChangeOfUsername('testUsernameValue');
        await waitUntil(() => wrapper.instance().state.currentInputUsername);
        expect(wrapper.instance().state.currentInputUsername).toEqual('testUsernameValue');
    })
    it("Typing in the username input element should call handleChangeOfusername function", 
    () => {
        let spy = jest.spyOn(wrapper.instance(), "handleChangeOfUsername");
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('[name="userName"]').at(0)
        .simulate("change", { target: { value: "anything"}});
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
})