import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

import Logo from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);
      setRepository(repository.data);
      setIssues(issues.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explore" />
        <Link to="/">
          Voltar <FiChevronLeft size={20} />
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(({ html_url, id, title, user }) => {
          return (
            <a key={id} href={html_url} target="_blank" rel="noreferrer">
              <div>
                <strong>{title}</strong>
                <p>{user.login}</p>
              </div>
              <FiChevronRight size={30} />
            </a>
          );
        })}
      </Issues>
    </>
  );
};

export default Repository;
