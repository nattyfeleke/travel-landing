interface ITag {
    tagId: number;
    tagName: string;
  }
  
  interface ILookUpData {
    destinationName: string;
    destinationType: "REGION" | "COUNTRY" | "CITY"; // Assuming possible types
    destinationId: number;
  }
  
  export interface IDestination {
    destinationName: string;
    dbid: string;
    lookupId: string;
    destinationType: "CITY" | "REGION" | "COUNTRY"; // Assuming possible types
    destinationId: number;
    lookUpData: ILookUpData[];
    tags: ITag[];
  }
  