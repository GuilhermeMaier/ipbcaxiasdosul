export interface Member {
  id: number;
  role: string;
  name: string;
}

export interface Board {
  id: number;
  type: string;
  members: Member[];
}

export interface Event {
  id: number;
  name: string;
  time: string;
  description?: string;
}

export interface ChurchData {
  adress: string;
  phone: string;
  boards: Board[];
  events: Event[];
}
