import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  it("has the Control Panel when the application loads", () => {
    const element = screen.getByText("Control Panel");

    expect(element).toBeInTheDocument();
  })

  it("does not show the Answer when we first load", () => {
    const element = screen.queryByTestId("answer-label");

    expect(element).not.toBeInTheDocument();
  });

  it("does show the Answer when we click the reveal button", async () => {
    const button = screen.getByTestId("reveal-answer-button");
    button.click();
    const element = await screen.findByTestId("answer-label");
    expect(element).toBeInTheDocument();
  });

  it("does show the form  when I click Add New Quote", async () => {
    const button = screen.getByTestId("add-new-card-button");
    button.click();
    const modal = await screen.findByTestId("modal");
    expect(modal).toBeVisible();
  });

  it("does it hide the form when I click close", async () => {
    const buttonOne = screen.getByTestId("add-new-card-button");
    buttonOne.click();
    const buttonTwo = screen.getByTestId("close-button");
    buttonTwo.click();
    const modal = await screen.findByTestId("modal");
    expect(modal).not.toBeVisible();
  })

  it("does it show text in the prompt box when I open the modal", async () => {
    const button = screen.getByTestId("add-new-card-button");
    button.click();
    const prompt = screen.getByTestId("prompt-textarea");
    expect(prompt).toHaveTextContent("PROMPT TEXT");
  })

  it("does it show text in the answer box when I open the modal", async () => {
    const button = screen.getByTestId("add-new-card-button");
    button.click();
    const prompt = screen.getByTestId("answer-textarea");
    expect(prompt).toHaveTextContent("ANSWER TEXT");
  })

  /*it("does it save a card when I click save changes", async () => {
    const buttonOne = screen.getByTestId("add-new-card-button");
    buttonOne.click();
    const 
  })*/

})
