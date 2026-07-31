export type Note = {
  id: string;
  fileType: string;
  subject: string;
  accentColor: string;
  accentTextColor: string;
  avatarColor: string;
  headerText: string;
  descriptionText: string;
  studentName: string;
  noteReleaseDate: string;
  downloadCount: number;
  starGrade: number;
  isFeatured?: boolean;
  studentAvatarUrl?: string;
};
