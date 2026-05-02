import Home from '@/pages/Home.vue';
import Introduction from '@/components/introduction/Introduction.vue';
import ComponentFeatures from '@/components/componentFeatures/componentFeatures.vue';
import SplitComponentCode from '@/components/splitComponentCode/splitComponentCode.vue';

export const routes = [
  { path: '/', component: Home, title: 'Home', hidden: true },
  { path: '/introduction', component: Introduction, title: 'Introduction' },
  {
    path: '/componentFeatures',
    component: ComponentFeatures,
    title: 'Component Features'
  },
  {
    path: '/splitComponentCode',
    component: SplitComponentCode,
    title: 'Split Component Code'
  }
];
