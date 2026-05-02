import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

import { formatSegmentName, formatTagName } from '@/utils/utils';

interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

const getBreadcrumbs = (
  pathname: string,
  params: Record<string, string | undefined>,
): BreadcrumbItem[] => {
  const items: BreadcrumbItem[] = [
    { label: 'Home', path: '/', icon: <Home className='w-4 h-4' /> },
  ];

  // Parse the pathname to generate breadcrumbs
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return [];

  let currentPath = '';

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Handle different routes
    switch (segment) {
      case 'explore':
        items.push({
          label: 'Explore Tags',
          path: isLast ? undefined : currentPath,
        });
        break;

      case 'dashboard':
        items.push({
          label: 'Dashboard',
          path: isLast ? undefined : currentPath,
        });
        break;

      case 'quiz':
        items.push({
          label: 'Quiz',
          path: isLast ? undefined : currentPath,
        });
        break;

      case 'lesson':
        if (params.lessonId) {
          items.push({
            label: `Lesson ${params.lessonId}`,
            path: isLast ? undefined : currentPath,
          });
        }
        break;

      case 'learn':
        if (params.tagName) {
          items.push({
            label: `Learn: ${formatTagName(params.tagName)}`,
            path: isLast ? undefined : currentPath.replace(params.tagName, ''),
          });
        }
        break;

      case 'playground':
        if (params.tagName) {
          items.push({
            label: `Playground: ${formatTagName(params.tagName)}`,
            path: isLast ? undefined : currentPath.replace(params.tagName, ''),
          });
        }
        break;

      default:
        // Handle dynamic segments
        if (!segment.includes(':') && !params[segment]) {
          const formattedLabel = formatSegmentName(segment);
          if (formattedLabel && formattedLabel !== segment) {
            items.push({
              label: formattedLabel,
              path: isLast ? undefined : currentPath,
            });
          }
        }
        break;
    }
  });

  return items;
};

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const params = useParams();

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  const breadcrumbs = getBreadcrumbs(location.pathname, params);

  return (
    <div className='w-full'>
      <div className='max-w-7xl'>
        <nav aria-label='Breadcrumb'>
          <ol className='flex items-center space-x-2'>
            {breadcrumbs.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <ChevronRight className='w-4 h-4 text-gray-600 flex-shrink-0' />
                  )}

                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-center'
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        className='flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors'
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <span className='flex items-center gap-2 text-sm text-white font-medium'>
                        {item.icon}
                        <span>{item.label}</span>
                      </span>
                    )}
                  </motion.li>
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};
