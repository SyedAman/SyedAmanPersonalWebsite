import { render, screen } from '@testing-library/react';
import Header from './Header';


describe('Header', () => {
   test('displays a big title with the text "Syed Aman"', () => {
       render(<Header />);
       const titleElement = screen.getByText(/Syed Aman/i);
       expect(titleElement).toBeInTheDocument();
   });

   test('has a font size of 3rem and a bold font weight for the title', () => {
      render(<Header />);
      const titleElement = screen.getByText(/Syed Aman/i);
      expect(titleElement).toHaveStyle('font-size: 3rem');
        expect(titleElement).toHaveStyle('font-weight: bold');
   });

   test('displays a navigation menu with links to different sections of the site (e.g., About, Projects, Contact)', () => {});
   test('has a responsive design that works well on various screen sizes and devices', () => {});
   test('has a footer with social media links or contact information', () => {});
   test('displays a brief introduction or summary about yourself in the About section', () => {});
});



