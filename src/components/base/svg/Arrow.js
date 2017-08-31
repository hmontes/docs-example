import React from 'react'
import styled from 'styled-components'

const Wrap = styled.svg`
  width: 4px;
	height: 8px;
  cursor: pointer;
`

const SvgArrow = (props) => (
  <Wrap viewBox="0 0 3.923 6.64014" preserveAspectRatio="xMinYMin meet">
    <path d="M3.711,2.92L0.994,0.202c-0.215-0.213-0.562-0.213-0.776,0c-0.215,0.215-0.215,0.562,0,0.777l2.329,2.329,L0.217,5.638c-0.215,0.215-0.214,0.562,0,0.776c0.214,0.214,0.562,0.215,0.776,0l2.717-2.718C3.925,3.482,3.925,3.135,3.711,2.92z"/>
  </Wrap>
);

export default SvgArrow