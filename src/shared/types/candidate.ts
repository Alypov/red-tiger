export type candidate = {
  name: string;
  createdAt?: string;
  contact: string;
  email: string;
  followUpResults?: followUpResults[];
};

type followUpResults = {
  createdAt: string;
  result: string;
};
