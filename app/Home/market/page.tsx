import Link from 'next/link'

export default function FeaturePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link href="/app" className="text-green-600 underline mb-4 inline-block">
        ← Back to Dashboard
      </Link>
      
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Feature Name (e.g., Market)
      </h1>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p>This is the main area for this feature.</p>
        <p className="text-gray-500 mt-4">Coming soon: We will build the database and list view here.</p>
      </div>
    </div>
  )
}