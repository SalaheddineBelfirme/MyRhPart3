import { CompanyInterface } from '../../interfaces/Company.interface';

export interface CompanyAuthState {
  company: CompanyInterface | null;
  isLogged: boolean;
}

export const initialState: CompanyAuthState = {
  company: null,
  isLogged: false,
};
