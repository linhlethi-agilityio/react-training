interface NavigationConfig {
  id: number;
  name: string;
  path: string;
}

export interface INavigationProps {
  items: NavigationConfig[];
}
