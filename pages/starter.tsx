import type { NextPage } from 'next'
import InfoCard from '../components/InfoCard'
import { starterKits } from '../static/starterKits'

const Starter: NextPage = () => {
  console.log('kits: ', starterKits)
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-4">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  )
}

export default Starter
