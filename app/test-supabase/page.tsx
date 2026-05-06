import { supabaseServer } from '@/utils/supabase/server'

export default async function TestSupabase() {
  const supabase = await supabaseServer()

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .limit(1)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-700">🔍 Supabase Connection Test</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow">
          <p className="text-xl mb-4">
            Status: {error ? '❌ Error' : '✅ Connected Successfully'}
          </p>
          
          <pre className="bg-gray-100 p-6 rounded-xl overflow-auto text-sm">
            {JSON.stringify({ 
              data, 
              error: error?.message || null 
            }, null, 2)}
          </pre>
        </div>

        <p className="text-center mt-8 text-gray-500">
          If you see "Connected Successfully", Supabase is working!
        </p>
      </div>
    </div>
  )
}