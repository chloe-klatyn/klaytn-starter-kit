import type { NextPage } from 'next'
import InfoCard from '../components/InfoCard'
import { starterKits } from '../static/starterKits'

const Starter: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-flow-col auto-cols-max gap-8">
        {starterKits.map((kit: any) => (
          <InfoCard
            title={kit.title}
            description={kit.description}
            difficulty={kit.difficulty}
            link={kit.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Starter
