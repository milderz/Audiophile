import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Reset margins */

body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}

/* Body set up */

html {
  font-size: 62.5%;

  line-height: 1.5;
}

body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
  font-family: 'Manrope', sans-serif;
}



/* Forms */

input,
button,
textarea,
select,
option {
  font: inherit;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

:root {
--peach: #D87C49;
--light-peach: #FBAF85;
--white: #FEFDFE;
--black: #191919;
--light-black: #4C4C4C;;
--gray: #FEFDFE;
--text-sm: 1.5rem;
--text-md: 2.8rem;
--text-lg: 4.0rem;
--text-xl: 5.6rem;
--dark-gray: #787878;


}

h1, h2 {
font-size: var(--text-xl);
font-weight: 700;
line-height: 6.2rem;

@media screen and (max-width: 450px ) {
  font-size: 3.6rem;
  line-height: 4rem;
}
}

h3 {
font-size: var(--text-lg);
font-weight: 700;
line-height: 4.8rem;

@media screen and (max-width: 450px ) {
  font-size: 2.8rem;
  line-height: 3.7rem;
}
}

h4 {
font-size: var(--text-md);
font-weight: 700;
line-height: 3.4rem;
}

p {
  font-size: var(--text-sm);
  line-height: 2.6rem;
}

.headline {
      font-size: 1.4rem;
      color: var(--dark-gray);
      letter-spacing: 8px;
      font-weight: 700;
    }
`;
