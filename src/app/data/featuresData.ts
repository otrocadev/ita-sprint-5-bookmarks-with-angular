type FeatureData = {
  title: string;
  selector: string;
  description: string;
  image: string;
};

export const featuresData: FeatureData[] = [
  {
    title: 'Simple Bookmarking',
    selector: 'simple-bookmarking',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your bookmarks.',
    image: 'illustration-features-tab-1.svg',
  },
  {
    title: 'Speedy Searching',
    selector: 'speedy-searching',
    description:
      'Our powerful search functionality allows you to find a bookmark in no time.',
    image: 'illustration-features-tab-2.svg',
  },
  {
    title: 'Easy Sharing',
    selector: 'easy-sharing',
    description: 'Share your bookmarks with anyone, anywhere, anytime.',
    image: 'illustration-features-tab-3.svg',
  },
];
