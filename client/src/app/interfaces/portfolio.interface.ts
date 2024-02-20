export interface IPortfolio {
  id: string;
  production: boolean;
  name: string;
  description: string;
  country: string;
  project_partner: string;
  technology_type: ITechTypes;
  highlights: IHighlights[];
  inventory: IInventory[];
  mechanism: string;
  state: string;
  issuance_type: string;
  latitude: any;
  longitude: any;
  photos: IPhotos[];
  verifier: string;
  standard: IStandard;
  sdgs: ISDGs[];
  tagline: string;
  disclaimers: IDisclaimers[];
}

export interface IPhotos {
  url: string;
  id: string;
}

export interface ITechTypes {
  slug: string;
  name: string;
  parent_technology_type: IParentTechType[];
}

export interface IParentTechType {
  slug: string;
  name: string;
}

export interface IHighlights {
  slug: string;
  title: string;
  icon_url: string;
}

export interface IInventory {
  vintage_year: any;
  vintage_start_year: any;
  vintage_end_year: any;
  amount_available: any;
  price: any;
  currency: string;
  unit: string;
}

export interface IStandard {
  type: string;
  acronym: string;
  description: string;
}

export interface ISDGs {
  title: string;
  number: any;
  description: string;
  url: string;
}

export interface IDisclaimers {
  header: string;
  severity: string;
  body: string;
  link_text: string;
  link_destination: string;
}