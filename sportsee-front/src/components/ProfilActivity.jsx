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
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ToolContainer = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 65px;
  background: #e60000;
  margin: 0 15px 70px 15px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

const ToolInfos = styled.p`
  font-weight: 500;
  font-size: 8px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  margin: 0;
`

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <ToolContainer>
        <ToolInfos>{`${payload[0].value}`}kg</ToolInfos>
        <ToolInfos>{`${payload[1].value}`}Kcal</ToolInfos>
      </ToolContainer>
    )
  }
  return null
}

const ProfilActivity = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart
        width="100%"
        height="100%"
        data={data}
        margin={{
          top: 80,
          right: 50,
          left: 45,
          bottom: 20,
        }}
        barSize={9}
        barGap={8}
        barCategoryGap={12}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          stroke="#DEDEDE"
          tick={{
            fill: '#9B9EAC',
            fontWeight: 500,
            fontSize: 14,
          }}
          padding={{ left: -47, right: -48 }}
          tickMargin={16}
        />
        <YAxis
          yAxisId="kgRight"
          dataKey="kilogram"
          type="number"
          domain={['dataMin - 1', 'dataMax + 1']}
          interval="preserveStartEnd"
          tickCount={4}
          allowDecimals={false}
          tickLine={false}
          orientation="right"
          axisLine={false}
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          tickMargin={50}
        />
        <YAxis
          yAxisId="calLeft"
          dataKey="calories"
          type="number"
          domain={['dataMin - 50', 'dataMax + 10']}
          orientation="left"
          hide={true}
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
          yAxisId="kgRight"
          name="Poids (kg)"
          fill="#282D30"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="calories"
          yAxisId="calLeft"
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

ProfilActivity.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ProfilActivity
