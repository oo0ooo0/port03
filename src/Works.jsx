import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Item from './components/Item';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';
import { calcColumn } from './utils/common';

const StyledWorks = styled.main`
  .my-masonry-grid {
    margin-top: 3 0px;
    display: flex;
    margin-left: -20px; /* gutter size offset */
    width: auto;
    .my-masonry-grid_column {
      padding-left: 20px; /* gutter size */
      background-clip: padding-box;
      > div {
        /* change div to reference your elements you put in <Masonry> */
        background: none;
        margin-bottom: 100px;
      }
    }
  }
`;

function Works() {
  const works = useSelector((state) => state.works);
  const [columnNum, setColumnNum] = useState(calcColumn);
  function resizeHandler() {
    setColumnNum(calcColumn());
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  });

  return (
    <StyledWorks>
      <h2 className='title'>Work</h2>
      <Masonry
        breakpointCols={columnNum}
        className='my-masonry-grid container'
        columnClassName='my-masonry-grid_column'
      >
        {Object.keys(works)
          .reverse()
          .map((key) => {
            return <Item key={key} {...works[key]} />;
          })}
      </Masonry>
    </StyledWorks>
  );
}

export default Works;
