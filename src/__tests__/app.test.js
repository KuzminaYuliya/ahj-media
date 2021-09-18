/* eslint-disable linebreak-style */
import Modal from '../js/Modal';

const modal = new Modal();

test.each([
  ['51.50851, −0.12572', true],
  ['51.50851,−0.12572', true],
  ['[51.50851, −0.12572]', true],
  ['test', false],
])(('Coords value "%s" should check like %o'), (value, expected) => {
  expect(modal.checkFormat(value)).toEqual(expected);
});
