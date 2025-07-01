import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="2xl:w-82 xl:w-80 w-auto relative">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Header />
          <div className="mt-6">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
