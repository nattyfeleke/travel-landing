export interface IAccount {
    passwordRetry: {
      numberOfRetry: number;
      timestamp: string;
    };
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    userType: "Admin" | "User" | "Other"; // Assuming different user types
    googleId: string | null;
    paystackId: string;
    accountStatus: "Active" | "Inactive" | "Suspended"; // Assuming possible statuses
    roles: string[]; // Assuming roles are an array of strings
    reference: string;
    automaticLogout: number;
    passwordExpiry: string;
    isLive: boolean;
    isEmailVerified: boolean;
    detail: string;
    createdAt: string;
    updatedAt: string;
    hasPassword: boolean;
  }
  