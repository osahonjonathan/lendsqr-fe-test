

interface Props {
  active: string;
  onChange: (tab: string) => void;
}

const tabs = [
  'General Details',
  'Documents',
  'Bank Details',
  'Loans',
  'Savings',
  'App and System',
];

const UserTabs = ({ active, onChange }: Props) => (
  <div className="user-tabs">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`tab ${active === tab ? 'active' : ''}`}
        onClick={() => onChange(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default UserTabs;
