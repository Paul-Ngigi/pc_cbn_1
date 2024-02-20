export interface IEmission {
  scope: string;
  description: string;
  items: IEmissionItem[];
}

export interface IEmissionItem {
  title: string;
  description: string;
}
