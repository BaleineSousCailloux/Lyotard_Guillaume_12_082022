import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="customTooltip">
        <p className="tooltipData">{`${payload[0].value} `}kg</p>
        <p className="tooltipData">{`${payload[1].value} `}Kcal</p>
      </div>
    )
  }
  return null
}

const ProfilActivity = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart
        width={835}
        height={320}
        data={data}
        margin={{
          top: 80,
          right: 50,
          left: 45,
          bottom: 20,
        }}
        barSize={7}
        barGap={8}
        barCategoryGap={54}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          stroke=" #DEDEDE"
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          padding={{ left: -47, right: -48 }}
          tickMargin={16}
        />
        <YAxis
          tickLine={false}
          orientation="right"
          axisLine={false}
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          tickMargin={45}
          minTickGap={27}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType={'circle'}
          iconSize={8}
          width={277}
          height={25}
          wrapperStyle={{ top: 35, right: 26 }}
          formatter={(value) => {
            return (
              <span style={{ color: '#74798C', fontSize: 14, fontWeight: 500 }}>
                {value}
              </span>
            )
          }}
        />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[4, 4, 0, 0]}
        />
        <text
          x="5%"
          y="15%"
          width={147}
          height={48}
          textAnchor="start"
          dominantBaseline="middle"
          fill="#20253A"
          style={{ fontWeight: 500 }}
        >
          Activité quotidienne{' '}
        </text>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ProfilActivity
