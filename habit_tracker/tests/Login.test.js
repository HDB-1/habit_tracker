import React from 'react'
import { shallow } from 'enzyme'
import Login from "../src/components/Login"

describe("shallow Login", () => {
    let wrapper;

    beforeEach(() => (wrapper = shallow(<Login />)))
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should have 2 input fields and a button", () => {
        expect(wrapper.find("input").length).toEqual(2);
        expect(wrapper.find("button").length).toEqual(1);
    })
})