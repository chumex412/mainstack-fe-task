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

export interface PrimaryButtonProps {
  value: string;
  customClass?: string;
}
