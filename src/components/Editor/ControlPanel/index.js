import React, {useState} from "react";
import Text from "@/components/Editor/ControlPanel/SwitchingTabs/Text";
import Font from "@/components/Editor/ControlPanel/SwitchingTabs/Font";
import Color from "@/components/Editor/ControlPanel/SwitchingTabs/Color";

const components = [
  {name: 'text', label: 'Текст', component: <Text/>},
  {name: 'font', label: 'Шрифт', component: <Font/>},
  {name: 'color', label: 'Колір', component: <Color/>},
];

const ControlPanel = () => {
  const [activeTab, setActiveTab] = useState('text');

  const renderActiveComponent = () => {
    const activeComp = components.find((comp) => comp.name === activeTab);
    return activeComp ? activeComp.component : null;
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4 p-2 lg:w-1/3 shadow">
        <div
          className="w-full flex flex-1 text-center border rounded-t-lg border-indigo-600"
        >
          {renderButtons(activeTab, setActiveTab)}
        </div>
        {renderActiveComponent()}
      </div>
    </>
  );
};

function renderButtons(activeTab, setActiveTab) {
  return components.map((comp, index) => {
    const {name, label} = comp;
    const isActiveTab = activeTab === name;
    const isNotFirst = index !== 0;
    const isNotLast = index !== components.length - 1;
    const activeSwitchTab = isNotLast && isActiveTab ? 'switch-tab-active' : '';

    const buttonClassName = [
      isNotFirst ? '-ml-px' : 'rounded-tl-lg',
      'flex-1 -ml-px px-4 py-2 relative uppercase font-bold',
      isActiveTab ? 'bg-indigo-500 text-white' : 'text-indigo-700',
      activeSwitchTab,
      isNotLast ? '' : 'rounded-tr-lg'
    ].join(' ');

    return (
      <button
        key={index}
        onClick={() => setActiveTab(name)}
        className={buttonClassName}
      >
        {label}
      </button>
    );
  });
}

export default ControlPanel;
