type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

// Page 를 키로 삼고 PageInfo 를 밸류로 삼음
const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};
