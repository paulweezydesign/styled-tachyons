import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import styled, { css } from 'styled-components';
import is, { isNot } from 'styled-is';
import ty from 'styled-tachyons';

import './globalStyles';
 
const Article = styled.article`
  ${ty`
    white
    ${is('blue')`
      bg-blue
    `};
    ${isNot('blue')`
      pink
    `};
    ${(props) => props.fine && 'pa6_m'}

  `};
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
`;

const Title = styled.h1`
  ${ty`f-headline lh-solid fw9 tracked helvetica`}
`;
const Navbar = styled.nav`
  ${ty`flex items-center w-100 bg-white blue shadow-2`}
`;
const Navbrand = styled.h2`
  ${ty`b f22 lh-title helvetica`}
`;


class App extends PureComponent {
  render() {
    return (
      <div>
        <Navbar>
            <Navbrand>Styled Tachyons</Navbrand>
        </Navbar>
        <Article blue fine>
          <Title>What a large title you have there!</Title>
        </Article>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
