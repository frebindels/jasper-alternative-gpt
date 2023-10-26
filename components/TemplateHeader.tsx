// components/TemplateHeader.tsx

import { useRouter } from 'next/router';
import React from 'react';

interface TemplateHeaderProps {
    title: string;
    icon: string;
    description: string;
}

const TemplateHeader: React.FC<TemplateHeaderProps> = ({title, description, icon}) => {
    const router = useRouter();
    return (
        <div className='flex items-center justify-between bg-white'>
            <div className="sticky top-0 z-10 flex items-center px-6 py-4 bg-white border-b border-gray-200">
            <div className="mr-6">
                <div className="flex items-center justify-center w-10 h-10 text-gray-500">
                    <div
                        className="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-xl ring-2 ring-offset-2 ring-gray-100 group-hover:ring-gray-200 group-focus:ring-gray-300 group-hover:bg-white">
                        <span dangerouslySetInnerHTML={{ __html: icon }} />

                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate">{title}</h2>
                <p className="w-full text-sm text-gray-500">{description}</p>
            </div>
                    
        </div>
        <div className='m-4'>
        <button 
      onClick={() => router.back()} 
      className="w-20 h-10 font-bold text-white bg-red-600 hover:bg-red-700 rounded-3xl"
    >
      Go Back
    </button>
        </div>
        
        </div>
    );
};

export default TemplateHeader;
