export type employee = {
  id: string;
  name: string;
  lastName: string;
  userImage: string;
  dob: string;
  city: string;
  email: string;
  contact: string;
  emergencyContact: { name: string; contact: string; relation: string };
  position: string;
  initialHireDate: string;
  terminationDate: string;
};
