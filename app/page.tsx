import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Main Page</h1>

      <Link href="/users">Users</Link>
    </main>
  )
}
