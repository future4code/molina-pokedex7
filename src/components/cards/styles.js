import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  .loading {
    width: 100%;
  }

  h2 {
    color: var(--grey-color);
    font-weight: 100;
  }

  .image {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5px;
  }
`