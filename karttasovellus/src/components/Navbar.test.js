import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar_Container', () => {
    render(<Navbar />);
    const element = screen.getByTestId("Navbar_Container");
    expect(element).toBeInTheDocument();
});

test('renders Navbar', () => {
    render(<Navbar />);
    const element = screen.getByTestId("Navbar");
    expect(element).toBeInTheDocument();
});

test('renders Navbar_Brand', () => {
    render(<Navbar />);
    const element = screen.getByTestId("Navbar_Brand");
    expect(element).toBeInTheDocument();
});


test('renders Navbar_Toggle', () => {
    render(<Navbar />);
    const element = screen.getByTestId("Navbar_Toggle");
    expect(element).toBeInTheDocument();
});