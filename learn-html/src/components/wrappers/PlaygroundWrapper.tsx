import { useParams } from 'react-router-dom';

import { TagPlayground } from '@/components/TagPlayground';

export function PlaygroundWrapper() {
  const { tagName } = useParams<{ tagName: string }>();

  return <TagPlayground tagName={tagName || ''} />;
}
