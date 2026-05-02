import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export function RootLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Force scroll to top before browser paints
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari

    // Additional fallback using requestAnimationFrame
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    });
  }, [location.pathname, location.key]); // Using both pathname and key to catch all navigations

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black'>
      <Outlet />
    </div>
  );
}
