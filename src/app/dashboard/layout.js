import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex h-full">
        {/* Sidebar */}
       <div className='2xl:w-82 xl:w-80 w-20 relative z-50'>
         <aside className="fixed">
          <Sidebar />
        </aside>
       </div>

        {/* Main content */}
        <main className="flex-1 xl:p-6  p-3">
          <Header />
          <div className="mt-1">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
