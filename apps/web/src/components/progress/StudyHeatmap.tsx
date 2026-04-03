import { useMemo } from 'react';
import { clsx } from 'clsx';
import { Tooltip } from 'react-tooltip';

interface ActivityData {
  date: string; // YYYY-MM-DD
  count: number;
}

interface StudyHeatmapProps {
  data: ActivityData[];
  className?: string;
}

function getIntensityClass(count: number): string {
  if (count === 0) return 'bg-gray-800';
  if (count <= 2) return 'bg-primary/30';
  if (count <= 5) return 'bg-primary/50';
  if (count <= 10) return 'bg-primary/70';
  return 'bg-primary';
}

export function StudyHeatmap({ data, className }: StudyHeatmapProps) {
  const { weeks, months } = useMemo(() => {
    const activityMap = new Map(data.map(d => [d.date, d.count]));
    const weeks: Array<Array<{ date: string; count: number }>> = [];
    const months: Array<{ name: string; startWeek: number }> = [];
    
    // Generate last 52 weeks
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Start on Sunday
    
    let currentWeek: Array<{ date: string; count: number }> = [];
    let currentMonth = -1;
    
    for (let i = 0; i <= 371; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      if (date > today) break;
      
      const dateStr = date.toISOString().split('T')[0];
      const count = activityMap.get(dateStr) || 0;
      
      currentWeek.push({ date: dateStr, count });
      
      // Track months
      if (date.getMonth() !== currentMonth) {
        currentMonth = date.getMonth();
        months.push({
          name: date.toLocaleDateString('en-US', { month: 'short' }),
          startWeek: weeks.length,
        });
      }
      
      // Start new week on Sunday
      if (date.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }
    
    return { weeks, months };
  }, [data]);

  const totalActivity = data.reduce((sum, d) => sum + d.count, 0);

  return (
    <div className={clsx('', className)}>
      {/* Month labels */}
      <div className="flex text-xs text-gray-500 mb-1 ml-8">
        {months.map((month, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ marginLeft: i === 0 ? 0 : `${(month.startWeek - months[i-1].startWeek) * 12 - 24}px` }}
          >
            {month.name}
          </div>
        ))}
      </div>
      
      <div className="flex gap-0.5">
        {/* Day labels */}
        <div className="flex flex-col text-xs text-gray-500 pr-1 gap-0.5">
          <span className="h-[10px]"></span>
          <span className="h-[10px] leading-[10px]">Mon</span>
          <span className="h-[10px]"></span>
          <span className="h-[10px] leading-[10px]">Wed</span>
          <span className="h-[10px]"></span>
          <span className="h-[10px] leading-[10px]">Fri</span>
          <span className="h-[10px]"></span>
        </div>
        
        {/* Grid */}
        <div className="flex gap-0.5 overflow-x-auto">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-0.5">
              {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                const day = week[dayIndex];
                if (!day) {
                  return <div key={dayIndex} className="w-[10px] h-[10px]" />;
                }
                return (
                  <div
                    key={dayIndex}
                    data-tooltip-id="heatmap-tooltip"
                    data-tooltip-content={`${day.count} activities on ${day.date}`}
                    className={clsx(
                      'w-[10px] h-[10px] rounded-sm cursor-pointer',
                      getIntensityClass(day.count)
                    )}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-gray-400">{totalActivity} activities this year</span>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span>Less</span>
          <div className="w-[10px] h-[10px] rounded-sm bg-gray-800" />
          <div className="w-[10px] h-[10px] rounded-sm bg-primary/30" />
          <div className="w-[10px] h-[10px] rounded-sm bg-primary/50" />
          <div className="w-[10px] h-[10px] rounded-sm bg-primary/70" />
          <div className="w-[10px] h-[10px] rounded-sm bg-primary" />
          <span>More</span>
        </div>
      </div>
      
      <Tooltip id="heatmap-tooltip" />
    </div>
  );
}
