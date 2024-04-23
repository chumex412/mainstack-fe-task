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

export type DropdownType<E> = {
  type: "select" | "menu";
  name?: string;
  options: OptionsTypes[];
  onSelect: E;
  show: boolean;
  displayOptions?: (val: boolean) => void;
  overlayTop: number;
  highlightedIndex: number | null;
  highlightOption: (optionIndex: number | null) => void;
};
