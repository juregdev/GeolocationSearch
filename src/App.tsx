
import { Header } from "./components/Header";
import { Inputs } from "./components/Inputs";
import { RepoPanel } from "./components/RepoPanel";
import { GitContextProvider } from "./hooks/useGit";
import { WeaterContext } from "./hooks/useWeather";


export function App() {

  return (
    <GitContextProvider >
      <WeaterContext>
        <Header />
      </WeaterContext>
      <Inputs />
      <RepoPanel />
    </GitContextProvider>
  )
}

