import { render, screen } from "@testing-library/react";
import RegForm from './RegForm'

test('renders note card', ()=> {
    render(<RegForm/>);
    const text = screen.getByPlaceholderText(/title/i);
    expect(text).toBeTruthy();
})