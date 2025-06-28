import React from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-w-md w-full border rounded-lg bg-white shadow-lg">
        <div className="flex flex-col p-5 rounded-lg">
          {/* Custom content goes here */}
          {children}

          <div className="flex justify-end items-center mt-4">
            <button
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
