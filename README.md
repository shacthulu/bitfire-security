# Bitfire Website

Welcome to the repository for the Bitfire website. Bitfire is a cybersecurity consulting firm specializing in governance, risk and compliance, strategy, and operational support. We focus on compliance and risk assessments, executive advisory/strategy, engineering and deployment, resourcing, and bespoke custom security solutions, including custom coding, automation, and development (DevSecOps, SecDevOps, automation, etc). 

## Table of Contents

- [Bitfire Website](#bitfire-website)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Contact](#contact)

## About

This repository contains the source code for the Bitfire website. Our website is designed to provide detailed information about our services, expertise, and contact information. Although the repository is public, it is not intended for general deployment by external users.  Nearly all visuals are raw Tailwind, though ShadCN was used to bootstrap some components. Formspree was chosen as the Contact submission to prevent the need for any serverless functions. The website is static and intended to be hosted on a CDN.

## Technologies Used

- **Frontend:**
  - React
  - Nextjs 15
  - TypeScript
  - Tailwind
  - ShadCN

- **Backend:**
  - Vercel (CDN)
  - Formspree

## Installation

### Prerequisites

- Node.js
- Nextjs 15
- TypeScript

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shacthulu/bitfire-security.git
   cd bitfire-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The website should now be running at `http://localhost:3000`.

## Usage

This repository is primarily intended for internal use and contributions from team members. While the repository is public, external users are not expected to deploy the website themselves though we will review any issues submitted, particularly surrounding accessibility or security concerns. If you are interested in learning more about our services, please visit our live site or contact us directly.

## Contributing

We welcome contributions from team members. To contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes.**
4. **Commit your changes:**
   ```bash
   git commit -m 'Add some feature'
   ```
5. **Push to the branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

## Contact

For questions, please contact us at:

- **Email:** info@bitfiresecurity.com
- **Website:** [bitfiresecurity.com](https://www.bitfiresecurity.com)

Thank you for visiting our repository!