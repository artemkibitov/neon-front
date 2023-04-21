import React, {useState} from "react";
import Text from "@/components/Editor/ControlPanel/SwitchingTabs/Text";

const ControlPanel = ({editorReducer}) => {
  const [activeTab, setActiveTab] = useState('text');

  const components = [
    { name: 'text', label: 'Текст', component: <Text /> },
    { name: 'font', label: 'Шрифт', component: <Font /> },
    { name: 'color', label: 'Цвет', component: <Color /> },
  ]

  const changeText = (e) => {
    const text = e.target.value;
    const type = 'change_text';

    editorReducer({ type, text });
  };

  return (
    <div>
      <div>CPanel</div>
      <Text changeText={changeText} />
    </div>
  );
};

export default ControlPanel;
