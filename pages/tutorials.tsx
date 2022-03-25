import type { NextPage } from 'next'
import Tutorial from '../components/Tutorial'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-flow-col auto-cols-max gap-8">
        <Tutorial />
        <Tutorial />
        <Tutorial />
      </div>
    </div>
  )
}

export default Home
