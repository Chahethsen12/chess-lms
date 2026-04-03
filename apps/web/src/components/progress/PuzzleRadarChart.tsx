import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { clsx } from 'clsx';

interface ThemeData {
  theme: string;
  accuracy: number;
}

interface PuzzleRadarChartProps {
  data: ThemeData[];
  className?: string;
}

export function PuzzleRadarChart({ data, className }: PuzzleRadarChartProps) {
  return (
    <div className={clsx('h-64', className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="theme" stroke="#666" fontSize={12} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#666" fontSize={10} />
          <Radar
            name="Accuracy"
            dataKey="accuracy"
            stroke="#4f98a3"
            fill="#4f98a3"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
