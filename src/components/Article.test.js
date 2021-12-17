import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
  id: '12345',
  headline: "This is a headline.",
  createdOn: '2021-08-09T18:02:38-04:00',
  summary: "Test summary.",
  author: "Test Author",
  body: "This is the body paragraph."
}

const testNoAuthor = {
  id: '12345',
  headline: "This is a headline.",
  createdOn: '2021-08-09T18:02:38-04:00',
  summary: "Test summary.",
  author: "",
  body: "This is the body paragraph."
}

test('renders component without errors', () => {
  render(<Article article={testArticle} />);
});

test('renders headline, author from the article when passed in through props', () => {
  render(<Article article={testArticle}/>);

  const headline = screen.queryByText(/this is a headline./i);
  const author = screen.queryByText(/test author/i);
  const summary = screen.queryByText(/test summary./i);
  const body = screen.queryByText(/this is the body paragraph./i);
  
  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={testNoAuthor}/>);

  const author = screen.queryByTestId('author');
  expect(author).toHaveTextContent(/by associated press/i);
});

test('executes handleDelete when the delete button is pressed', async () => {
  const mockHandleDelete = jest.fn();

  render(<Article article={testArticle} handleDelete={mockHandleDelete}/>);

  const button = screen.queryByTestId('deleteButton');
  userEvent.click(button);

  await waitFor(() => {
    expect(mockHandleDelete).toHaveBeenCalled();
  })
});

//Task List:
//1. Complete all above tests. Create test article data when needed.