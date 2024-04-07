import DashNav from '@/components/DashNav/DashNav';
import '../globals.css'
import DashDrawer from '@/components/DashDrawer/DashDrawer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
      <body className={`bg-[#000] `}>
       <DashNav/>
       <div className='flex flex-col gap-5 lg:gap-1 lg:flex-row '>
       <div className='lg:w-1/4'>
       <DashDrawer/>
       </div>
          <div className='lg:w-3/4 px-10'>{children}</div>
       </div>
          
      </body>

  );
}