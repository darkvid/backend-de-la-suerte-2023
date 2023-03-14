import Image from 'next/image'
import SaveCommand from '@/components/saveCommand'
import ShowCommand from '@/components/showCommand'

export default function Home() {
  return (
    <main>
      <h1>Zombie's Restaurant</h1>
      <SaveCommand />
      <ShowCommand />
    </main>
  )
}
