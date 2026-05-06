import { supabaseServer } from '@/utils/supabase/server'

export default async function TestSupabase() {
  let data = null
  let error = null
  let envStatus = {
    url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }

  try {
    const supabase = await supabaseServer()
    
    const result = await supabase
      .from('profiles')
      .select('count')
      .limit(1)

    data = result.data
    error = result.error
  } catch (err: any) {
    error = err.message || 'Unknown server error'
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-8">🔍 Supabase Test Page</h1>

        <div className="space-y-6">
          {/* Environment Variables Check */}
          <div>
            <h2 className="font-semibold mb-3">Environment Variables Status</h2>
            <p>NEXT_PUBLIC_SUPABASE_URL: <strong>{envStatus.url ? '✅ Present' : '❌ Missing'}</strong></p>
            <p>NEXT_PUBLIC_SUPABASE_ANON_KEY: <strong>{envStatus.anonKey ? '✅ Present' : '❌ Missing'}</strong></p>
          </div>

          {/* Result */}
          <div>
            <h2 className="font-semibold mb-3">Connection Result</h2>
            <div className="bg-gray-100 p-5 rounded-xl">
              {error ? (
                <p className="text-red-600">❌ Error: {typeof error === 'string' ? error : JSON.stringify(error)}</p>
              ) : (
                <p className="text-green-600">✅ Supabase Connected Successfully!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}