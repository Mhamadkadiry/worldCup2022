import styled from "styled-components";
export const NavbarStyled = styled.div`

`
export const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
    grid-template-areas:
        "blog1 blog1 blog2 blog2"
        "blog3 blog3 blog4 blog4"
        "blog5 blog5 blog4 blog4"
        "blog5 blog5 blog4 blog4";
    text-align: center;
    grid-gap: 0.25rem;
`;
export const BlogStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  p{
    text-align: center;
    background-color:#9a074f;
    margin-top: -10px;
    color: white;
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    padding: 5px;
  }
`