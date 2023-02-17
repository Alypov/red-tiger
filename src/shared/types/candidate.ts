export type candidate = {
  id: string;
  name: string;
  createdAt?: string;
  contact: string;
  email: string;
  followUpResults?: followUpResults[];
};

export type followUpResults = {
  createdAt: string;
  result: string | undefined;
};
