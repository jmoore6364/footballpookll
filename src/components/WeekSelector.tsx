import './WeekSelector.css';

interface WeekSelectorProps {
  weeks: number[];
  currentWeek: number;
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
}

export function WeekSelector({ weeks, currentWeek, selectedWeek, onSelectWeek }: WeekSelectorProps) {
  return (
    <div className="week-selector">
      <div className="week-selector-scroll">
        {weeks.map(week => (
          <button
            key={week}
            className={`week-button ${selectedWeek === week ? 'active' : ''} ${week === currentWeek ? 'current' : ''}`}
            onClick={() => onSelectWeek(week)}
          >
            <span className="week-number">Week {week}</span>
            {week === currentWeek && <span className="week-badge">Current</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
