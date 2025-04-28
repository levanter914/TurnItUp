import { Suspense } from 'react';
import Dashboard from '@/components/dashboard'; // adjust the import path if needed

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <Dashboard />
    </Suspense>
  );
}
