//import { describe, it, expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import App from '../tests/TrialGamePlay';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
/* 
it('test', () => 

) */