import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'
import PropTypes from 'prop-types'

function ProfilRadar({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        style={{ backgroundColor: '#282D30' }}
        margin={{ left: 25, right: 25 }}
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
