type Link = {
  name: string;
  path: string;
  icon: string;
};

export interface NavLinksProps {
  links: Link[];
}

export interface BalanceLabelProps {
  title: string;
  amount: number;
}

export interface ButtonProps {
  value: string;
  customClass?: string;
  icon?: string;
}

export interface Transaction {
  title?: string;
  name?: string;
  status?: string;
  amount: number;
  timestamp: Date | string;
}
