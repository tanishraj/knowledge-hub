import { useParams } from 'react-router-dom';

import { TagExplanation } from '@/components/TagExplanation';

export function ExplanationWrapper() {
  const { tagName } = useParams<{ tagName: string }>();

  return <TagExplanation tagName={tagName || ''} />;
}
