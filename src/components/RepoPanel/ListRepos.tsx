interface ListReposProps {
  name: string,
  url: string,
  description: string,
  tech: string,
  star: number
}

function colorTech(data: string) {
  switch (data) {
    case "HTML":
      return 'text-[#e34c26]'
      break;
    case "JavaScript":
      return 'text-[#F0DB4F]'
      break;
    case "TypeScript":
      return 'text-[#007acc]'
      break;
    case "CSS":
      return 'text-[#264de4]'
      break;
    case "Vue":
      return 'text-[#42b883]'
      break;
    case "SCSS":
      return 'text-[#CD6799]'
      break;
    default: return 'text-black'
  }
}

export function ListRepos({ name, url, description, tech, star }: ListReposProps) {
  return (
    <div className="w-1/4  p-4 flex flex-col justify-between gap-2 h-full  rounded-md bg-gray-100 overflow-hidden shadow-md">
      <h1 className="text-xl font-semibold">{name.toUpperCase()}</h1>
      <p>{description}</p>

      <p className={`${colorTech(tech)} font-semibold`}>{tech}</p>
      <a href={url} className='hover:text-violet-800 hover:scale-105 transition-all font-semibold'>Acesse esse repositório</a>
      <p>stars: {star}</p>


    </div>
  )
}