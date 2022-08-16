import { HomeHero } from '../components/Home/Hero'
import { History } from '../components/Home/History'
import { HomeRedirect } from '../components/Home/Redirect'

export default function Home() {
  return (
    <div className="divide-y divide-neutral-800">
      <HomeHero />
      <HomeRedirect />
      <History />
    </div>
  )
}
