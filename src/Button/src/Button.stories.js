import React from "react";
import { storiesOf } from "@storybook/react";
import Button from '@webnostix/button';
// import Button from './Button';


storiesOf("Button", module).add("Default", () => (
    <Button onClick={() => { alert('You are the best! =)')}}>Click me</Button>
));

storiesOf("Button", module).add("Success", () => (
    <Button type="success" onClick={() => { alert('You are the best! =)')}}>Click me</Button>
));

storiesOf("Button", module).add("Rounded", () => (
    <Button shape="rounded" onClick={() => { alert('You are the best! =)')}}>Click me</Button>
));