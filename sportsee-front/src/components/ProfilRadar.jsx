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
        margin={{ top: 12, right: 6, bottom: 12, left: 6 }}
        style={{ backgroundColor: '#282D30' }}
        outerRadius={90}
        width="90%"
        height="90%"
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          tickLine={false}
          axisLine={false}
          dataKey="type"
          dy={5}
          stroke="#FFF"
          tick={{ fill: '#FFFFFF', fontSize: 12 }}
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
