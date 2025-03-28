import React from 'react';

export default function ContactButtons() {
  return (
    <div>
      {/* Fixed Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-6 z-50">
        {/* Call Button */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <a href="tel:+27634582860" aria-label="Call us" title="Call us">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8 text-white"
            >
              <path d="M6.6 10.2c1.3 2.5 3.2 4.4 5.7 5.7l1.9-1.9c.2-.2.5-.3.8-.2.9.3 1.9.5 2.9.5.5 0 1 .4 1 1v3.2c0 .5-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.5-1 1-1h3.2c.5 0 1 .4 1 1 0 1 .2 2 .5 2.9.1.3 0 .6-.2.8l-1.9 1.9z" />
            </svg>
          </a>
        </div>

        {/* WhatsApp Button */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <a
            href="https://wa.me/27634582860"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M16.01 2.94c-7.23 0-13.07 5.84-13.07 13.07 0 2.3.6 4.57 1.72 6.55l-1.81 5.93 6.07-1.79a13.03 13.03 0 0 0 7.09 2.03c7.23 0 13.07-5.84 13.07-13.07 0-7.23-5.84-13.07-13.07-13.07zm0 23.88a10.79 10.79 0 0 1-5.65-1.56l-.41-.25-3.61 1.07 1.11-3.58-.27-.43a10.81 10.81 0 1 1 8.83 5.74zm5.9-8.06c-.32-.16-1.89-.93-2.18-1.03-.29-.11-.5-.16-.72.16s-.83 1.03-1.02 1.25c-.19.22-.37.25-.69.08s-1.34-.5-2.55-1.6c-.94-.84-1.57-1.88-1.75-2.19-.18-.31-.02-.49.13-.63.13-.13.3-.31.45-.47.14-.16.19-.23.29-.4s.05-.3-.02-.42-.58-1.38-.8-1.91c-.21-.5-.41-.43-.57-.44H9.71c-.17 0-.45.06-.68.32s-.89.86-.89 2.08.92 2.42 1.05 2.6c.13.18 1.82 2.84 4.41 3.95.62.27 1.1.44 1.47.56.62.19 1.18.16 1.62.1.49-.08 1.52-.61 1.73-1.2.22-.6.22-1.11.15-1.21-.06-.11-.24-.17-.49-.29z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
