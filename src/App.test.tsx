import React from 'react';
import { render } from '@testing-library/react';
import App, { GenerateSDE } from './App';

test('renders learn react link', () => {
  render(<App />);
});

test('convert-sde-water', async () => {
  console.log(GenerateSDE('cfyjw'))
  expect(GenerateSDE('cfyjw')).toContain('water');
});

test('convert-sde-again', async () => {
  console.log(GenerateSDE('cickp'))
  expect(GenerateSDE('cickp')).toContain('again');
});

test('convert-sde-memory', async () => {
  console.log(GenerateSDE('tltvyg'))
  expect(GenerateSDE('tltvyg')).toContain('memory');
});

test('convert-sde-restraint', async () => {
  console.log(GenerateSDE('codecksxe'))
  expect(GenerateSDE('codecksxe')).toContain('restraint');
});

test('convert-sde-tomorrow', async () => {
  console.log(GenerateSDE('fzxzddzi'))
  expect(GenerateSDE('fzxzddzi')).toContain('tomorrow');
});