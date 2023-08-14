export interface IOption {
  value: string;
  label: string;
}

export interface Info {
  title: string;
  description: string;
}

export interface CardProps {
  img: string;
  name: string;
  info: Info[];
  onClick: () => void;
}
