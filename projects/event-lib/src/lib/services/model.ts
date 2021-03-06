import { Moment } from 'moment';

export interface Schedule {
  days: Day[];
  streams?: StreamTo[];
}

export interface Day {
  id: number;
  date: Moment;
  name?: string;
  description?: string;
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  presenters?: string;
  talk?: number;
  isClickable?: boolean;
  stream?: number;
  description?: string;
  room?: string;
  isBreak?: boolean;
}

export interface Talks {
  talks: TalkTo[];
  presenters?: PresenterTo[];
}

// server model

export interface EventTo {
  agenda: AgendaTo;
  presenters: PresenterTo[];
  talks?: TalkTo[];
}

export interface AgendaTo {
  days: DayTo[];
  streams?: StreamTo[];
}

export interface DayTo {
  id: number;
  name: string;
  date: string;
  description?: string;
  timeSlots: TimeSlotTo[];
}

export interface TimeSlotTo {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  presenters?: number[];
  talk?: number;
  stream?: number;
  description?: string;
  room?: string;
  isBreak?: boolean;
}

export interface PresenterTo {
  id: number;
  name: string;
  position?: string;
  description?: string;
  organization?: string;
  imgSrc?: string;
}

export interface StreamTo {
  id: number;
  name: string;
  color: string;
}

export interface TalkTo {
  id: number;
  title: string;
  description?: string;
  presenters: number[];
}
