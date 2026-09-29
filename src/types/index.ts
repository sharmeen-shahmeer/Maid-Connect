export type ServiceId =
  | 'all-rounder'
  | 'part-time'
  | 'full-time'
  | 'hourly'
  | 'deep-cleaning'
  | 'cooking'
  | 'cleaning'
  | 'laundry'
  | 'elderly-care';

export type ServiceCategory = 'all' | 'maid' | 'cleaning' | 'specialized';

export interface ServiceItem {
  id: ServiceId;
  name: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  accentColor: 'yellow' | 'lavender' | 'cyan' | 'lime' | 'coral';
  icon: string;
  popularFor: string[];
  image?: string;
  defaultDuration?: string;
}

export type PaymentMethodType = 'cash' | 'jazzcash' | 'easypaisa' | 'card';

export type DHA_Phase =
  | 'DHA Phase 1'
  | 'DHA Phase 2'
  | 'DHA Phase 2 Ext'
  | 'DHA Phase 4'
  | 'DHA Phase 5'
  | 'DHA Phase 5 Ext'
  | 'DHA Phase 6'
  | 'DHA Phase 7'
  | 'DHA Phase 7 Ext'
  | 'DHA Phase 8';

export interface BookingFormData {
  serviceId: ServiceId;
  serviceType: 'one-time' | 'recurring-daily' | 'recurring-weekly' | 'trial-assessment';
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  durationHours?: number; // for hourly maid (e.g. 2, 3, 4, 6)
  householdSize: string; // e.g. "2-3 Bedrooms", "4+ Bedrooms / Portion", "Small Apartment"
  dhaPhase: DHA_Phase;
  streetAddress: string;
  additionalRequirements: string;
  // Specific dynamic fields
  cookingMealType?: string[];
  elderlyCareNeeds?: string[];
  fullTimeSchedule?: 'day-shift' | 'live-in';
  deepCleanFocus?: string[];
  paymentMethod: PaymentMethodType;
}

export interface BookingRecord extends BookingFormData {
  id: string;
  createdAt: string;
  status: 'Pending Confirmation' | 'Under Review' | 'Confirmed';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'services' | 'booking' | 'payment';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    actionType: 'select-service' | 'open-booking' | 'call-support';
    serviceId?: ServiceId;
  };
}
