type Link<T> = {
  name: string;
  path: string;
  Icon: T;
};

export interface NavLinksProps<T> {
  links: Link<T>[];
}

export interface MenuButtonProps {
  firstName: string;
  lastName: string;
  email: string;
}

export interface BalanceLabelProps {
  title: string;
  amount: number;
}

export interface ButtonProps<T> {
  label?: string | T;
  value?: string;
  customClass?: string;
  icon?: string;
}

export interface Transaction {
  title?: string;
  type: string;
  name?: string;
  status?: string;
  amount: number;
  timestamp: Date | string;
}

export interface ModalProps<T> {
  children: T;
  show: boolean;
  width?: number;
  zIndex?: number;
  modalHeader?: T;
  hideClose?: boolean;
  onClose: () => void;
}

export type OptionActionTypes = "down" | "up";

export type OptionsTypes = {
  checked?: boolean;
  value: string;
  label: string;
  icon?: string;
};

export type CustomSelectProps = {
  type?: "select";
  options: OptionsTypes[];
  name: string;
  label: string;
  error?: string;
  show: boolean;
  onOptionsShow: (val: boolean) => void;
};

export type DropdownType<T, S> = {
  type: "select" | "menu";
  width: string | number;
  name?: string;
  options: OptionsTypes[];
  header?: S;
  onSelect: T;
  show: boolean;
  displayOptions?: (val: boolean) => void;
  overlayTop: number;
  highlightedIndex: number | null;
  highlightOption: (optionIndex: number | null) => void;
};

export interface BadgeProps<T> {
  title: string;
  onClick: (e: T) => void;
  index: number;
  selected: boolean;
}

interface Icons<T> {}

export interface IconProps<T> extends Icons<T> {
  color?: string;
}
