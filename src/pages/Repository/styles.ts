import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.3s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 5px;
    }
  }

  @media (max-width: 380px) {
    img {
      width: 150px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }

      & + li {
        margin-left: 80px;
      }
    }
  }

  @media (max-width: 550px) {
    header {
      flex-direction: column;

      div {
        margin: 0;
        text-align: center;

        strong {
          font-size: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    ul {
      li {
        width: 100%;
        text-align: center;
        strong {
          font-size: 24px;
        }

        & + li {
          margin-left: 0px;
        }
      }
    }
  }

  @media (max-width: 380px) {
    ul {
      flex-direction: column;
      li {
        & + li {
          margin-top: 40px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

  @media (max-width: 480px) {
    a {
      div {
        strong {
          font-size: 18px;
          word-break: break-all;
        }
        p {
          font-size: 16px;
          word-break: break-all;
        }
      }
    }
  }
`;
