import { render, screen } from "@testing-library/react";
import NotesList from './NotesList'

test('renders note card', ()=> {
    render(<NotesList notes={[{title: 'test', text: 'test'}]}/>);
    const text = screen.getAllByText(/test/i);
    expect(text).toBeTruthy();
})