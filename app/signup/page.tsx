'use client';

import { useState } from 'react';
import { supabaseClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: signUpError } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { name } }
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      alert("Account created! Please check your email to confirm.");
      router.push('/login');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700">Join MarburgConnect</h1>
          <p className="text-gray-600 mt-2">Become part of the community</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          {error && <p className="text-red-500 text-center bg-red-50 p-4 rounded-2xl">{error}</p>}

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600"
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600"
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl transition-all"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-green-600 font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
}