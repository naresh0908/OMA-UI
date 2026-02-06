import React from 'react';

export const OnionPeel: React.FC = () => {
    return (
        <div className="flex items-center justify-center p-8 w-full h-[400px]">
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Placeholder for the user's uploaded image */}
                <img
                    src="/onboarding-circle.png"
                    alt="The HARTS Model"
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                        // Fallback text if image is missing
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<div class="text-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                    <p class="text-gray-500 font-medium">Image not found</p>
                    <p class="text-sm text-gray-400 mt-1">Please save your image as:</p>
                    <code class="bg-gray-100 px-2 py-1 rounded text-sm block mt-2">public/onboarding-circle.png</code>
                </div>`;
                    }}
                />
            </div>
        </div>
    );
};
