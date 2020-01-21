import React from 'react'
import { shallow } from 'enzyme'
import Signup from "../src/components/Signup"

describe("shallow Login", () => {
    let wrapper;

    beforeEach(() => (wrapper = shallow(<Signup />)))
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should have 4 input fields and a button", () => {
        expect(wrapper.find("input").length).toEqual(4);
        expect(wrapper.find("button").length).toEqual(1);
    })
})