import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Component user's performances datas
 * @param {Array} data  user' performance formated
 * @returns Radar Chart from Recharts library
 * @see https://recharts.org/en-US/api/RadarChart
 */
function ProfilRadar({ data }) {
  return (
    <ResponsiveContainer>
      <RadarChart
        style={{ backgroundColor: '#282D30' }}
        margin={{ top: 10, left: 25, right: 25, bottom: 10 }}
        outerRadius="85%"
        data={data}
        width="100%"
        height="100%"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          tickLine={false}
          axisLine={false}
          dataKey="type"
          dy={4}
          stroke="#FFF"
          tick={{ fill: '#FFFFFF', fontSize: '0.6em', fontWeight: 400 }}
        />
        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />

        <Radar
          dataKey="result"
          stroke="#ff0101"
          fill="#ff0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

ProfilRadar.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ProfilRadar
