import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Logo */}
                    <div className="mb-4 md:mb-0">
                        <a href="/" className="text-2xl font-bold">
                            InSureNet
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <a href="#home" className="mb-2 md:mb-0 hover:underline">Home</a>
                        
                        <a href="/privacy" className="mb-2 md:mb-0 hover:underline">Privacy Policy</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12.1C22 6.48 17.52 2 12 2S2 6.48 2 12.1c0 5.07 3.77 9.33 8.68 9.88v-6.98H7.89v-2.9h2.79v-2.2c0-2.76 1.67-4.3 4.14-4.3 1.18 0 2.2.09 2.5.13v2.9h-1.7c-1.33 0-1.6.85-1.6 1.73v2.06h2.79l-.36 2.9h-2.43v6.98c4.91-.55 8.68-4.8 8.68-9.88z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6.03c-.77.35-1.6.59-2.48.69.89-.53 1.57-1.37 1.89-2.38-.83.5-1.76.85-2.75 1.05-.78-.84-1.89-1.37-3.12-1.37-2.36 0-4.28 1.93-4.28 4.33 0 .34.04.67.11.99-3.56-.18-6.71-1.88-8.82-4.47-.37.63-.58 1.37-.58 2.17 0 1.5.76 2.82 1.91 3.58-.71-.02-1.38-.22-1.97-.55v.06c0 2.09 1.49 3.83 3.47 4.23-.36.1-.73.15-1.11.15-.27 0-.53-.03-.79-.08.53 1.65 2.07 2.85 3.88 2.88-1.43 1.11-3.22 1.77-5.16 1.77-.34 0-.67-.02-1-.06 1.83 1.16 4.02 1.84 6.35 1.84 7.63 0 11.8-6.31 11.8-11.8 0-.18 0-.35-.01-.53.81-.59 1.51-1.33 2.07-2.17z"/>
                            </svg>
                        </a>
                      

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
