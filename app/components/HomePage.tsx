"use client"

import Banner from "./layout/sections/Banner";
import Overview from "./layout/sections/Overview";
import Menu from "./layout/sections/Menu";
import ProjectStats from "./layout/sections/ProjectStats";
import InvestmentHighlights from "./layout/sections/InvestmentHighlights";
const PropTypes = dynamic(() => import('./layout/sections/PropTypes'));
const Amenities = dynamic(() => import('./layout/sections/Amenities'));
const Location = dynamic(() => import('./layout/sections/Locations'));
import Contact from "./layout/sections/Contact";
import CTA from "./layout/sections/CTA";
import Footer from "./layout/sections/Footer";
import { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./layout/sections/ContactForm";

import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "OneLink Properties | Aurelia Residences",
  description:
    "Discover Aurelia Residences at Dubai Creek Harbour. Explore premium residences, amenities, pricing and investment opportunities.",
  keywords: [
    "Aurelia Residences",
    "Dubai Creek Harbour",
    "Dubai real estate",
    "OneLink Properties",
  ],
};

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Menu />
      <Banner onOpenModal={openModal} />
      <ProjectStats />
      <Overview onOpenModal={openModal} />
      <InvestmentHighlights />
      <PropTypes />
      <Amenities onOpenModal={openModal} />
      <Location onOpenModal={openModal} />
      <Contact />
      <CTA onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />

      <Modal 
      isOpen = {isModalOpen} 
      onClose={() => setIsModalOpen(false)}
      title="Enquire Now" >
        <ContactForm />
      </Modal>
    </>
    
  );
}
