import { queryByText, render, screen, waitFor, within } from "@testing-library/react";
// import EmptyProgress from "./EmptyProgress";
import App from "./Components/App";

import userEvent from '@testing-library/user-event'




test('Adding Task', () => {
  render(<App />)
  // check if task does not exist on the DOM yet by looking for if there is any task title
  let task = screen.queryByTestId('task-title');
  expect(task).toBeNull();

  // input a new task title into the task form
  const input = screen.getByPlaceholderText('New Task Title')  
  userEvent.type(input, 'Task 1');
  
  // select "+ New List" 
  const select = screen.getByRole('combobox');
  userEvent.selectOptions(select, within(select).getByRole('option', {name: '+ New List...'}));
  
  // press submit button to submit the form
  const submit = screen.getByTestId('submit');  
  userEvent.click(submit)

  // check if the task is added yet (mounted to the DOM)
  task = screen.queryByTestId('task-title');
  expect(task).toBeInTheDocument();
  // check if the task title match the input
  expect(task).toHaveTextContent('Task 1');
})

test('Deleting Task', () => {
  render(<App />)
  // check if task does not exist on the DOM yet by looking for if there is any task title
  // let task = screen.queryByTestId('task-title');
  // // expect(task).toBeNull();

  // // input a new task title into the task form
  // const input = screen.getByPlaceholderText('New Task Title')  
  // userEvent.type(input, 'Task 1');
  
  // // select "+ New List" 
  // const select = screen.getByRole('combobox');
  // userEvent.selectOptions(select, within(select).getByRole('option', {name: '+ New List...'}));
  
  // // press submit button to submit the form
  // const submit = screen.getByTestId('submit');  
  // userEvent.click(submit)

  // check if the task is added yet (mounted to the DOM)
  let task = screen.queryByTestId('task-title');
  expect(task).toBeInTheDocument();

  // check if the task title match the input

  const deleteTask = screen.getByTestId('delete-task');

  userEvent.click(deleteTask);
  
  task = screen.queryByTestId('task-title');
  expect(task).toBeNull();
}
)

test('Updating Task', () => {
  render(<App />)
  // check if task does not exist on the DOM yet by looking for if there is any task title
  let task = screen.queryByTestId('task-title');
  expect(task).toBeNull();

  // input a new task title into the task form
  const input = screen.getByPlaceholderText('New Task Title')  
  userEvent.type(input, 'Task 1');
  
  // select "+ New List" 
  const select = screen.getByRole('combobox');
  userEvent.selectOptions(select, within(select).getByRole('option', {name: 'New List'}));
  
  // press submit button to submit the form
  const submit = screen.getByTestId('submit');  
  userEvent.click(submit)

  // check if the task is added yet (mounted to the DOM)
  task = screen.queryByTestId('task-title');
  expect(task).toBeInTheDocument();
  // check if the task title match the input
  expect(task).toHaveTextContent('Task 1');

  const edit = screen.getByTestId('edit');
  // expect(edit).toBeInTheDocument();

  userEvent.click(edit);

  const editTitle = screen.getByTestId('edit-title');
  userEvent.type(editTitle, 'Edited Title');

  const save = screen.getByTestId('save');
  userEvent.click(save);

  task = screen.queryByTestId('task-title')
  expect(task).toHaveTextContent('Edited Title');

  const deleteTask = screen.getByTestId('delete-task');

  userEvent.click(deleteTask);

})

test('Assigned To', async () => {
  render(<App />)

  // // check if any list exist before adding one
  // let list = screen.queryByTestId('list-title');
  // expect(list).toBeNull();
  
  // press
  // const addList = screen.getByTestId('add-list')
  
  // expect(addList).toBeInTheDocument();
  // userEvent.click(addList);

  let list = screen.queryByTestId('list-title')
  expect(list).toHaveTextContent('New List')

  // check if task does not exist on the DOM yet by looking for if there is any task title
  // let task = screen.queryByTestId('task-title');
  // expect(task).toBeNull();

  // input a new task title into the task form
  const input = screen.getByPlaceholderText('New Task Title')  
  userEvent.type(input, 'Assigned Task');
  
  // select "New List" (The list just added)
  const select = screen.getByRole('combobox');
  userEvent.selectOptions(select, within(select).getByRole('option', {name: 'New List'}));
  
  // press submit button to submit the form
  const submit = screen.getByTestId('submit');  
  userEvent.click(submit)

  const assignedList = screen.getByTestId('New List')
  expect(assignedList).toHaveTextContent('Assigned Task');
})
