import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-['Figtree']">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Welcome back to <span className="text-[#52AEA3]">transferlink</span>
        </h2>
        <p className="text-center text-black mb-8">
          Please sign in to access your account.
        </p>
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "bg-[#52AEA3] hover:bg-[#489992] text-white font-semibold py-2 px-4 rounded transition-colors border-none shadow-none",
              formFieldInput: "border border-gray-300 rounded px-4 py-2 w-full",
              formHeaderTitle: "text-2xl text-black font-bold mb-4",
              formHeaderSubtitle: "text-black text-sm mb-4",
            },
          }}
        />
      </div>
    </div>
  );
}
