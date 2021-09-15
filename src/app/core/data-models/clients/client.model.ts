export interface ClientModel{
     id:number;
     clientCode:string;
     clientAlias:string;
     organizationName:string;
     sPOCName:string;
     sPOCEmail:string;
     sPOCMobile:string;
     escalationName:string;
     escalationEmail:string;
     escalationMobile:string;
     address: string;
     isActive:boolean;
     createdOn:string | null;
     createdBy: string;
     updatedOn: string;
     updatedBy: string;
}