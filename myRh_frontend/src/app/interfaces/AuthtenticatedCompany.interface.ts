

export interface AuthenticatedCompanyInterface {
  id: number;
  name: string;
  description: string;
  logo: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  password: string;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  username: string;
  enabled: boolean;
  recruiters: any;

}
