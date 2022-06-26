import { createContext, ReactNode, useContext, useState } from "react";
import { github, githubRepos } from "../services/api";

interface gitContextProps {

  login: string,
  avatar_url: string,
  name: string,
  description: string,
  repos: [],

}

interface GitContextValue {
  data: gitContextProps,
  callGit: (dataUser: string) => void
}

const GitContext = createContext<GitContextValue>({} as GitContextValue)

interface GitContextProviderProps { children: ReactNode }

export function GitContextProvider({ children }: GitContextProviderProps) {
  const [data, setData] = useState<gitContextProps>({} as gitContextProps)

  async function callGit(dataUser: string) {
    try {
      const githubData = await (await github.get(`${dataUser}`)).data
      const repos = await githubRepos.get(`${githubData.repos_url}`)

      setData({
        login: githubData.login,
        avatar_url: githubData.avatar_url,
        description: githubData.bio,
        name: githubData.name,
        repos: repos.data,
      })

      console.log(data)
    } catch (err) { console.error(err) }
  }

  return (
    <GitContext.Provider value={{ data, callGit }}>
      {children}
    </GitContext.Provider>

  )
}

export function useGit() {
  return useContext(GitContext)
}