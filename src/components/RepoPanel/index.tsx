import { useGit } from "../../hooks/useGit";
import { ListRepos } from "./ListRepos";
import { Profile } from "./Profile";

interface repos {
  id: number,
  name: string,
  html_url: string,
  description: string,
  stargazers_count: number,
  language: string,

}

export function RepoPanel() {
  const { data } = useGit()

  if (!data.login) {
    return <></>;
  } else {
    return (<>
      <div className="w-full mt-10 mb-10 flex flex-col items-center ">
        <Profile />
      </div>
      <div className="w-full px-10 flex flex-wrap justify-center items-center gap-y-4 gap-4 h-[40vh]">
        {data.repos.map((repo: repos) => {
          return (
            <ListRepos key={repo.id} name={repo.name} description={repo.description} tech={repo.language} star={repo.stargazers_count} url={repo.html_url} />
          )
        })}
      </div>
    </>
    )
  }
}