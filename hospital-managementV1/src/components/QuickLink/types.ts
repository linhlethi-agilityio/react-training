export interface ILink {
  id: number;
  name: string;
  path: string;
}

interface QuickLinksConfig {
  id: number;
  title: string;
  links: ILink[];
}

export interface IQuickLinksProps {
  item: QuickLinksConfig;
}
