import React from 'react';

function PriorityIcon({ priority }) {
  const iconMap = {
    1: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
      </svg>
    ),

    2: (
      <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
        <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
        <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
        <rect x="11.5" y="2" width="3" height="12" rx="1"></rect>
      </svg>
    ),

    3: (
      <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
        <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
        <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
        <rect x="11.5" y="2" width="3" height="12" rx="1" fillOpacity="0.4"></rect>
      </svg>
    ),

    4: (
      <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
        <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
        <rect x="6.5" y="5" width="3" height="9" rx="1" fillOpacity="0.4"></rect>
        <rect x="11.5" y="2" width="3" height="12" rx="1" fillOpacity="0.4"></rect>
      </svg>
    ),

    5: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path>
      </svg>
    ),
  };

  return iconMap[priority] || null;
}

export default PriorityIcon;
