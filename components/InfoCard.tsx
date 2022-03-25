import { CodeIcon } from '@heroicons/react/outline'

interface Props {
  title: string
  description: string
  difficulty: string
  link: string
}

const InfoCard = (kit: Props) => {
  return (
    <div className="border shadow w-64 rounded-md border border-grey p-4 bg-gray-100 text-gray-800">
      <div className="font-semibold text-xl hover:text-gray-500">
        <a href="https://github.com/Krustuniverse-KlaytnGroup/klaytn-contracts" target="_blank">
          {kit.title}
        </a>
      </div>
      <div className="py-4 text-sm">{kit.description}</div>
      <div className="flex place-content-between">
        <span className="flex items-center px-2 border rounded-full text-xs bg-green-100 border-green-200">
          {kit.difficulty}
        </span>
        <a href={kit.link} target="_blank">
          <CodeIcon className="w-6 h-7 text-umber cursor-pointer transition duration-300 ease-in-out hover:scale-90" />
        </a>
      </div>
    </div>
  )
}

export default InfoCard
