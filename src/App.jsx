import React from "react";
import GlobalStyles from 'assets/styles/GlobalStyles.jsx';
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "pages/HomePage.jsx";
import AboutKokiPage from "pages/AboutKokiPage.jsx";
import AboutDaikiPage from "pages/AboutDaikiPage.jsx";
import AboutUsPage from "pages/AboutUsPage.jsx";

import WhyLearnPage from "pages/WhyLearnPage.jsx";
import ServicesPage from "pages/ServicesPage";
import FaqPage from "pages/FaqPage.jsx";
import TrialLessonPage from "pages/TrialLessonPage.jsx";
import TestimonialPage from "pages/TestimonialPage.jsx";
import ContactPage from "pages/ContactPage.jsx";

import ScrollToTop from "helpers/scrollToTop";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/jp" element = {<HomePage language = "JP"/>} />
          <Route exact path="/" element = {<HomePage language = "ENG"/>} />
          <Route path="/jp/whyLearn" element = {<WhyLearnPage language = "JP"/>} />
          <Route path="/whyLearn" element = {<WhyLearnPage language = "ENG"/>} />
          <Route path="/jp/aboutUs" element = {<AboutUsPage language = "JP"/>} />
          <Route path="/aboutUs" element = {<AboutUsPage language = "ENG"/>} />
          <Route path="/jp/aboutKoki" element = {<AboutKokiPage language = "JP"/>} />
          <Route path="/aboutKoki" element = {<AboutKokiPage language = "ENG"/>} />
          <Route path="/jp/aboutDaiki" element = {<AboutDaikiPage language = "JP"/>} />
          <Route path="/aboutDaiki" element = {<AboutDaikiPage language = "ENG"/>} />
          <Route path="/jp/service" element = {<ServicesPage language = "JP"/>} />
          <Route path="/service" element = {<ServicesPage language = "ENG"/>} />
          <Route path="/jp/faq" element = {<FaqPage language = "JP"/>} />
          <Route path="/faq" element = {<FaqPage language = "ENG"/>} />
          <Route path="/jp/feedback" element = {<TestimonialPage language = "JP"/>} />
          <Route path="/feedback" element = {<TestimonialPage language = "ENG"/>} />
          <Route path="/jp/trialLesson" element = {<TrialLessonPage language = "JP"/>} />
          <Route path="/trialLesson" element = {<TrialLessonPage language = "ENG"/>} />
          <Route path="/jp/contact" element = {<ContactPage language = "JP"/>} />
          <Route path="/contact" element = {<ContactPage language = "ENG"/>} />
        </Routes>
      </Router>
    </>
  );
}
