import styled from 'styled-components';

export const DivMain = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--background-color);
  height: 20vh;

  .container {
    display: flex;
    height: 100%;
    width: 50vw;
    justify-content: space-between;

    img {
      height: 100%;
    }

    .buttons {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 20px;
    }
  }

`
