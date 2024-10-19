import React from 'react';

function FilterSidebar() {
  return (
    <div className="w-72">
      <div className="border-b border-gray-200 py-4">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Gender</h3>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox.svg" alt="checkbox" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Male</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-2.svg" alt="checkbox" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Female</span>
        </div>
      </div>

      <div className="border-b border-gray-200 py-4">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Color</h3>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-3.svg" alt="checkbox" className="w-4 h-4" />
          <img src="/assets/frame-74.svg" alt="color" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Red</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-4.svg" alt="checkbox" className="w-4 h-4" />
          <img src="/assets/frame-74-2.svg" alt="color" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Apricot</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-5.svg" alt="checkbox" className="w-4 h-4" />
          <img src="/assets/frame-74-3.svg" alt="color" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Black</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-6.svg" alt="checkbox" className="w-4 h-4" />
          <img src="/assets/frame-74-4.svg" alt="color" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Black & White</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-7.svg" alt="checkbox" className="w-4 h-4" />
          <img src="/assets/frame-74-5.svg" alt="color" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Silver</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-8.svg" alt="checkbox" className="w-4 h-4" />
          <img src="/assets/frame-74-6.svg" alt="color" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Tan</span>
        </div>
      </div>

      <div className="border-b border-gray-200 py-4">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Price</h3>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 border border-gray-200 p-2 w-28">
            <span className="text-sm">Min</span>
            <img src="/assets/arrow-unfold-more.svg" alt="dropdown" className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2 border border-gray-200 p-2 w-28">
            <span className="text-sm">Max</span>
            <img src="/assets/arrow-unfold-more-2.svg" alt="dropdown" className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-4">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Breed</h3>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-9.svg" alt="checkbox" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Small</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-10.svg" alt="checkbox" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Medium</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/checkbox-11.svg" alt="checkbox" className="w-4 h-4" />
          <span className="font-medium text-sm text-gray-900">Large</span>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;