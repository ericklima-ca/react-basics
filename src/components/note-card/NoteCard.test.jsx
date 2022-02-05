import { render, screen } from "@testing-library/react";
import NoteCard from "./NoteCard";

test('renders note card', ()=> {
    render(<NoteCard title="Test" text="test"/>);
    const text = screen.getAllByText(/test/i)
    expect(text).toBeTruthy();
})