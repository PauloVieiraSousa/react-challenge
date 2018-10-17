import React from 'react';
import renderer from 'react-test-renderer';
import App from './App'
import 'jest-styled-components';

test ('example test with jest', ()=> {
    const component = renderer.create(<App />).toJSON();
    
    expect(component).toMatchSnapshot();
});

