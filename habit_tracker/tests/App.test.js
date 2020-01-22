import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/app'
import Signup from '../src/components/Signup/Signup'
import Login from '../src/components/Login/Login'

describe("shallow app", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("Should render signup and login components", () => {
        expect(wrapper.containsMatchingElement(<Signup />)).toEqual(true);
        expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
    })
})