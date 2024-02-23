import {JobOfferInterface} from "./jobOffer.interface";


export interface PaginationJobOfferInterface{
   content: JobOfferInterface[];
   pageSize: number;
   pageNo: number;
   totalElements: number;
   totalPages: number;
   last: boolean;
}
