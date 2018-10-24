import { css } from 'styled-components';

// very useful helper for responsive design in conjunction with styled components,
// - being used via min-width.

export const sizes = {
  desktop: 1439,
  tablet: 1022,
  mid: 600,
  mobile: 375
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
