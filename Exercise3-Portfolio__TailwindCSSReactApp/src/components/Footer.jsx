import React from 'react';


function Footer() {
  return (
    <div id='footer'>
      <footer className="bg-gray-900 text-white text-center py-8 sm:w-full md:w-full lg:w-full xl:w-full">
        <p className="mb-4">Email:naumanbutt2002@gmail.com</p>
        <div className="flex justify-center">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src="whatsappicon_20x20.png" alt="WhatsApp" className="h-8" />
          </a>
          <a href="https://www.facebook.com/naumanbutt2002" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src="facebook_20x20.png" alt="Facebook" className="h-8" />
          </a>
          <a href="https://www.instagram.com/naumanbutt2002" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src="instagram_20x20.png" alt="Instagram" className="h-8" />
          </a>
          <a href="https://youtube.com/naumanbutt2002" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src="youtube_20x20.png" alt="YouTube" className="h-8" />
          </a>
          <a href="https://twitter.com/naumanbutt2002" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src="twittericon_20x20.png" alt="Twitter" className="h-8" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
