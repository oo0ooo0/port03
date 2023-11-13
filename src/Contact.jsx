import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  .container {
    margin-top: 60px;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .contactImg {
      display: flex;
      width: 30%;
      height: 30%;
      img {
        width: 100%;
        height: 100%;
        flex: none;
      }
    }

    .text-form {
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      white-space: nowrap;
      h4 {
        font-size: 34px;
      }
      p {
        font-size: 11.5px;
      }
      address {
        margin-top: 15px;
      }
      .sns {
        text-align: center;
      }
    }
  }
  @media (max-width: 768px) {
    main {
      .image-wrap {
        img {
          width: 60%;
          height: 60%;
        }
      }
    }
  }
`;

function Contact() {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  });
  return (
    <StyledContact>
      <h2 className='title'>Contact</h2>

      <main className='container'>
        <div className='contactImg'>
        </div>
        <div className='text-form'>
          <h4>Kwon-jamin</h4>
          <p>Web Publisher. Front-end Developer.</p>
          <address>Dongdaemun-gu, Seoul, Republic of Korea</address>
          <div className='sns'>
            <a href='mailTo:kkjjajja@gmail.com' target='_blank' rel='noopener noreferrer'>
              Email: kkjjajja@gmail.com
            </a>{' '}
            <br />
            <a href='https://www.instagram.com/oo.0oo_o0' target='_blank' rel='noopener noreferrer'>
              instagram: instagram.com/oo.0oo_o0
            </a>
          </div>
        </div>
      </main>
    </StyledContact>
  );
}

export default Contact;
