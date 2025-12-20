'use client';

import React, { useState } from 'react';
import { MapPin, Bell } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const WeddingInvitation: React.FC = () => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const calendarStartOffset = 0; // December 1st, 2025 is a Monday (0 offset for M-T-W-T-F-S-S)

  const [showReminders, setShowReminders] = useState(false);

  const downloadICS = (reminderType: 'morning' | 'yesterday' | '2days') => {
    // Event Details: Dec 28, 2025, 11:00 AM IST
    // IST is UTC+5:30. 11:00 AM IST = 05:30 AM UTC.
    const eventStart = '20251228T053000Z';
    const eventEnd = '20251228T093000Z'; // 3 PM IST -> 09:30 AM UTC (4 hours duration)

    let alarmTrigger = '-PT3H'; // Default: 3 hours before (8 AM)
    let description = 'Wedding of Raziq & Amna';

    switch (reminderType) {
      case 'morning':
        alarmTrigger = '-PT3H'; // 11 AM - 3 hours = 8 AM
        break;
      case 'yesterday':
        alarmTrigger = '-P1D'; // 1 day before
        break;
      case '2days':
        alarmTrigger = '-P2D'; // 2 days before
        break;
    }

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//RaziqAndAmna//Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:Wedding: Raziq & Amna`,
      `UID:${new Date().getTime()}@raziqandamna.com`,
      `DTSTART:${eventStart}`,
      `DTEND:${eventEnd}`,
      'LOCATION:White Land Conventional Centre, Kannamvettikkavu, Ayikkarapadi',
      'DESCRIPTION:We cordially invite you to celebrate our wedding.\\n\\nNikah: 10:00 AM @ Irshadul Islam Juma Masjid\\nReception: 11:00 AM @ White Land Convention Centre',
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'ACTION:DISPLAY',
      'DESCRIPTION:Wedding Reminder',
      `TRIGGER:${alarmTrigger}`,
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\\r\\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding_invitation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowReminders(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-slate-100  font-sans text-white min-h-screen flex justify-center items-center py-8 pb-0 px-1 transition-colors duration-300">
      {/* Font Imports - Usually placed in your index.html or Layout component */}


      {/* Decorative Flowers */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-5 z-10"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [12, 15, 12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            alt="Decoration"
            className="w-36 h-36 rounded-full flower-decoration"
            src="/flower.png"
            width={160}
            height={160}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 -left-14 z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-12, -15, -12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Image
            alt="Decoration"
            className="w-30 h-30 object-cover rounded-full flower-decoration"
            src="/flower.png"
            width={128}
            height={128}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -bottom-50 -right-12 z-10"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-12, -10, -12] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Image
            alt="Decoration"
            className="w-32 h-32 rounded-full flower-decoration"
            src="/flower.png"
            width={128}
            height={128}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute -bottom-190 -left-16 z-10"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-12, -14, -12] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Image
            alt="Decoration"
            className="w-30 h-30 object-cover rounded-full flower-decoration"
            src="/flower.png"
            width={128}
            height={128}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='border-4 border-[#3a4c7c] p-1 pb-0 rounded-t-full mt-10'
      >
        <div className="relative w-full max-w-md bg-[#3a4c7c] rounded-t-full shadow-2xl overflow-hidden border-4 border-white dark:border-gray-600">
          {/* Decorative Background Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
          ></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 px-6 py-12 flex flex-col items-center text-center space-y-6"
          >
            {/* Header Bismillah */}
            <motion.div variants={fadeInUp} className="relative w-40 h-40 mb-4">
              <Image src="/bismi.png" alt="Bismillah" fill className="object-contain" />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-1">
              <p className="font-georgia text-lg tracking-widest text-gray-300 leading-2">In the Name of Allah,</p>
              <p className="font-georgia text-xs text-gray-400">The Most Gracious, The Most Merciful</p>
            </motion.div>

            {/* Names Section */}
            <motion.div variants={fadeInUp} className="mt-8 space-y-0">
              <p className="font-serif text-xl -mb-6 mr-3">Muhammed</p>
              <h1 className="font-serif text-8xl font-light leading-none -mt-2">Raziq</h1>
              <div className="font-wasted text-6xl my-2 text-[#8ca1d9] leading-8">&</div>
              <h1 className="font-serif text-8xl font-light leading-none">Amna</h1>
              <p className="font-serif text-4xl text-right w-full pr-8 -mt-6 ml-6">Jabin</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="dotted-border mt-10"></motion.div>

            {/* Date Section */}
            <motion.div variants={fadeInUp} className="mt-6">
              <h2 className="font-serif text-4xl mb-2 leading-4">Save The Date</h2>
              <div className="flex items-center justify-center gap-1 text-gray-200">
                <div className="text-right leading-tight">
                  <span className="block text-4xl font-amonos text-[#8ca1d9] leading-5">dec</span>
                  <span className="block text-4xl font-amonos text-[#8ca1d9]">2025</span>
                </div>
                <div className="text-8xl font-serif font-semibold leading-none">28</div>
                <div className="text-left leading-tight">
                  <span className="block text-4xl font-amonos text-[#8ca1d9] leading-5">sun</span>
                  <span className="block text-4xl font-amonos text-[#8ca1d9]">11 AM</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="dotted-border mt-10"></motion.div>

            <motion.div variants={fadeInUp} className="mt-4">
              <p className="text-lg font-semibold">White Land Conventional Centre</p>
              <p className="text-sm opacity-80">@Knnamvetikavu, Ayikkarapadi</p>
            </motion.div>

            <motion.a
              variants={fadeInUp}
              href="https://maps.app.goo.gl/85wkBttVRhj1UQod9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-black px-8 py-2 rounded-full flex items-center gap-2 group hover:bg-white hover:text-[#2C406E]"
            >
              <MapPin size={20} />
              <span className="text-lg font-poppins tracking-wide">Location</span>
            </motion.a>

            <motion.div variants={fadeInUp} className="relative w-15 h-15 mb-4">
              <Image src="/dots.png" alt="Bismillah" fill className="object-contain" />
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-0 mb-6 space-y-6">
              <div className="flex items-center justify-center gap-1 font-serif text-8xl ">
                <span>R</span>
                <span className="font-wasted text-6xl text-[#8ca1d9] -mt-3 -mr-2 -ml-2">&</span>
                <span>A</span>
              </div>

              <div className="space-y-4 ">
                <h3 className="font-arsenica text-lg font-bold tracking-wide leading-tight">
                  Dear Beloved Family & Friends!
                </h3>
                <p className="font-arsenica text-base leading-snug text-gray-200 px-4">
                  By the grace of Allah, we are blessed to share this joyous occasion with you as two hearts unite as one.
                </p>
                <p className="font-arsenica text-sm leading-relaxed text-gray-200 px-2 text-center">
                  With immense pleasure, we invite you to witness and celebrate our sacred union in the blessed
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative w-full flex flex-col items-center">
              <button
                onClick={() => setShowReminders(!showReminders)}
                className="mt-6 bg-white/90 text-black px-8 py-2 rounded-full flex items-center gap-2 group hover:bg-white hover:text-[#2C406E] justify-center mx-auto transition-all"
              >
                <Bell size={20} />
                <span className="text-lg font-poppins tracking-wide">Reminder</span>
              </button>

              {/* Reminder Options Dropdown */}
              {showReminders && (
                <div className="absolute bottom-full mb-2 w-3/4 flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300 z-50">
                  <button
                    onClick={() => downloadICS('morning')}
                    className="bg-white/90 text-[#2C406E] py-2 px-4 rounded-xl shadow-lg backdrop-blur-md text-sm font-semibold hover:bg-white transition-colors flex items-center justify-between"
                  >
                    <span>On Morning</span>
                    <span className="text-xs opacity-70">8:00 AM</span>
                  </button>
                  <button
                    onClick={() => downloadICS('yesterday')}
                    className="bg-white/90 text-[#2C406E] py-2 px-4 rounded-xl shadow-lg backdrop-blur-md text-sm font-semibold hover:bg-white transition-colors flex items-center justify-between"
                  >
                    <span>Yesterday</span>
                    <span className="text-xs opacity-70">1 Day Before</span>
                  </button>
                  <button
                    onClick={() => downloadICS('2days')}
                    className="bg-white/90 text-[#2C406E] py-2 px-4 rounded-xl shadow-lg backdrop-blur-md text-sm font-semibold hover:bg-white transition-colors flex items-center justify-between"
                  >
                    <span>2 Days Before</span>
                    <span className="text-xs opacity-70">Dec 26</span>
                  </button>
                </div>
              )}

              <p className="font-georgia text-md text-center mt-4 px-4 text-gray-300 tracking-wide leading-none">
                Don’t miss this special day! Add our wedding events to your calendar and get notification
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative w-15 h-15 mb-4">
              <Image src="/dots.png" alt="Bismillah" fill className="object-contain" />
            </motion.div>

            {/* Calendar Grid */}
            <motion.div variants={fadeInUp} className="w-full max-w-xs mx-auto mt-0">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Image src="/calender2.png" alt="Calendar Icon" width={60} height={60} />
                <div className="text-left font-montserrat">
                  <h3 className="text-3xl font-montserrat font-medium leading-none ">Dec 2025</h3>
                  <p className="text-sm opacity-80 font-poppins">Hold the Date</p>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center font-poppins text-sm mb-8">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
                  <div key={day} className="opacity-60">{day}</div>
                ))}
                {daysInMonth.map(day => (
                  <div key={day} className={`relative flex items-center justify-center ${day === 28 ? 'font-bold' : ''}`}>
                    {day === 28 && (
                      <>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 bg-white/20 rounded-full scale-125"
                        ></motion.div>
                        <span className="absolute -top-3 right-0 text-pink-300 text-[20px]">♥</span>
                      </>
                    )}
                    <span className="relative z-10">{day}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Event Details */}
            <motion.div variants={fadeInUp} className="w-full space-y-10">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <h2 className="text-4xl font-amonos">Nikah</h2>
                  <div className="w-15 h-15 flex items-center justify-center">
                    <Image src="/heartcercle2.png" alt="Heart Icon" width={60} height={60} />
                  </div>
                </div>
                <div className="font-montserrat">
                  <p className="font-bold">Dec 28th 10 AM</p>
                  <p className="text-sm opacity-90">Irshadul Islam Juma masjid, Puthukkode</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-15 h-15 flex items-center justify-center">
                    <Image src="/food2.png" alt="Food Icon" width={60} height={60} />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl font-amonos leading-none">welcome</h2>
                    <h2 className="text-2xl font-amonos font-light leading-none">reception</h2>
                  </div>
                </div>
                <div className="font-montserrat">
                  <p className="font-bold font-poppins">Dec 28th 11 AM</p>
                  <p className="text-sm opacity-90">White Land Convention Centre, Kannamvettikkavu</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative w-15 h-15 mb-4">
              <Image src="/dots.png" alt="Bismillah" fill className="object-contain" />
            </motion.div>

            <div className="flex items-center justify-center mt-0">
              <Image src="/barakallah1.png" alt="Food Icon" width={400} height={400} />
            </div>

            <motion.p variants={fadeInUp} className="font-serif text-sm italic opacity-90 mb-8 -mt-4 px-4 leading-relaxed">
              "May Allah bless you, shower His blessings upon you, and bring you together in goodness"
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div >
  );
};

export default WeddingInvitation;