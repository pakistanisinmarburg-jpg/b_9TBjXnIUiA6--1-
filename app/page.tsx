import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-green-700">
        MarburgConnect
      </h1>

      <div className="mt-6 space-x-4">
        <Link href="/login">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="bg-gray-200 px-4 py-2 rounded">
            Signup
          </button>
        </Link>
      </div>
    </div>
  )
}