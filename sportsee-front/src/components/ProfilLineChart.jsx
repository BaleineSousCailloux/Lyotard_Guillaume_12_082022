import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
} from 'recharts'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ToolContainer = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 25px;
  background: #ffffff;
  margin: 0 5px 40px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1px;
`

const ToolInfos = styled.p`
  font-weight: 500;
  font-size: 0.6em;
  line-height: 1.5em;
  color: #000000;
  text-align: center;
  margin: 0;
`

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <ToolContainer>
        <ToolInfos>{`${payload[0].value} `}min</ToolInfos>
      </ToolContainer>
    )
  }
  return null
}

const CustomCursor = ({ points }) => {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.0975}
      x={points[1].x}
      width={1000}
      height={300}
    />
  )
}

/**
 * Component user's sessions average
 * @param {Array} data user's sessions length
 * @returns Line chart from Recharts library
 * @see https://recharts.org/en-US/api/LineChart
 */
function ProfilLineChart({ data }) {
  return (
    <ResponsiveContainer>
      <LineChart
        style={{ backgroundColor: '#FF0000' }}
        width="100%"
        height="100%"
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
          padding={{ left: 15, right: 15 }}
          margin={{ bottom: 20 }}
          fillOpacity={0.6}
          style={{ transform: 'scale(1)', transformOrigin: 'bottom' }}
          tick={{ fill: '#FFFFFF', fontWeight: 500, fontSize: '0.75em' }}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={false}
          type="number"
          domain={['dataMin', 'dataMax + 30']}
          padding={{ bottom: 15 }}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="natural"
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
          style={{ fontWeight: 500, fontSize: '0.9em', opacity: 0.6 }}
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
          style={{ fontWeight: 500, fontSize: '0.9em', opacity: 0.6 }}
        >
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  )
}

ProfilLineChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ProfilLineChart
