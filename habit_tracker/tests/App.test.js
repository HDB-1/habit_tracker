import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/app'
import Signup from '../src/components/Signup/Signup'
import Login from '../src/components/Login/Login'
import AccountOverview from '../src/containers/AccountOverview'
import waitUntil from "async-wait-until"; // For async testing of setState functions.
import regeneratorRuntime from 'regenerator-runtime';

describe("shallow app", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("Should render signup and login components if no user currently logged in", () => {
        expect(wrapper.containsMatchingElement(<Signup />)).toEqual(true);
        expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
    })
    it("should not render signup and login component if a current user is logged in", 
    async () => {
        wrapper.setState({currentUser: 'text'})
        await waitUntil(() => wrapper.instance().state.currentUser)
        expect(wrapper.containsMatchingElement(<Signup />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<Login />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<AccountOverview />)).toEqual(true);
    })

});


