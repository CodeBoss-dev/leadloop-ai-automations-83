
import React from 'react';

const VideoSection = () => {
  return (
    <section className="section-container py-16 bg-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          See How It Works
        </h2>
        
        <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
          {/* 16:9 aspect ratio wrapper */}
          <div className="pb-[56.25%] relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Genoxys Automation Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-softGray mb-6">
            Learn how our AI-driven automation system qualifies and routes leads to save your sales team valuable time.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                // You would typically show a toast notification here
                alert("Link copied to clipboard!");
              }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md text-softGray"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Share Link
            </button>
            
            <a
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20automation%20tool%20from%20Genoxys!&url=REPLACE_WITH_YOUR_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 rounded-md text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
              </svg>
              Share on Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
