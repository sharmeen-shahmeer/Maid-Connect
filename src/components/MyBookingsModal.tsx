import React from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, AlertCircle, Trash2 } from 'lucide-react';
import { BookingRecord } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingRecord[];
  onRefresh?: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  bookings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-[#0E1524] border border-white/15 rounded-[28px] w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h3 className="font-apple-display text-xl font-semibold text-white tracking-tight">My Booking Requests</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Active and past requests for Defence, Karachi
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {bookings.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-10 h-10 text-slate-600 mx-auto mb-3 stroke-1" />
              <div className="text-base font-semibold text-slate-300">No booking requests found</div>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto font-normal">
                Once you submit a booking request, its status and reference details will appear here.
              </p>
            </div>
          ) : (
            bookings.map((booking) => {
              const service = SERVICES_DATA.find((s) => s.id === booking.serviceId);
              return (
                <div
                  key={booking.id}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-amber-400">
                      {booking.id}
                    </span>
                    <span className="text-[11px] font-medium px-3 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {booking.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <h4 className="font-apple-display font-semibold text-white text-base tracking-tight">
                      {service ? service.name : booking.serviceId}
                    </h4>
                    <span className="text-xs font-medium text-slate-300">
                      {booking.paymentMethod === 'cash'
                        ? 'Cash on Delivery'
                        : booking.paymentMethod === 'card'
                        ? 'Debit / Credit Card'
                        : booking.paymentMethod === 'jazzcash'
                        ? 'JazzCash'
                        : 'Easypaisa'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-1 font-normal">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{booking.preferredDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="truncate">{booking.preferredTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">
                        {booking.dhaPhase}, {booking.streetAddress}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                    <span>Contact: {booking.phone}</span>
                    <span>Requested on {new Date(booking.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-white/10 flex items-center justify-between bg-black/40">
          <span className="text-xs text-slate-400">
            For urgent updates, contact WhatsApp: <strong className="text-slate-200">+92 300 1234567</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
