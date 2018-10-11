import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import Home from "../app/components/Home";

jsdom();

describe("<Home />", () => {
    it ("should return an h1 with 'hello' string", () => {
        const component = TestUtils.renderIntoDocument(
            <Home />
        );
        const h1 = TestUtils.findRenderedDOMComponentWithTag(component, "h1");
        
        expect(h1.textContent).toEqual("Hello World");
    });
});