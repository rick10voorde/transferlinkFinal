// src/app/(marketing)/page.tsx
'use client';

import { UserButton, SignInButton, SignUpButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[60vh]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">
              The Professional Platform for Football Transfers
            </h1>
            <p className="py-6">
              Connect with clubs, agents, and players worldwide. Find the perfect match for your team or career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">For Clubs</h2>
                <p>Post vacancies, discover talent, and connect with qualified agents.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">For Agents</h2>
                <p>Represent players, manage profiles, and negotiate deals efficiently.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">For Players</h2>
                <p>Create your profile, showcase your talent, and find opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary-content">1</span>
                </div>
                <h3 className="card-title">Create Profile</h3>
                <p>Sign up and complete your profile with relevant information.</p>
              </div>
            </div>

            <div className="card bg-base-100">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary-content">2</span>
                </div>
                <h3 className="card-title">Connect</h3>
                <p>Find and connect with relevant parties in the football industry.</p>
              </div>
            </div>

            <div className="card bg-base-100">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary-content">3</span>
                </div>
                <h3 className="card-title">Succeed</h3>
                <p>Close deals and advance your career or team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}