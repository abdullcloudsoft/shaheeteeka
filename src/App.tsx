/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Highlights />
        <Menu />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

