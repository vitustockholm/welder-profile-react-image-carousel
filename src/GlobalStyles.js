import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --nav-font: "Open Sans", sans-serif;
  --hero-font: "Poppins", "Raleway";
  --services-font: 'Raleway';
  --primary-color: #2487ce;
  --secondary-color: #16507b;
  --dark-color: #123265;
  --p-color: #5e5e5e
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
`;
