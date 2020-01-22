import React from 'react';
import { shallow } from 'enzyme'
import AddActivity from '../src/components/AddActivity';

let addActivityMock = jest.fn()
describe("Shallow AddActivity", () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<AddActivity addNewActivity={addActivityMock} />));

    it("Should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("Should render 2 input elements", () => {
        expect(wrapper.find("input").length).toEqual(2);
    })
    it("Should render a select element and a submit button", () => {
        expect(wrapper.find("select").length).toEqual(1);
        expect(wrapper.find("button").length).toEqual(1);
    })

})