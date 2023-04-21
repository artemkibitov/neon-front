import React, {useState} from "react";
import Text from "@/components/Editor/ControlPanel/SwitchingTabs/Text";

const ControlPanel = () => {
  const [activeTab, setActiveTab] = useState('text');

  const components = [
    { name: 'text', label: 'Текст', component: <Text /> },
  ]



  return (
    <div>
      <div>CPanel</div>
      <Text />
    </div>
  );
};

export default ControlPanel;
