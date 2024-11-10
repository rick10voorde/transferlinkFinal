// src/app/(dashboard)/admin/page.tsx
import { Users, Briefcase, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 p-4">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h3 className="card-title text-sm">Total Users</h3>
              <Users className="h-4 w-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">1,234</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h3 className="card-title text-sm">Active Vacancies</h3>
              <Briefcase className="h-4 w-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">123</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h3 className="card-title text-sm">Successful Matches</h3>
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">89</p>
          </div>
        </div>
      </div>

      {/* We'll add more components here later */}
    </div>
  );
}