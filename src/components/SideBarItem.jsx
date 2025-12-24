import React from 'react'

const SidebarItem = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
      <Icon size={20} className="text-gray-600" />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default SidebarItem;