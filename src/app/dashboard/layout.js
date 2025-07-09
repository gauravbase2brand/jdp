import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex lg:flex-row h-full">
        {/* Sidebar */}
        <div className=' relative z-50 w-[70px]'>
          <aside className="fixed h-full">
            <Sidebar />
          </aside>
        </div>

        {/* Main content */}
        <main className="flex-1 lg:pl-6 lg:pr-6 pl-4 pr-4 pb-6 lg:pt-3 lg:pb-6">
          <Header />
         <div className='container mx-auto space-y-6 max-w-7xl'>
           <div className="">{children}</div>
         </div>
        </main>
      </div>
    </>
  );
}
