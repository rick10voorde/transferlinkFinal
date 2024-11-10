// src/app/page.tsx
'use client';

import Image from 'next/image';
import { UserButton, SignInButton, SignUpButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
              The Professional Platform for Football Transfers
            </h1>
            <p className="mt-6 text-gray-500">
              Connect with clubs, agents, and players worldwide. Find the perfect match for your team or career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              {!isSignedIn ? (
                <>
                  <SignUpButton mode="modal">
                    <button className="btn btn-primary">Get Started</button>
                  </SignUpButton>
                  <SignInButton mode="modal">
                    <button className="btn btn-outline">Sign In</button>
                  </SignInButton>
                </>
              ) : (
                <button 
                  onClick={() => router.push('/dashboard')} 
                  className="btn btn-primary"
                >
                  Go to Dashboard
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50">
        <div className="container px-6 py-16 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* For Clubs */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">For Clubs</h3>
              <p className="mt-4 text-gray-600">
                Post vacancies, discover talent, and connect with qualified agents.
              </p>
            </div>

            {/* For Agents */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">For Agents</h3>
              <p className="mt-4 text-gray-600">
                Represent players, manage profiles, and negotiate deals efficiently.
              </p>
            </div>

            {/* For Players */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">For Players</h3>
              <p className="mt-4 text-gray-600">
                Create your profile, showcase your talent, and find opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-white">
        <div className="container px-6 py-16 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary rounded-full">
                <span className="text-xl text-white">1</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Create Profile</h3>
              <p className="mt-2 text-gray-600">Sign up and complete your profile with relevant information.</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary rounded-full">
                <span className="text-xl text-white">2</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Connect</h3>
              <p className="mt-2 text-gray-600">Find and connect with relevant parties in the football industry.</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary rounded-full">
                <span className="text-xl text-white">3</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Succeed</h3>
              <p className="mt-2 text-gray-600">Close deals and advance your career or team.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}