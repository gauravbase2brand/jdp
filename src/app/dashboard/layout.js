import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex lg:flex-row h-full">
        {/* Sidebar */}
        <div className='lg:w-80 relative z-50 w-[70px]'>
          <aside className="fixed h-full">
            <Sidebar />
          </aside>
        </div>

        {/* Main content */}
        <main className="flex-1 lg:pl-6 lg:pr-6 pl-4 pr-4 pb-6 lg:pt-3 lg:pb-6">
          <Header />
          <div className="mt-4">{children}</div>
        </main>
      </div>
    </>
  );
}
