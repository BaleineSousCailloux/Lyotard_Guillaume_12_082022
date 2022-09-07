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
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart
        style={{ backgroundColor: '#282D30' }}
        outerRadius={90}
        data={data}
        width="85%"
        height="85%"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          tickLine={false}
          axisLine={false}
          dataKey="type"
          dy={4}
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
