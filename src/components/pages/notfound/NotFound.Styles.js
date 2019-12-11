import styled from 'styled-components';

import netflixBack from '../../../../public/assets/img/netflix_back.jpg';

const NotFound = styled.div`
  color: white;
  width: 900px;
  height: 500px;
  margin: auto;
  padding: 20px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${netflixBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default NotFound;