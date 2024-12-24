import { Hero } from '../components/ui/Hero'
import { Feature1 } from '../components/ui/feature1'
import { Feature2 } from '../components/ui/feature2'
import { CTA1 } from '@/components/ui/cta'

function HomePage() {
  return (
    <>
      <div className='px-5'>
        <Hero />
        <Feature1 />
        <Feature2 />
        <CTA1 />
      </div>
    </>
  )
}

export default HomePage