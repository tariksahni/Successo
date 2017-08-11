import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai'; 
global.shallow = shallow;
global.render = render;
global.mount = mount;
import React from 'react';

import SignIn from '../Components-Login/SignUp'
import Successo from '../App'
import DoingBox from '../Components-DashBoard/DoingBox'

describe('<Successo />', () => {
    // it('it has a class signup_box', function () {
    //     const wrapper = shallow(<SignIn/>);
    //     expect(wrapper.find('.signup_box')).to.have.length(1);
    // });
    it('it contains DoingBox Component', function () {
        const wrapper = mount(<Successo/>);
        expect(wrapper.find(DoingBox)).to.have.length(1);
    });
    // it('it contains DoneBox Component', function () {
    //     const wrapper = mount(<Successo/>);
    //     expect(wrapper.find(DoneBox)).to.have.length(1);
    // });
});  