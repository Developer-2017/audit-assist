
export interface ProjectData {
    ClientId?: number;
    ProjectCode?: string;
    ProjectAlias?: string;
    ProjectName?: string;
    RequiredColumns?: string;
    DueDate?: string;
    isActive?: boolean;
    createdOn?: string | null;
    createdBy?: string;
    updatedOn?: string | null;
    updatedBy?: string;
  }