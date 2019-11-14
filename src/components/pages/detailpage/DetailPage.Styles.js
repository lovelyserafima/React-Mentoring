import styled from 'styled-components';
import netflixBack from '../../../../public/assets/img/netflix_back.jpg';

export const HeaderCSSGrid = styled.div`
  display: grid;
  grid-template-columns: 50px 800px 900px;
  grid-template-rows: 100px 100px 200px;
  background-image: url(${netflixBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Detail = styled.div`
  width: 900px;
  margin-left: 700%;
  margin-top: 500%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Detail;