import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledAbout = styled.main`
  main {
    display: flex;
    justify-content: space-between;

    .image-wrap {
      display: flex;
      width: 30%;
      height: 30%;
      img {
        width: 100%;
        height: 100%;
        flex: none;
      }
    }

    .textWrap {
      width: 70%;
      text-align: left;
      padding: 0px 20px;
      .name-wrap {
        .name {
          font-size: 50px;
        }
        small {
          font-size: 15px;
          letter-spacing: 1.9px;
          word-spacing: 3px;
          white-space: nowrap;
        }
      }

      p {
        font-size: 18px;
        margin-bottom: 20px;
      }
      ul {
        width: 100%;
        font-size: 15px;
        margin-top: 10px;
        li {
          width: 100%;
          line-height: 1.5;
          padding: 5px;
        }
        .work,
        .edu {
          display: inline-block;
          margin-bottom: 30px;
        }
        strong {
          margin-top: 10px;
        }
        .about-title {
          display: inline-block;
          margin-top: 30px;
          padding-top: 10px;
          font-size: 20px;
          border-top: 1px solid lightgray;
          width: auto;
        }
      }
    }
  }

  @media (max-width: 768px) {
    main {
      display: block;
      .image-wrap {
        justify-content: center;
        width: 100%;
        height: 30%;
        img {
          width: 50%;
          height: 100%;
        }
      }

      .textWrap {
        .name-wrap {
          margin: 40px 0px 10px 0px;
          .name {
            font-size: 30px;
            font-size: 6vw;
            line-height: 1;
          }
          small {
            font-size: 2vw;
            letter-spacing: 0.1vw;
            word-spacing: 0.4vw;
          }
        }
        margin-top: 30px;
        width: 100%;
        text-align: center;
        ul {
          li {
            font-size: 3.5vw;
            width: auto;
            line-height: 1.5;
          }
          .about-title {
            font-size: 4vw;
          }
        }
        button {
          width: 100%;
        }
      }
    }
  }
`;

function About() {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  });
  return (
    <StyledAbout>
      <h2 className='title'>About</h2>

      <main className='container'>
        <div className='image-wrap'>
          <img src='./img/About.jpg' alt='about image'></img>
        </div>
        <div className='textWrap'>
          <div className='name-wrap'>
            <h3 className='name'>
              <strong>KWON_JAMIN</strong>
            </h3>
            <small>| Web Publisher . Front end Developer |</small>
          </div>
          <ul>
            <li className='work'>
              <strong className='about-title'>Work Experience</strong>
              <ul>
                <li>
                  <strong>PYORANG / 프로덕션디자이너 </strong>
                  <br />
                  2019 02 - 2019 11, 경기. 안양
                  <br />
                  예술 창작 교육 단체 표랑의 인쇄물, 웹 홍보물, 활동에 필요한 교구 등을 제작.
                </li>
                <li>
                  <strong>서울예술대학교 / 영상학부 조교</strong>
                  <br />
                  2018 01 - 2019 02 , 경기. 안산 <br />
                  영상학부 디지털아트전공 기자재 관리 및 전시 지원
                </li>
                <li>
                  <strong>스마일게이트. 아시아문화의 전당 / 코딩교육 강사</strong> <br />
                  스마일게이트 보조강사 2017 10 - 11, 경기. 분당 <br />
                  아시아문화의 전당 주강사 2018 07 - 11, 전북. 광주 <br />
                  Scratch, Arduino, Processing을 이용한 코딩교육
                </li>
              </ul>
            </li>
            <li className='edu'>
              <strong className='about-title'>EDUCATION. LICENSE</strong>
              <ul>
                <li>세종IT직업전문학교 / 반응형 퍼블리싱 과정 19.12</li>
                <li>웹디자인 기능사 / 한국산업인력공단 19.12</li>
                <li>GQT 그래픽기술자격 1급 / 한국생산성본부 19.09</li>
                <li>Coding Specialist 1급 / 시행기관: YBMIT 17.06</li>
              </ul>
            </li>
            <li className='skill'>
              <strong className='about-title'>Experience SKILL</strong>
              <ul>
                <li>
                  HTML CSS Javascript <br />
                  React(Create React App) Redux
                </li>
                <li>
                  GitHub Desktop (commit push pull) <br />
                  Illustrator Photoshop
                </li>
              </ul>
            </li>
          </ul>
          <a
            href='https://docs.google.com/document/d/1vRglCjVo17zUrRQZzjDe5u29-UL_7YGDQZT3hRxOaTI/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='btn'>Resume link</button>
          </a>
        </div>
      </main>
    </StyledAbout>
  );
}

export default About;
