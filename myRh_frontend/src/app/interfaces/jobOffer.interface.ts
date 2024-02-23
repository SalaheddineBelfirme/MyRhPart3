import {CompanyInterface} from "./Company.interface";


export interface JobOfferInterface {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  company: CompanyInterface;
  profile: string;
  educationLevel: string;
  experienceLevel: string;
  contractType: string;
  status: string;
}
