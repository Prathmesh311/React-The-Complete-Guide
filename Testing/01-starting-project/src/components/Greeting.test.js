import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from './Greeting';

describe('Greeting Component', () => {
    test('Render Hello World', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //... nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact : false});
        expect(helloWorldElement).toBeInTheDocument();

    });
    test('Render "Good to see you here" when button is not clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act

        //Assert
        const GoodTOSeeElement = screen.getByText('Good to see you here', {exact: false});
        expect(GoodTOSeeElement).toBeInTheDocument();
    });
    test('Render "Changed!" when button is cliked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const changedElement = screen.getByText('Changed!');
        expect(changedElement).toBeInTheDocument();
    });
    test('does not render "Good to see you here" when button is clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const paraElement = screen.queryByText('Good to see you here', {exact: false});
        expect(paraElement).toBeNull();
    })
})