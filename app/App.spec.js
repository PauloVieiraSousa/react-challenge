import React from 'react';
import renderer from 'react-test-renderer';
import App from './App'


text ('example test with jest', ()=> {

    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});

