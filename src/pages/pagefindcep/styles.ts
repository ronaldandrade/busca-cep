import styled, { css } from 'styled-components';

interface IFormProps{
  hasError: boolean;
}

export const Title = styled.h1 `
    font-size: 2rem;
    color: #f0f0f0;
    text-align: center;

`;

export const Form = styled.form<IFormProps> `
     margin-top: 2.5rem;
     max-width: 700px;
     display: flex;

     input {
      flex: 1;
      height: 3.5rem;
      padding: 0 1.6rem;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;
      border: 2px solid #fff;
      border-right: 0;

      ${(props) => props.hasError && css`
        border-color: #c53030;
        `}
     }

     button{
       width: 13.5rem;
       height: 3.5rem;
       background: #54368F;
       border-radius: 0px 5px 5px 0px;
       border: 0;
       color: #fff;
       font-weight: bold;
       transition: background-color 0.2s;

       &:hover{
         background: #2C124D;
       }
     };
`;

export const Error = styled.span`
  display: block;
  margin-top:5px;
  color: #c53030;
`;

export const Adresses = styled.div`
      margin-top: 20rem;
      max-width: 700px;



      a {
        background: #54368F;
        color: #fff;
        border-radius:5px;
        width: 100%;
        padding: 1rem;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
          margin-top: 2rem;
        }
        &:hover {
          transform: translateY(-10px);


        };

        div{
          margin: 0 2.5rem;
          flex:1;


          strong{
            font-size: 20px;
            color: #a8a8b3;
            font: bold;
          };

          p{
            font-size: 14px;
            color: #fff;
            margin-top: 10px;

          }
        }

      }
`;


