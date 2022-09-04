import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

function ProfilLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        style={{ backgroundColor: '#FF0000' }}
        width={258}
        height={263}
        data={data}
        margin={{
          top: 50,
          right: -2,
          left: -60,
          bottom: 10,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey="type"
          tickLine={false}
          fillOpacity={0.5}
          style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }}
          tick={{ fill: '#FFFFFF', fontWeight: 500, fontSize: 12 }}
          tickMargin={10}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis axisLine={false} tickLine={false} tick={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="result"
          stroke="#FFFFFF"
          dot={false}
          opacity={0.8}
          strokeWidth={2}
        />
        <text
          x="12%"
          y="15%"
          width={147}
          height={48}
          textAnchor="start"
          dominantBaseline="middle"
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          Durée moyenne des{' '}
        </text>
        <text
          x="12%"
          y="25%"
          width={147}
          height={48}
          textAnchor="start"
          dominantBaseline="middle"
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ProfilLineChart
