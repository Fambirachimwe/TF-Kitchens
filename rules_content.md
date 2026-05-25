# TF Kitchen Design — AI Development Rules & Website Content Master Document

---

# PART 1 — RULES.MD

# TF Kitchen Design — AI Development Rules

## Project Overview

This project is a modern luxury interior design and kitchen solutions website for TF Kitchen Design.

The website must communicate:

* Luxury craftsmanship
* Premium interiors
* Trust and professionalism
* Modern design expertise
* Conversion-focused user experience

Primary goals:

* Generate quotation requests
* Increase online visibility
* Showcase projects
* Encourage WhatsApp/contact inquiries
* Build credibility

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Framer Motion

## Forms

* React Hook Form
* EmailJS or Formspree

## Icons

* Lucide React

## Animations

* Framer Motion only

## Deployment

* Vercel

---

# Development Principles

## UI/UX Philosophy

The website must feel:

* Elegant
* Spacious
* Modern luxury
* Premium
* Minimalistic
* Conversion-focused

Design inspiration:

* Editorial interior design websites
* Luxury architecture brands
* High-end furniture showrooms

Avoid:

* Overcrowded layouts
* Bright flashy colors
* Excessive animations
* Generic corporate styling
* Cheap-looking UI patterns

---

# Code Standards

## React Rules

* Use functional components only
* Use reusable components
* Keep components modular
* Use props effectively
* Avoid duplicated UI
* Use semantic HTML
* Keep components small and maintainable

---

## Tailwind Rules

* Use utility-first styling
* Avoid inline CSS
* Use consistent spacing system
* Maintain responsive design
* Reuse utility patterns

---

## File Naming

Use:

* PascalCase for components
* camelCase for hooks/utils
* kebab-case for assets

Examples:

* HeroSection.jsx
* ServiceCard.jsx
* useScrollAnimation.js
* kitchen-project.jpg

---

# Folder Structure

```bash
src/
 ├── assets/
 ├── components/
 ├── sections/
 ├── pages/
 ├── layouts/
 ├── data/
 ├── animations/
 ├── hooks/
 ├── routes/
 ├── styles/
 ├── utils/
 └── constants/
```

---

# Color System

```js
export const colors = {
  primary: '#262262',
  secondary: '#bf1e2e',
  background: '#ffffff',
  text: '#24130f',
  muted: '#6b6b6b',
  light: '#f5f5f5',
}
```

---

# Typography Rules

## Heading Font

* Playfair Display

## Body Font

* Poppins

---

# Animation Rules

Animations must be:

* Smooth
* Minimal
* Elegant
* Performance-friendly

Allowed:

* Fade up
* Fade in
* Scale reveal
* Image zoom on hover
* Card lift hover

Avoid:

* Bouncing effects
* Excessive parallax
* Aggressive motion
* Long animation delays

Transition timing:

* 0.3s–0.5s

---

# Responsive Rules

The website must be:

* Mobile-first
* Tablet optimized
* Desktop optimized

Requirements:

* Large touch targets
* Responsive typography
* Single-column mobile layouts
* Optimized image loading

---

# SEO Rules

Every page must include:

* Meta title
* Meta description
* Proper heading hierarchy
* Alt text on images
* Semantic HTML

Use:

* Lazy-loaded images
* Optimized image formats
* Structured content

---

# Accessibility Rules

Requirements:

* Keyboard navigation support
* Proper contrast ratios
* Accessible form labels
* Alt text on images
* Focus states on buttons/links

---

# Performance Rules

Requirements:

* Lazy load large images
* Use responsive images
* Optimize animations
* Avoid unnecessary re-renders
* Minimize large dependencies

Target:

* Lighthouse score above 90

---

# Component Inventory

Required Components:

```txt
Navbar
MobileMenu
HeroSection
SectionHeading
ServiceCard
ProjectCard
GalleryGrid
CTASection
FAQAccordion
ContactForm
Footer
WhatsAppButton
StatsSection
TestimonialsSection
ProcessTimeline
PageBanner
```

---

# Section Spacing Rules

Desktop:

* 100px–140px vertical spacing

Mobile:

* 60px–80px vertical spacing

Container Width:

* max-w-7xl

---

# Image Style Rules

Images must:

* Feel warm and premium
* Be high resolution
* Showcase craftsmanship
* Use natural lighting
* Match luxury interiors aesthetic

Avoid:

* Low-quality images
* Stock-looking generic images
* Overly saturated edits

---

# Conversion Optimization Rules

Primary CTA buttons must appear:

* In hero section
* After services
* After projects
* In contact section
* In footer
* Floating WhatsApp CTA

CTA text examples:

* Request a Quote
* Book Consultation
* View Our Projects
* Contact Us
* WhatsApp Us

---

# Form Rules

Contact forms must:

* Be simple and fast
* Validate inputs
* Include success states
* Include loading states
* Support mobile devices

Required fields:

* Full name
* Email
* Phone number
* Service required
* Project details

Optional:

* Budget range
* Image uploads

---

# Navigation Rules

Navbar behavior:

* Transparent at top
* Solid background on scroll
* Sticky navigation
* Smooth transitions

Mobile menu:

* Fullscreen overlay
* Smooth animations
* Clear CTA buttons

---

# Design Principles

The website should feel:

* Expensive
* Trustworthy
* Calm
* Clean
* Premium
* Professional

Every section should prioritize:

* Visual clarity
* Large imagery
* Strong hierarchy
* Emotional appeal
* Lead generation

---

# Content Tone

Tone should be:

* Professional
* Warm
* Sophisticated
* Confident
* Reassuring

Avoid:

* Overly technical wording
* Excessive marketing buzzwords
* Robotic language

---

# Future Scalability

Architecture should support future additions:

* CMS integration
* Admin dashboard
* Blog
* Booking system
* Multi-language support

---

# END OF RULES.MD

# PART 2 — WEBSITE CONTENT MASTER FILE

# TF Kitchen Design — Website Content

---

# GLOBAL BRAND MESSAGING

## Brand Positioning Statement

TF Kitchen Design creates elegant, functional, and modern interior spaces tailored to each client’s lifestyle, vision, and budget.

We specialize in premium kitchen installations, custom cabinetry, bathroom vanities, tiling, plumbing, and interior finishing solutions for residential and commercial spaces.

---

# Primary Brand Message

Luxury Interior Solutions Crafted With Precision.

---

# Secondary Brand Message

Modern kitchens, stylish interiors, and premium craftsmanship designed to transform your space.

---

# Trust Messaging

* Professional workmanship
* Reliable project delivery
* Custom-built solutions
* Residential & commercial expertise
* Quality finishes
* Transparent quotations

---

# HOME PAGE CONTENT

# Hero Section

## Main Heading

Luxury Kitchens & Interior Spaces Crafted With Precision

---

## Hero Description

At TF Kitchen Design, we transform ordinary spaces into elegant modern interiors through custom kitchen installations, built-in cupboards, bathroom vanities, tiling, plumbing, and premium finishing solutions.

---

## Primary CTA

Request a Quote

## Secondary CTA

View Our Projects

---

# Trust Strip

## Heading

Trusted Interior & Kitchen Design Specialists

## Supporting Text

Delivering stylish, functional, and high-quality interior solutions for homes and businesses.

---

# About Preview Section

## Section Label

ABOUT US

## Heading

Crafting Beautiful Spaces With Modern Design Excellence

## Description

TF Kitchen Design specializes in creating elegant and functional interiors tailored to each client’s needs. From luxurious kitchens and custom-built cupboards to bathroom vanities, tiling, and plumbing, we bring craftsmanship, precision, and creativity into every project.

Our team focuses on quality workmanship, premium finishes, and exceptional attention to detail to ensure every space feels modern, practical, and timeless.

---

## CTA

Learn More

---

# Services Overview Section

## Section Label

OUR SERVICES

## Heading

Interior Solutions Designed Around Your Lifestyle

## Description

We provide complete interior installation and finishing solutions for residential and commercial spaces.

---

# Service 1

## Title

Kitchen Design & Installation

## Description

Custom-designed kitchens crafted for functionality, elegance, and everyday living.

---

# Service 2

## Title

Built-In Cupboards

## Description

Modern storage solutions designed to maximize space while maintaining a premium finish.

---

# Service 3

## Title

Bathroom Vanities

## Description

Stylish and durable vanity installations tailored to complement your bathroom design.

---

# Service 4

## Title

Bar Areas

## Description

Sophisticated entertainment spaces built with modern aesthetics and practical layouts.

---

# Service 5

## Title

Tiling

## Description

Professional wall and floor tiling solutions with clean finishes and modern styling.

---

# Service 6

## Title

Plumbing

## Description

Reliable plumbing services integrated seamlessly into your renovation or installation project.

---

# Why Choose Us Section

## Heading

Why Clients Choose TF Kitchen Design

---

## Feature 1

Premium Workmanship

We focus on quality finishes, precision installations, and attention to detail.

---

## Feature 2

Modern Luxury Designs

Every project is designed to combine elegance, practicality, and contemporary styling.

---

## Feature 3

Tailored Solutions

We customize every project according to your needs, space, and budget.

---

## Feature 4

Reliable Delivery

Our process ensures transparency, communication, and efficient project completion.

---

# Process Section

## Section Label

HOW WE WORK

## Heading

A Simple & Transparent Process

---

## Step 1

Request a Quotation

Reach out to us with your project details and requirements.

---

## Step 2

Site Visit

We assess your space, take measurements, and discuss your vision.

---

## Step 3

Design

Our team creates a custom solution tailored to your style and functionality needs.

---

## Step 4

Receive Quotation

We provide a transparent and detailed quotation for approval.

---

## Step 5

Deposit Payment

Secure your project with a convenient deposit payment.

---

## Step 6

Installation

Our skilled team handles installation with professionalism and precision.

---

## Step 7

Project Handover

Final inspection and handover once everything meets your expectations.

---

# Featured Projects Section

## Heading

Explore Our Recent Projects

## Description

Browse some of our completed interior and kitchen installations showcasing craftsmanship, modern styling, and premium finishes.

---

# Testimonials Section

## Heading

What Our Clients Say

---

## Testimonial 1

“TF Kitchen Design completely transformed our kitchen space. The workmanship and attention to detail exceeded our expectations.”

— Sarah M.

---

## Testimonial 2

“Professional, reliable, and highly skilled. The final result looked even better than we imagined.”

— David & Amanda

---

## Testimonial 3

“Their team handled our cupboards and tiling beautifully. Excellent communication throughout the project.”

— Michael T.

---

# FAQ SECTION

## Heading

Frequently Asked Questions

---

## Question 1

Do you offer free quotations?

### Answer

Yes. We provide consultations and quotations based on your project requirements and site assessment.

---

## Question 2

Do you work on commercial projects?

### Answer

Yes. We handle both residential and commercial interior installation projects.

---

## Question 3

How long does installation take?

### Answer

Project timelines vary depending on the size and complexity of the work. We provide estimated timelines during the quotation stage.

---

## Question 4

Can you customize designs?

### Answer

Absolutely. Every project is tailored to your space, style preferences, and budget.

---

## Question 5

Which areas do you service?

### Answer

We primarily operate in Randburg and surrounding areas, but we can also discuss projects in other locations.

---

## Question 6

Do you handle plumbing and tiling as part of installations?

### Answer

Yes. We provide complete installation solutions including plumbing and tiling where required.

---

## Question 7

How do I request a quotation?

### Answer

You can request a quotation through our website contact form, WhatsApp, or by calling us directly.

---

# FINAL CTA SECTION

## Heading

Ready To Transform Your Space?

## Description

Let TF Kitchen Design bring your vision to life with modern interior solutions crafted for style, comfort, and functionality.

---

## CTA Buttons

* Request a Quote
* Contact Us

---

# ABOUT PAGE CONTENT

# Hero Heading

About TF Kitchen Design

---

# Intro Paragraph

TF Kitchen Design is passionate about transforming spaces through modern interior design, quality craftsmanship, and functional solutions.

We specialize in kitchen installations, custom cupboards, bathroom vanities, tiling, plumbing, and interior finishing services tailored to residential and commercial clients.

Our mission is to create elegant spaces that combine beauty, practicality, and long-lasting quality.

---

# Mission Statement

To deliver stylish, functional, and high-quality interior solutions that enhance the way people live and work.

---

# Vision Statement

To become a trusted leader in modern kitchen and interior installation solutions through innovation, craftsmanship, and customer satisfaction.

---

# Core Values

## Quality

We believe every detail matters.

## Integrity

We value transparency, honesty, and professionalism.

## Creativity

We create tailored interior solutions that reflect modern lifestyles.

## Reliability

We deliver projects with commitment and consistency.

---

# SERVICES PAGE CONTENT

# Hero Heading

Our Services

---

# Intro Paragraph

We provide complete interior installation and finishing solutions designed to transform your residential or commercial space.

---

# Kitchen Design & Installation

Transform your kitchen into a stylish and functional centerpiece with custom-designed layouts, premium finishes, and professional installations.

---

# Built-In Cupboards

Our custom-built cupboards maximize storage while maintaining a clean, modern, and elegant aesthetic.

---

# Bathroom Vanities

Enhance your bathroom with modern vanity installations designed for both beauty and practicality.

---

# Bar Areas

Create sophisticated entertainment spaces with custom-designed bar installations tailored to your lifestyle.

---

# Tiling

We provide precision tiling solutions for walls and floors using modern finishes and quality workmanship.

---

# Plumbing

Reliable plumbing services integrated seamlessly into your renovation or interior installation project.

---

# PROJECTS PAGE CONTENT

# Hero Heading

Our Projects

---

# Intro Paragraph

Explore our portfolio of completed kitchen, cupboard, vanity, tiling, and interior installation projects.

---

# Project Categories

* Kitchens
* Built-In Cupboards
* Bathrooms
* Bar Areas
* Tiling
* Plumbing

---

# CONTACT PAGE CONTENT

# Hero Heading

Contact TF Kitchen Design

---

# Intro Paragraph

Have a project in mind? Contact us today to request a quotation or discuss your interior design and installation requirements.

---

# Contact Details

## Address

18 Belarus Street, Ext 7, Cosmo City, Randburg, 2188

---

## Phone Numbers

+27 65 552 9045
+27 71 760 4562

---

## WhatsApp

+27 65 552 9045

---

# Contact Form Heading

Request a Quote

---

# Contact Form Description

Tell us about your project requirements and our team will get back to you with a tailored quotation.

---

# FOOTER CONTENT

## Short Description

Modern kitchen and interior solutions crafted with precision, quality, and style.

---

## Quick Links

* Home
* About Us
* Services
* Projects
* Contact

---

## Services Links

* Kitchen Design
* Built-In Cupboards
* Bathroom Vanities
* Tiling
* Plumbing

---

# SEO METADATA

# Home Page

## Meta Title

TF Kitchen Design | Luxury Kitchen & Interior Solutions

## Meta Description

TF Kitchen Design specializes in modern kitchen installations, built-in cupboards, bathroom vanities, tiling, plumbing, and luxury interior solutions in Randburg and surrounding areas.

---

# About Page

## Meta Title

About TF Kitchen Design | Modern Interior Specialists

## Meta Description

Learn more about TF Kitchen Design and our passion for premium interior installations, modern kitchens, and custom-built solutions.

---

# Services Page

## Meta Title

Interior Installation Services | TF Kitchen Design

## Meta Description

Explore our kitchen installation, cupboard, tiling, plumbing, and bathroom vanity services designed for modern residential and commercial spaces.

---

# Projects Page

## Meta Title

Our Interior Design Projects | TF Kitchen Design

## Meta Description

View completed kitchen, cupboard, tiling, and luxury interior projects by TF Kitchen Design.

---

# Contact Page

## Meta Title

Contact TF Kitchen Design | Request a Quote

## Meta Description

Contact TF Kitchen Design for modern kitchen installations, cupboards, tiling, plumbing, and luxury interior solutions.

---

# LEAD GENERATION STRATEGY

## High Conversion Elements

The website should include:

* Floating WhatsApp button
* Sticky CTA button
* Contact form on multiple pages
* Portfolio-driven storytelling
* Testimonials
* Process section
* Trust messaging
* Strong hero section

---

# HIGH RETENTION UX STRATEGY

To improve retention:

* Use large premium imagery
* Maintain spacious layouts
* Use smooth animations
* Keep sections visually engaging
* Use strong typography hierarchy
* Include before/after project visuals
* Showcase craftsmanship prominently
* Keep navigation simple

---

# MISSING ITEMS MOST WEBSITES FORGET

## Required

* 404 page design
* Loading states
* Empty gallery states
* Mobile optimization
* Image compression
* Analytics setup
* Sitemap.xml
* Robots.txt
* Favicon
* Social sharing preview image
* Open Graph metadata
* Form success/error states
* Privacy policy page
* Terms & conditions page

---

# RECOMMENDED FUTURE FEATURES

* Online booking calendar
* Blog section
* Customer dashboard
* Project progress tracking
* AI quotation estimator
* Client testimonials video section
* Instagram feed integration

---

# FINAL CREATIVE DIRECTION

The website should make visitors feel:

* Inspired
* Confident
* Excited
* Trusting
* Motivated to inquire

Every page should prioritize:

* Strong visuals
* Clear CTAs
* Elegant layouts
* Emotional connection
* Professional credibility
