'use client';

import { useEffect, useState } from 'react';
import { supabaseClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import BottomNav from '@/components/BottomNav';

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Profile</h1>
          <button 
            onClick={handleLogout}
            className="text-red-500 font-medium"
          >
            Logout
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow p-8 text-center">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center text-5xl mb-4">
            👤
          </div>
          
          <h2 className="text-2xl font-semibold">{user?.user_metadata?.name || 'John Doe'}</h2>
          <p className="text-gray-500 mt-1">{user?.email}</p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-3xl font-bold text-green-600">3</p>
              <p className="text-sm text-gray-500">Communities</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-3xl font-bold text-green-600">May 2024</p>
              <p className="text-sm text-gray-500">Member Since</p>
            </div>
          </div>
        </div>

        {/* My Communities */}
        <div className="mt-8 px-6">
          <h3 className="font-semibold mb-4">My Communities</h3>
          <div className="space-y-3">
            {["International Marburg", "Students", "Pakistani Community"].map((name, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">🌍</div>
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-gray-500">Active member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-6 flex justify-around text-3xl">
        <a href="/">🏠</a>
        <a href="/groups" className="text-gray-400">👥</a>
        <a href="/calendar" className="text-gray-400">📅</a>
        <a href="/messages" className="text-gray-400">💬</a>
        <a href="/profile" className="text-green-600">👤</a>
       
        <BottomNav />
      </div>
    </div>
  );
}