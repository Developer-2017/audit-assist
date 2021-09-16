export interface UserData {
  id?: number;
  empCode?: string;
  fName?: string;
  lName?: string;
  mobile?: string;
  email?: string;
  userName?: string;
  password?: string;
  assignedClients?: string;
  assignedProjects?: string;
  isActive?: boolean;
  createdOn?: string | null;
  createdBy?: string;
  updatedOn?: string | null;
  updatedBy?: string;
  deviceId?: string;
}
