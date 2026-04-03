import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { clsx } from 'clsx';

interface DataPoint {
  date: string;
  elo: number;
}

interface ProgressChartProps {
  data: DataPoint[];
  className?: string;
}

export function ProgressChart({ data, className }: ProgressChartProps) {
  if (data.length === 0) {
    return (
      <div className={clsx('flex items-center justify-center h-64 text-gray-500', className)}>
        No data yet. Play some games!
      </div>
    );
  }

  const minElo = Math.min(...data.map(d => d.elo)) - 50;
  const maxElo = Math.max(...data.map(d => d.elo)) + 50;

  return (
    <div className={clsx('h-64', className)}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis 
            dataKey="date" 
            stroke="#666"
            fontSize={12}
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.getMonth() + 1}/${date.getDate()}`;
            }}
          />
          <YAxis 
            domain={[minElo, maxElo]} 
            stroke="#666"
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1c1b19',
              border: '1px solid #333',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#fff' }}
            formatter={(value: number) => [`${value}`, 'ELO']}
          />
          <Line
            type="monotone"
            dataKey="elo"
            stroke="#4f98a3"
            strokeWidth={2}
            dot={{ fill: '#4f98a3', strokeWidth: 0, r: 3 }}
            activeDot={{ r: 5, fill: '#e8af34' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
