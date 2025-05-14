'use client';

import React from 'react';
import Image from 'next/image';
import qr from '../../../Assets/qr.png';
import qr1 from '../../../Assets/Qr-scan.png';

export default function QR() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-tr from-gray-900 to-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-green-400 drop-shadow-lg">
        QR-Based Entry-Exit System
      </h1>

      <p className="text-center max-w-3xl text-neutral-300 mb-10 text-lg md:text-xl">
        Welcome to the University QR Check-in System. Scan the QR code below at the main gate
        to record your <span className="text-blue-400 font-semibold">Entry</span> or{' '}
        <span className="text-pink-400 font-semibold">Exit</span>. This ensures secure and
        accurate log records for students and staff.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-zinc-800 p-4">
          <Image
            src={qr}
            alt="QR Poster at University Gate"
            width={500}
            height={400}
            className="object-cover w-full h-[300px] rounded-lg"
          />
          <p className="text-center text-lg mt-4">QR Poster at the Gate</p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl bg-zinc-800 p-4">
          <Image
            src={qr1}
            alt="Student Scanning QR"
            width={500}
            height={400}
            className="object-cover w-full h-[300px] rounded-lg"
          />
          <p className="text-center text-lg mt-4">Student Scanning at the Gate</p>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition duration-300 ease-in-out">
          Start Scan
        </button>
      </div>

      <div className="mt-10 text-sm text-neutral-400">
        All scan activities are securely logged and monitored.
      </div>
    </div>
  );
}
