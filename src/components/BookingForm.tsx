import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Banknote,
  Smartphone,
  CreditCard,
  ChevronDown,
  Printer,
  Sparkles,
} from 'lucide-react';
import { BookingFormData, BookingRecord, DHA_Phase, PaymentMethodType, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { DHA_PHASES } from '../data/defenceLocations';
import { bookingStorage } from '../services/bookingStorage';

interface BookingFormProps {
  initialServiceId?: ServiceId;
  initialPhase?: string;
  onBookingCreated?: (record: BookingRecord) => void;
  onBackToHome?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialServiceId,
  initialPhase,
  onBookingCreated,
  onBackToHome,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId || 'all-rounder',
    serviceType: 'one-time',
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM – 12:00 PM)',
    durationHours: 3,
    householdSize: '3-4 Persons',
    dhaPhase: (initialPhase as DHA_Phase) || 'DHA Phase 5',
    streetAddress: 'Street 14, Khayaban-e-Shamsheer',
    additionalRequirements: '',
    cookingMealType: ['Lunch', 'Dinner'],
    elderlyCareNeeds: ['Companionship'],
    fullTimeSchedule: 'day-shift',
    deepCleanFocus: ['Kitchen Deep Degreasing'],
    paymentMethod: 'jazzcash',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  // Sync initial props
  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialPhase) {
      setFormData((prev) => ({ ...prev, dhaPhase: initialPhase as DHA_Phase }));
    }
  }, [initialPhase]);

  const selectedService =
    SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      newErrors.phone = 'Valid phone number is required (e.g. 03001234567)';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const newBooking = bookingStorage.save({
      ...formData,
      streetAddress: formData.streetAddress || 'Defence, Karachi',
      preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
    });

    setConfirmedBooking(newBooking);
    if (onBookingCreated) {
      onBookingCreated(newBooking);
    }
    setStep(4);
  };

  return (
    <section id="booking-section" className="py-16 lg:py-24 bg-[#070B12] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container without enclosing box */}
        <div className="w-full">
          {step === 4 && confirmedBooking ? (
            /* Confirmation Screen */
            <div className="max-w-2xl mx-auto text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2 block">
                Booking Received
              </span>
              <h2 className="font-apple-display text-3xl sm:text-4xl font-semibold text-white mb-4">
                Thank You, {confirmedBooking.fullName}!
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-lg mx-auto">
                Your request has been received. Our coordination desk will verify helper availability and contact you on WhatsApp at <strong className="text-amber-400">{confirmedBooking.phone}</strong>.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left mb-8 max-w-md mx-auto">
                <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs text-slate-400">
                  <span>Booking Reference:</span>
                  <span className="font-mono text-white font-bold">{confirmedBooking.id}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-slate-400">Service:</span>
                  <span className="text-white font-semibold">{selectedService.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-slate-400">Date & Window:</span>
                  <span className="text-white font-semibold">{confirmedBooking.preferredDate} · {confirmedBooking.preferredTime}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-xs">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white font-semibold">{confirmedBooking.dhaPhase}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-white/10 text-xs">
                  <span className="text-slate-400">Payment:</span>
                  <span className="text-amber-400 font-bold uppercase">
                    {confirmedBooking.paymentMethod === 'card'
                      ? 'Debit / Credit Card'
                      : confirmedBooking.paymentMethod}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-[#FEE36E] hover:bg-amber-300 rounded-full transition-all"
                >
                  Book Another Service
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-full transition-all flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
              </div>
            </div>
          ) : (
            /* 3-Column Booking Layout from Screenshot */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Title & Vertical Steps */}
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-amber-400 tracking-widest uppercase mb-2 block">
                    BOOK A SERVICE
                  </span>
                  <h2 className="font-apple-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                    Tell Us What You Need
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                    Fill in the form and we&apos;ll get back to you with the next steps.
                  </p>

                  {/* Vertical Step Indicators matching screenshot */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#FEE36E] text-slate-950 font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                        1
                      </span>
                      <span className="text-sm font-semibold text-white">Service Details</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 font-semibold text-xs flex items-center justify-center shrink-0 border border-white/10">
                        2
                      </span>
                      <span className="text-sm font-normal text-slate-400">Your Information</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 font-semibold text-xs flex items-center justify-center shrink-0 border border-white/10">
                        3
                      </span>
                      <span className="text-sm font-normal text-slate-400">Payment Method</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 font-semibold text-xs flex items-center justify-center shrink-0 border border-white/10">
                        4
                      </span>
                      <span className="text-sm font-normal text-slate-400">Confirmation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column: Clean White Form Sheet matching screenshot */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-xl">
                <form onSubmit={handleContinueBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-slate-50 border ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-200'
                        } rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                      />
                      {errors.fullName && (
                        <p className="text-[10px] text-rose-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-slate-50 border ${
                          errors.phone ? 'border-rose-500' : 'border-slate-200'
                        } rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-rose-500 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.serviceId}
                          onChange={(e) =>
                            setFormData({ ...formData, serviceId: e.target.value as ServiceId })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none pr-8 cursor-pointer"
                        >
                          {SERVICES_DATA.map((srv) => (
                            <option key={srv.id} value={srv.id}>
                              {srv.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Type *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.serviceType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              serviceType: e.target.value as BookingFormData['serviceType'],
                            })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none pr-8 cursor-pointer"
                        >
                          <option value="one-time">One-Time / Hourly</option>
                          <option value="recurring-daily">Daily Routine (Full / Part-Time)</option>
                          <option value="recurring-weekly">Weekly Scheduled Visits</option>
                          <option value="trial-assessment">Trial Assessment Shift</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.preferredDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDate: e.target.value })
                          }
                          className={`w-full bg-slate-50 border ${
                            errors.preferredDate ? 'border-rose-500' : 'border-slate-200'
                          } rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-[10px] text-rose-500 mt-1">{errors.preferredDate}</p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.preferredTime}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredTime: e.target.value })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none pr-8 cursor-pointer"
                        >
                          <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                          <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                          <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                          <option value="Full Day (9:00 AM – 6:00 PM)">Full Day (9:00 AM – 6:00 PM)</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Duration / Hours */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Duration / Hours *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.durationHours}
                          onChange={(e) =>
                            setFormData({ ...formData, durationHours: Number(e.target.value) })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none pr-8 cursor-pointer"
                        >
                          <option value={2}>2 Hours</option>
                          <option value={3}>3 Hours</option>
                          <option value={4}>4 Hours</option>
                          <option value={6}>6 Hours</option>
                          <option value={8}>8 Hours (Full Day)</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Number of People / Household Size */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Number of People / Household Size
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 3-4 Persons"
                        value={formData.householdSize}
                        onChange={(e) => setFormData({ ...formData, householdSize: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    {/* Location / Area (Defence, Karachi) */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Location / Area *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.dhaPhase}
                          onChange={(e) =>
                            setFormData({ ...formData, dhaPhase: e.target.value as DHA_Phase })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none pr-8 cursor-pointer"
                        >
                          {DHA_PHASES.map((p) => (
                            <option key={p.phase} value={p.phase}>
                              {p.label} · {p.notableAreas.split(',')[0]}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Additional Requirements */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Additional Requirements
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Any special requirements? (e.g. dusting, rotis, ironing, pet in home)"
                        value={formData.additionalRequirements}
                        onChange={(e) =>
                          setFormData({ ...formData, additionalRequirements: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                      />
                    </div>

                    {/* Inline Payment Method Selector */}
                    <div className="sm:col-span-2 pt-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Payment Method *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                          className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            formData.paymentMethod === 'card'
                              ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>Card</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: 'jazzcash' })}
                          className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            formData.paymentMethod === 'jazzcash'
                              ? 'bg-rose-50 border-rose-500 text-rose-700 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                            J
                          </span>
                          <span>JazzCash</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: 'easypaisa' })}
                          className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            formData.paymentMethod === 'easypaisa'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                            e
                          </span>
                          <span>Easypaisa</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: 'cash' })}
                          className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            formData.paymentMethod === 'cash'
                              ? 'bg-amber-50 border-amber-500 text-amber-800 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <Banknote className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Cash</span>
                        </button>
                      </div>
                    </div>

                    {/* Continue Button */}
                    <div className="sm:col-span-2 pt-3">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-full bg-[#FEE36E] hover:bg-amber-300 active:scale-95 text-slate-950 font-bold text-sm transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Continue Booking</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Column: Booking Summary & Payment Options */}
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-4">
                    Booking Summary
                  </h3>

                  {/* Secure payment option box */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                    <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#FEE36E]" />
                      <span>Secure & Easy Payment Options</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Choose your preferred payment method. (Zero charge will be added now.)
                    </p>
                  </div>

                  {/* Payment selection cards matching screenshot */}
                  <div className="space-y-3">
                    {/* Debit / Credit Card */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        formData.paymentMethod === 'card'
                          ? 'bg-white/10 border-[#FEE36E] text-white shadow-sm'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-inner">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Debit / Credit Card</div>
                          <div className="text-[10px] text-slate-400">Visa, Mastercard, PayPak</div>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          formData.paymentMethod === 'card'
                            ? 'border-[#FEE36E]'
                            : 'border-slate-500'
                        }`}
                      >
                        {formData.paymentMethod === 'card' && (
                          <div className="w-2 h-2 rounded-full bg-[#FEE36E]" />
                        )}
                      </div>
                    </div>

                    {/* JazzCash Card */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: 'jazzcash' })}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        formData.paymentMethod === 'jazzcash'
                          ? 'bg-white/10 border-[#FEE36E] text-white shadow-sm'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 to-red-700 flex items-center justify-center font-bold text-white text-xs shadow-inner">
                          Jazz
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">JazzCash</div>
                          <div className="text-[10px] text-slate-400">Pay with JazzCash</div>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          formData.paymentMethod === 'jazzcash'
                            ? 'border-[#FEE36E]'
                            : 'border-slate-500'
                        }`}
                      >
                        {formData.paymentMethod === 'jazzcash' && (
                          <div className="w-2 h-2 rounded-full bg-[#FEE36E]" />
                        )}
                      </div>
                    </div>

                    {/* Easypaisa Card */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: 'easypaisa' })}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        formData.paymentMethod === 'easypaisa'
                          ? 'bg-white/10 border-[#FEE36E] text-white shadow-sm'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center font-bold text-white text-sm shadow-inner">
                          e
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Easypaisa</div>
                          <div className="text-[10px] text-slate-400">Pay with Easypaisa</div>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          formData.paymentMethod === 'easypaisa'
                            ? 'border-[#FEE36E]'
                            : 'border-slate-500'
                        }`}
                      >
                        {formData.paymentMethod === 'easypaisa' && (
                          <div className="w-2 h-2 rounded-full bg-[#FEE36E]" />
                        )}
                      </div>
                    </div>

                    {/* Cash on Delivery Card */}
                    <div
                      onClick={() => setFormData({ ...formData, paymentMethod: 'cash' })}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        formData.paymentMethod === 'cash'
                          ? 'bg-white/10 border-[#FEE36E] text-white shadow-sm'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-inner">
                          <Banknote className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Cash on Delivery</div>
                          <div className="text-[10px] text-slate-400">Pay in Cash</div>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          formData.paymentMethod === 'cash'
                            ? 'border-[#FEE36E]'
                            : 'border-slate-500'
                        }`}
                      >
                        {formData.paymentMethod === 'cash' && (
                          <div className="w-2 h-2 rounded-full bg-[#FEE36E]" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
