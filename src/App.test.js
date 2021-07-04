import React from 'react';
import {shallow} from "enzyme";
import Footer from "./components/footer/footer";
import NavigationBar from "./components/navbar/Navbar";
import Background from './pages/background';
import Fromimg from './pages/fromimg';
import Fromvid from './pages/fromvid';

describe('With Enzme', () => {
test ('should render quick links ', ()=> {
    const wrapper = shallow(<Footer/>);
       expect(wrapper.find("h4").first().text()).toEqual("Quick Links");
});

test ('should render NSLRS on Navbar  ', ()=> {
    const wrapper = shallow(<NavigationBar/>);
       expect(wrapper.find("h1").text()).toEqual("NSLRS");
});

test ('should render Background Page Title ', ()=> {
    const wrapper = shallow(<Background/>);
       expect(wrapper.find("h1").text()).toEqual("Background");
});

test ('should render Detect From Video ', ()=> {
    const wrapper = shallow(<Fromvid/>);
       expect(wrapper.find("h1").first().text()).toBe("Detect From Video");
});

test ('should render Detect From Image ', ()=> {
    const wrapper = shallow(<Fromimg/>);
       expect(wrapper.find("h1").first().text()).toBe("Detect From Image");
});
});
