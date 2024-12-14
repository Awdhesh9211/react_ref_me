import React from 'react';
import NodeSetup from '../topic_components/NodeSetup';
import JSXExplanation from '../topic_components/JSX';
import StateManagementExample from '../topic_components/StateMgmt';
import ReactHooksComponent from '../topic_components/Hooks';
import PropsExample from '../topic_components/Props';
import ContextAPIExample from '../topic_components/Context';



const TopicComponent = ({ topic }) => {
  const renderContent = () => {
    switch (topic) {
      case 'NodeJS Setup':
        return <NodeSetup />;
      case 'JSX':
        return <JSXExplanation />;
      case 'State Management':
        return <StateManagementExample />;
      case 'Hooks':
        return <ReactHooksComponent/>;
      case 'Props':
        return <PropsExample />;
      case 'Context API':
        return <ContextAPIExample />;
      default:
        return <p>Select a topic to see more details.</p>;
    }
  };

  return (
    <div className="p-5 mt-2">
      {renderContent()}
    </div>
  );
};

export default TopicComponent;
