export const formatTagName = (tagName: string): string => {
  // Remove angle brackets if present and capitalize
  const cleanTag = tagName.replace(/[<>]/g, '');

  return cleanTag.charAt(0).toUpperCase() + cleanTag.slice(1);
};

export const formatSegmentName = (segment: string): string => {
  // Convert kebab-case or snake_case to Title Case
  return segment
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
