import { ServiceId } from '../types';

export interface ChatReply {
  text: string;
  suggestedAction?: {
    label: string;
    actionType: 'select-service' | 'open-booking' | 'call-support';
    serviceId?: ServiceId;
  };
}

export const QUICK_PROMPTS = [
  'Do you provide hourly maids?',
  'Do you work in Clifton or Gulshan?',
  'What payment methods are available?',
  'What is the difference between part-time and full-time?',
  'Can I request cooking help?',
  'How does the booking process work?',
];

export function getBotResponse(userQuery: string): ChatReply {
  const query = userQuery.toLowerCase().trim();

  // Verification check
  if (query.includes('verif') || query.includes('check') || query.includes('trustworthy') || query.includes('safe')) {
    return {
      text: 'Yes! All maids and domestic helpers are personally verified by us before being scheduled for any home in Defence, Karachi.',
      suggestedAction: {
        label: 'Book a Service',
        actionType: 'open-booking',
      },
    };
  }

  // Hourly Maid
  if (query.includes('hourly') || query.includes('per hour') || query.includes('by the hour')) {
    return {
      text: 'Yes! MaidConnect offers hourly home-help bookings. You can choose "Hourly Maid" when filling out the booking form and select the number of hours you need (from 2 to 8 hours).',
      suggestedAction: {
        label: 'Book Hourly Maid',
        actionType: 'select-service',
        serviceId: 'hourly',
      },
    };
  }

  // Clifton / other areas check
  if (
    query.includes('clifton') ||
    query.includes('gulshan') ||
    query.includes('jauhar') ||
    query.includes('pechs') ||
    query.includes('bahria') ||
    query.includes('north nazimabad') ||
    query.includes('malir') ||
    query.includes('lahore') ||
    query.includes('islamabad')
  ) {
    return {
      text: 'Currently, MaidConnect is serving Defence, Karachi exclusively (Phases 1 through 8). We’ll update our service area as we expand to other neighbourhoods like Clifton in the future.',
    };
  }

  // General service area
  if (
    query.includes('area') ||
    query.includes('location') ||
    query.includes('where do you') ||
    query.includes('karachi') ||
    query.includes('defence') ||
    query.includes('dha')
  ) {
    return {
      text: 'MaidConnect is proudly serving Defence (DHA), Karachi, covering Phase 1, Phase 2, Phase 2 Ext, Phase 4, Phase 5, Phase 5 Ext, Phase 6, Phase 7, Phase 7 Ext, and Phase 8.',
    };
  }

  // Part-time vs Full-time
  if (
    (query.includes('part') && query.includes('full')) ||
    query.includes('difference') ||
    query.includes('part-time') ||
    query.includes('full-time')
  ) {
    return {
      text: 'Part-Time Maid provides convenient help for a few hours a day (typically 2 to 4 hours in morning or evening shifts), ideal for apartment maintenance. Full-Time Maid provides regular full-day assistance (8–10 hours) or live-in arrangements for larger homes and families needing continuous support.',
      suggestedAction: {
        label: 'View Maid Services',
        actionType: 'select-service',
        serviceId: 'part-time',
      },
    };
  }

  // Deep cleaning
  if (query.includes('deep clean') || query.includes('deep-cleaning') || query.includes('washroom') || query.includes('kitchen scrub')) {
    return {
      text: 'Our Deep Cleaning service provides detailed attention for kitchens, bathrooms, tiles, windows, and neglected corners. It is ideal before moving in, after renovations, or for quarterly home refreshes in Defence.',
      suggestedAction: {
        label: 'Book Deep Cleaning',
        actionType: 'select-service',
        serviceId: 'deep-cleaning',
      },
    };
  }

  // Cooking
  if (query.includes('cook') || query.includes('food') || query.includes('khana') || query.includes('roti') || query.includes('meal')) {
    return {
      text: 'Yes! We provide home cooking assistance based on your household’s specific preferences. Our cooks can prepare daily Pakistani dishes (salan, daal, sabzi), fresh warm rotis, and breakfast options according to your dietary needs.',
      suggestedAction: {
        label: 'Book Cooking Help',
        actionType: 'select-service',
        serviceId: 'cooking',
      },
    };
  }

  // Laundry
  if (query.includes('laundry') || query.includes('wash clothes') || query.includes('iron') || query.includes('dhobi')) {
    return {
      text: 'Our Laundry service helps with operating washing machines, drying, neat folding, and crisp ironing of your everyday family clothes and bed linens.',
      suggestedAction: {
        label: 'Book Laundry Help',
        actionType: 'select-service',
        serviceId: 'laundry',
      },
    };
  }

  // Elderly care
  if (query.includes('elderly') || query.includes('senior') || query.includes('old age') || query.includes('bunday') || query.includes('care')) {
    return {
      text: 'Our Elderly Care service offers compassionate, patient domestic support for senior family members in Defence — including gentle companionship, walking assistance, serving warm meals, and medication reminders.',
      suggestedAction: {
        label: 'Book Elderly Care',
        actionType: 'select-service',
        serviceId: 'elderly-care',
      },
    };
  }

  // Payment methods
  if (
    query.includes('payment') ||
    query.includes('jazzcash') ||
    query.includes('easypaisa') ||
    query.includes('cash') ||
    query.includes('pay') ||
    query.includes('card')
  ) {
    return {
      text: 'You can choose between JazzCash, Easypaisa, or Cash on Delivery / Cash Payment upon service completion. We believe in complete convenience for Pakistani households with zero upfront deposit requirements.',
    };
  }

  // Pricing / rate questions (Must NOT invent prices!)
  if (query.includes('price') || query.includes('rate') || query.includes('cost') || query.includes('how much') || query.includes('charges')) {
    return {
      text: 'Rates depend on your selected service, shift type, hours, and household size in Defence. When you submit your booking request with your requirements, our support team will provide a transparent, upfront quote with no hidden charges before you confirm.',
      suggestedAction: {
        label: 'Submit Booking for Quote',
        actionType: 'open-booking',
      },
    };
  }

  // Booking process
  if (query.includes('book') || query.includes('how does it work') || query.includes('process') || query.includes('steps') || query.includes('hire')) {
    return {
      text: 'Booking is simple: 1) Fill out the quick online form with your service and DHA location, 2) Select your preferred date, time & payment method, 3) Submit your request. Our team reviews your requirements and contacts you directly via phone or WhatsApp to confirm.',
      suggestedAction: {
        label: 'Open Booking Form',
        actionType: 'open-booking',
      },
    };
  }

  // Contact support / Phone
  if (query.includes('contact') || query.includes('phone') || query.includes('whatsapp') || query.includes('number') || query.includes('call') || query.includes('email')) {
    return {
      text: 'You can reach MaidConnect on WhatsApp/Phone at +92 300 1234567 or email support@maidconnect.pk. Our local Defence team is available to assist you Monday through Saturday from 8:00 AM to 8:00 PM.',
      suggestedAction: {
        label: 'Call / WhatsApp Us',
        actionType: 'call-support',
      },
    };
  }

  // Services list
  if (query.includes('service') || query.includes('what do you do') || query.includes('offer')) {
    return {
      text: 'MaidConnect offers 9 core domestic services in Defence, Karachi: Maid / All-Rounder, Part-Time Maid, Full-Time Maid, Hourly Maid, Deep Cleaning, Cooking, Regular Cleaning, Laundry, and Elderly Care.',
      suggestedAction: {
        label: 'Explore Services',
        actionType: 'open-booking',
      },
    };
  }

  // Fallback for unknown questions
  return {
    text: 'I’m not sure about that yet. Please contact our support team and we’ll help you directly!',
    suggestedAction: {
      label: 'Talk to Support',
      actionType: 'call-support',
    },
  };
}
