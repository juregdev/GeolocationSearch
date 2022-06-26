import { useGit } from "../../hooks/useGit";

export function Profile() {
  const { data } = useGit()

  return (
    <>
      <div className="w-full max-w-2xl flex justify-center items-center gap-4 shadow-md p-2 rounded bg-slate-100">
        <img src={data.avatar_url} alt={`picture ${data.name}`} className="w-28 h-28 ml-4 rounded-full " />

        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-2xl mb-2 font-bold">{data.name}</h1>
          <h2 className="text-base mb-2">{data.description}</h2>
        </div>
      </div>
    </>
  )
}