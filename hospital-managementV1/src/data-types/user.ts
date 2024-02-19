export interface IAppointment {
  id?: string;
  doctorName?: string;
  doctorAvatar?: string;
  date: string;
  visitTime?: string;
  conditions: string;
  resultDate?: string;
  reportResult?: string;
  dowloadFile?: string;
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  phone: string;
  location?: string;
  avatar?: string;
  background?: string;
  appointments?: IAppointment[];
}
