import React from "react";
import ReactDOM from "react-dom";
import internalRewire from "rewire/lib/rewire";
import App from "../App(Refactor)";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddTask from "../../AddTask/AddTask(Refactor)";
import renderer from "react-test-renderer"

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App></App>, div)
})

it("renders app correctly", () => {
    const {getByTestId} = render(<AddTask newTask="title"></AddTask>);
    expect(getByTestId("addtask")).toHaveTextContent('Add Task')
})

test('should render', () => {
    render(<App/>);
    const appEle = screen.getByTestId("testing");
    expect(appEle).toBeInTheDocument();
})

test('testing', () => {
    render(<App/>);
    const appEle = screen.getByTestId("testing");
    expect(appEle).to;
})

