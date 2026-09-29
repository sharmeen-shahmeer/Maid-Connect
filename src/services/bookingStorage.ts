import { BookingFormData, BookingRecord } from '../types';

const STORAGE_KEY = 'maidconnect_bookings_v1';

export const bookingStorage = {
  getAll(): BookingRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];
      return JSON.parse(data) as BookingRecord[];
    } catch (e) {
      console.error('Failed to read bookings from storage', e);
      return [];
    }
  },

  save(formData: BookingFormData): BookingRecord {
    const existing = this.getAll();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newRecord: BookingRecord = {
      ...formData,
      id: `MC-KHI-${randomSuffix}`,
      createdAt: new Date().toISOString(),
      status: 'Pending Confirmation',
    };

    const updated = [newRecord, ...existing];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save booking to storage', e);
    }

    // In a real full-stack setup, this also dispatches to `/api/bookings`
    return newRecord;
  },

  getById(id: string): BookingRecord | undefined {
    const list = this.getAll();
    return list.find((b) => b.id === id);
  },

  updateStatus(id: string, status: BookingRecord['status']): BookingRecord | null {
    const list = this.getAll();
    const index = list.findIndex((b) => b.id === id);
    if (index === -1) return null;

    list[index].status = status;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to update booking status', e);
    }
    return list[index];
  },
};
