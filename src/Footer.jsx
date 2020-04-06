import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from './components/Containers';

const StyledFooter = styled.footer`
  .footer {
    border-top: 1px solid lightgray;
    margin-top: 100px;
    padding: 20px 0px 10px 0px;
    text-align: center;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <LayoutContainer width={100}>
        <div className='footer'>
          <div className='copyw'>ⓒ 2020 oo0ooo0.com. All Rights Reserved</div>
          <div className='address'>
            <p>
              built by oo0ooo0 | <a href='https://github.com/oo0ooo0'>github.com/oo0ooo0</a> |
              E-mail kkjjajja@gmail.com
            </p>

            <p>Seoul. Korea</p>
          </div>
        </div>
      </LayoutContainer>
    </StyledFooter>
  );
}

export default Footer;
