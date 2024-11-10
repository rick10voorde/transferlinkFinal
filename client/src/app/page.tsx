import Link from 'next/link';
import { ArrowRight, Globe, Shield, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['Figtree']">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-6xl font-normal tracking-tight text-black">
              transfer<span className="text-[#52AEA3]">link</span>
            </h1>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Connect with professional football clubs and agents worldwide. 
              Streamline your transfer process with our advanced platform.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link 
                href="/sign-in" 
                className="group inline-flex items-center px-6 py-3 text-sm text-white bg-[#52AEA3] rounded-lg hover:bg-[#489992] transition-all duration-200"
              >
                Get Started 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              </Link>
              <Link 
                href="/sign-up" 
                className="inline-flex items-center px-6 py-3 text-sm text-[#52AEA3] border border-[#52AEA3] rounded-lg hover:bg-[#52AEA3] hover:text-white transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="text-black font-normal mb-2">Jobs</div>
              <div className="text-4xl font-light">
                <span className="text-black">100</span>
                <span className="text-[#52AEA3]">+</span>
              </div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="text-black font-normal mb-2">Agents</div>
              <div className="text-4xl font-light">
                <span className="text-black">500</span>
                <span className="text-[#52AEA3]">+</span>
              </div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="text-black font-normal mb-2">Players</div>
              <div className="text-4xl font-light">
                <span className="text-black">1k</span>
                <span className="text-[#52AEA3]">+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-normal text-black text-center mb-16">
              Why choose transferlink?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                <Globe className="w-10 h-10 text-[#52AEA3] mb-4 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-normal text-black mb-2">Global Network</h3>
                <p className="text-black">Connect with clubs and agents worldwide through our extensive network.</p>
              </div>
              <div className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                <Shield className="w-10 h-10 text-[#52AEA3] mb-4 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-normal text-black mb-2">Secure Platform</h3>
                <p className="text-black">Your data is protected with enterprise-grade security measures.</p>
              </div>
              <div className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-200">
                <TrendingUp className="w-10 h-10 text-[#52AEA3] mb-4 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-normal text-black mb-2">Market Insights</h3>
                <p className="text-black">Access real-time market data and transfer analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-normal text-black mb-6">
            Ready to transform your transfer process?
          </h2>
          <p className="text-xl text-black mb-8">
            Join the most efficient platform for professional football transfers.
          </p>
          <Link 
            href="/sign-up" 
            className="inline-flex items-center px-8 py-4 text-sm text-white bg-[#52AEA3] rounded-lg hover:bg-[#489992] transition-all duration-200"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-4 h-4"/>
          </Link>
        </div>
      </section>
    </div>
  );
}