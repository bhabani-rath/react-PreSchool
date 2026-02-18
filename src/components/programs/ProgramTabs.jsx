import Tabs from "@/components/ui/Tabs";
import { programsData } from "@/data/programs";

const ProgramTabs = ({ activeTab, onTabChange }) => {
  const tabs = programsData.map((p) => ({
    id: p.id,
    label: p.title,
    icon: p.icon,
  }));

  return <Tabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />;
};

export default ProgramTabs;