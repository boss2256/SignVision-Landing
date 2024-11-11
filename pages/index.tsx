// pages/index.tsx
import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => (
  <div className="bg-background text-text min-h-screen dark">
    <Head>
      <title>SignVision - Communication Made Simple</title>
      <meta name="description" content="SignVision enhances communication for everyone." />
    </Head>

    {/* Header Section with CTA */}
    <header className="flex flex-col items-center py-6 space-y-4">
      <img src="/logo.png" alt="SignVision Logo" className="mb-4" style={{ maxWidth: '200px', height: 'auto' }} />
      <h1 className="text-5xl font-bold mb-2">SignVision</h1>
      <p className="text-lg text-gray-400">Breaking Barriers, Bridging Worlds</p>
    </header>

    {/* Video Embed Section */}
    <section className="flex flex-col items-center my-12 px-4">
      <h2 className="text-3xl font-semibold mb-4">Introduction Video</h2>
      <div className="w-full max-w-5xl" style={{ height: '600px' }}>
        <iframe
          src="https://www.youtube.com/embed/2jbxb5F-lC8"
          title="SignVision Introduction"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="mt-6 flex space-x-4">
        <a
          href="https://signvisiontest-603530e22761.herokuapp.com/"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Click here for demo
        </a>
        <a
          href="https://docs.google.com/document/d/1nKPxY_nx_jld7iLzjey40GA2QfWeVKdg_4U6Iq-Pm3M/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
        >
          Click here to view playbook
        </a>
      </div>
    </section>
    

    {/* Features Section */}
    <section className="text-center my-16 px-4">
      <h2 className="text-3xl font-semibold mb-6">Features</h2>
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-medium">Real-Time Sign Language Translation 🌐</h3>
          <p className="text-gray-400">SignVision leverages cutting-edge AI to provide instant translation of sign language into spoken word.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium">Inclusive Design ❤️</h3>
          <p className="text-gray-400">Our logo and design emphasize accessibility, symbolizing our commitment to inclusive communication.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium">Secure and Private Authentication 🔒</h3>
          <p className="text-gray-400">SignVision ensures secure access through robust authentication methods.</p>
        </div>
      </div>
    </section>

    {/* Screenshots Section */}
    <section className="text-center my-16 px-4">
      <h2 className="text-3xl font-semibold mb-6">Screenshots</h2>
      <div className="flex flex-col items-center space-y-4">
        <img src="/1.png" alt="SignVision Screenshot 1" className="w-full max-w-md rounded-lg shadow-lg" />
        <img src="/2.png" alt="SignVision Screenshot 2" className="w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </section>

    {/* Medium Article Section */}
    <section className="text-center my-16 px-4">
      <h2 className="text-3xl font-semibold mb-6">Read Our Story</h2>
      <p className="max-w-3xl mx-auto text-gray-400">
        Discover the journey and technical insights behind SignVision in our Medium article. 
        <a href="https://medium.com/@nesruler/signvision-a-real-time-mobile-sign-language-recognition-application-using-chatgpt-1ce73a0c6a55" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          Read the full article here
        </a>.
      </p>
    </section>

    {/* Contact Section with Demo Request */}
    <section className="text-center my-16 px-4">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <p className="text-gray-400">For more information or to try a demo, please reach out to us at <a href="mailto:contact@signvision.app" className="text-primary hover:underline">contact@signvision.app</a>.</p>
      <a href="mailto:contact@signvision.app" className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
        Contact to Try Demo
      </a>
    </section>

    {/* Footer */}
    <footer className="py-6 text-center text-gray-500 bg-background">
      © {new Date().getFullYear()} SignVision. All rights reserved.
    </footer>
  </div>
);

export default Home;
