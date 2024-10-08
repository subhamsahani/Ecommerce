import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="w-full py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
                class="flex items-center justify-center lg:justify-between flex-col lg:flex-row pb-12 gap-7 lg:gap-0 border-b border-gray-200">
                
                <a href="javascript:;"
                    class="flex items-center gap-2 py-3.5 px-7 rounded-full bg-gray-900 shadow-md text-white font-semibold hover:bg-gray-800">Contact
                    us <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.5 6L14.8333 6M10.6667 11L15.0774 6.58926C15.3552 6.31148 15.4941 6.17259 15.4941 6C15.4941 5.82741 15.3552 5.68852 15.0774 5.41074L10.6667 1"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <div class="flex justify-between flex-col py-8 min-[500px]:py-14 gap-8 min-[500px]:gap-16 lg:gap-0 lg:flex-row">
                <div
                    class="flex flex-col items-center max-lg:justify-center min-[500px]:items-start min-[500px]:flex-row gap-8 sm:gap-12 xl:gap-24">
                    <div class="block">
                        <h4
                            class="text-lg text-gray-900 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                            VEGAIKYA</h4>
                        <ul class="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">About</a></li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Pricing</a></li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Latest</a></li>
                        </ul>
                    </div>
                    <div class="block">
                        <h4
                            class="text-lg text-gray-900 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                            Products</h4>
                        <ul class="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Choices</a>
                            </li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Designs</a></li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Components</a>
                            </li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Library</a>
                            </li>
                        </ul>
                    </div>
                    <div class="block">
                        <h4
                            class="text-lg text-gray-900 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                            Resources</h4>
                        <ul class="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">FAQs</a></li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Quick Start</a></li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Documentation</a></li>
                            <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">User Guide</a></li>
                        </ul>
                    </div>
                </div>
                <div class="block lg:max-w-md">
                    <h3
                        class="font-manrope font-semibold text-2xl text-gray-900 leading-9 mb-8 text-center lg:text-left">
                        Join the newsletter and read the new posts first</h3>
                    <div
                        class="lg:bg-gray-100 lg:rounded-full lg:h-16 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
                        <input type="text" name="email"
                            class="py-3 px-6 bg-gray-100 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none flex-1 w-full max-w-xl mx-auto lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent border border-black rounded-[30px]"
                            placeholder="Your email here..." />
                        <button type="submit"
                            class="py-3.5 px-7 bg-indigo-600 shadow-md rounded-full text-white font-semibold hover:bg-green-700 hover:shadow-lg hover:shadow-indigo-500/100">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="py-9 border-t border-gray-200">
                <div class="flex items-center justify-center flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between">
                <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
        
    </div>
    
                    
                </div>
                
            </div>
            <span class="text-sm text-white-100 ">©<a href="https://pagedone.io/">vegaikya</a> 2024, All rights reserved.</span>
        </div>
    </footer>
  );
}

export default Footer;