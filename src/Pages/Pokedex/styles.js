import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-weight: 100;
    font-size: 3rem;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 55vw;
  }
`