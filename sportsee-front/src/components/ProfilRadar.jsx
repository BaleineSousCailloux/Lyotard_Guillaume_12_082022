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
    <ResponsiveContainer>
      <RadarChart
        style={{ backgroundColor: '#282D30' }}
        margin={{ top: 10, left: 5, right: 5, bottom: 10 }}
        outerRadius="75%"
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          tickLine={false}
          axisLine={false}
          dataKey="type"
          dy={4}
          stroke="#FFF"
          tick={{ fill: '#FFFFFF', fontSize: '0.75em' }}
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
