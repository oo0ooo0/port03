import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  height: 65vh;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding: 50px 0px;
    .contactImg {
      display: flex;
      width: 30%;
      img {
        width: 100%;
        flex: none;
      }
    }

    .myform {
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
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
    .contactImg {
      display: none;
    }
    .container {
      margin: 40px 0px;
    }
  }
`;

function Contact() {
  return (
    <StyledContact>
      <h2 className='title'>Contact</h2>

      <div className='container'>
        <div className='contactImg'>
          <img src='img/Contact.png' alt='컨택트 이미지'></img>
        </div>
        <div className='myform'>
          <h4>Kwon-jamin</h4>
          <p>Web Publisher. Front-end Developer.</p>
          <address>Gwanak-gu, Seoul, Republic of Korea</address>
          <div className='sns'>
            <a href='mailTo:kkjjajja@gmail.com'>Email: kkjjajja@gmail.com</a> <br />
            <a href='https://www.instagram.com/oo.0oo_o0' target='_blank'>
              instagram: instagram.com/oo.0oo_o0
            </a>
          </div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;
