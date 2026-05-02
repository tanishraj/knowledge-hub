import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} - Learn HTML` : 'Learn HTML';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
