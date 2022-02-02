import React from "react";

export default function Alert({ message }) {
  return (
    <div className="w-full fixed flex z-50 justify-center items-center top-3">
      <div
        role="alert"
        class="flex items-center px-2 py-2 text-white bg-green-600 rounded"
        dismisable
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="flex-shrink-0 w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>

        <p class="ml-3 text-sm">{message}</p>
      </div>
    </div>
  );
}
