import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0;
  flex-grow: 1;

  margin-left: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 47px;
  height: 44px;

  @media (min-width: 1280px) {
    width: 71px;
    height: 76px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20px;

  font-size: 18px;

  @media (min-width: 1280px) {
    margin-left: -15px;
    margin-bottom: 0;
  }
`;

export const TextMom = styled.p`
  text-transform: capitalize;
  color: #fc842d;
  display: ${props => {
    console.log(props);
    switch (props.user) {
      case true:
        return 'block';

      case false:
        return 'none';

      default:
        return 'none';
    }
  }};

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const TextSlim = styled.p`
  margin: 0 6px 0 0;

  text-transform: capitalize;
  color: #212121;

  display: ${props => {
    switch (props.user) {
      case true:
        return 'block';

      case false:
        return 'none';

      default:
        return 'none';
    }
  }};
`;
