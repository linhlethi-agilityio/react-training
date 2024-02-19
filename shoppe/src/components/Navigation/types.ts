interface NavigationConfig {
  id: number;
  name: string;
  path: string;
}

export interface INavProps {
  className?: string;
  items: NavigationConfig[];
}
