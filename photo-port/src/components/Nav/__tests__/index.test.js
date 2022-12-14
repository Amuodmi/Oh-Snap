import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();


afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
      render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
    })
    //snapshot test
   
    //assert value comparison
  


describe('emoji is visible', () => {
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
  })
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
 

  describe('lins are visible', () => {
    it('renders', () => {
      render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
    })

        //Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })