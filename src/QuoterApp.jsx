import { ContextProvider } from "./context/ContextProvider"
import { QuoterPage } from "./view/QuoterPage"

export const QuoterApp = () => {

  return (
    <ContextProvider>
      <QuoterPage />
    </ContextProvider>
  )
}
