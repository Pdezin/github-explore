import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Logo from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explore" />
        <Link to="/">
          Voltar <FiChevronLeft size={20} />
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/82681415?v=4"
            alt="teste"
          />
          <div>
            <strong>user/repositorio</strong>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdadads">
          <div>
            <strong>Dasdasddad</strong>
            <p>Dasdasddad</p>
          </div>
          <FiChevronRight size={30} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
