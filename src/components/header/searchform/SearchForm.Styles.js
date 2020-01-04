import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: 3 / 2 / 3 / 4;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.input`
  font-size: 18px;
  border: 0;
  width: 780px;
  height: 24px;
  background: #fff;
  padding: 6px;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const ButtonsWrapper = styled.div`
  width: 800px;
  display: flex;
  margin-top: 10px;
`;

export const Display = styled.p`
  font-size: 18px;
  margin: 5px;
  padding: 5px;
  color: white;
`;

export const SearchButton = styled.button`
  background-color: #dd1133;
  height: 32px;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 4px 10px 4px 10px;
  padding: 2px 10px 2px 10px;
  margin-left: auto;
`;
