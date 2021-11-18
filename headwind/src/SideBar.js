import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaLinux } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-8 h-screen w-16 m-0 p-0 flex flex-col bg-primary text-secondary shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaLinux size="20" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon">
    {icon}
  </div>
);

export default SideBar;
