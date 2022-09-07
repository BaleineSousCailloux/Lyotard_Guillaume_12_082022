import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import PropTypes from 'prop-types'

function ProfilScore({ data }) {
  return (
    <ResponsiveContainer>
      <RadialBarChart
        cx="50%"
        cy="50%"
        style={{ backgroundColor: '#FBFBFB' }}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        innerRadius={70}
        barSize={10}
        data={[{ uv: data, fill: '#FF0000' }]}
        startAngle={210}
        endAngle={-30}
      >
        <circle cx="50%" cy="50%" fill="#fbfbfb" r="82"></circle>
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={1}
          tick={false}
        />
        <RadialBar
          background
          dataKey="uv"
          angleAxisId={1}
          fill="#E60000"
          cornerRadius="10"
          data={data}
        />
        <text
          fontWeight="700"
          fontSize="1.65em"
          fill="#282D30"
          x="50%"
          y="45%"
          textAnchor="middle"
        >{`${data}%`}</text>
        <text
          fontWeight="500"
          fontSize="1em"
          fill="#74798C"
          x="50%"
          y="55%"
          textAnchor="middle"
        >
          de votre
        </text>
        <text
          fontWeight="500"
          fontSize="1em"
          fill="#74798C"
          x="50%"
          y="64%"
          textAnchor="middle"
        >
          objectif
        </text>
        <text
          x="12%"
          y="15%"
          textAnchor="start"
          dominantBaseline="middle"
          fill="#20253A"
          style={{ fontWeight: 500, fontSize: '1em' }}
        >
          Score{' '}
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

ProfilScore.propTypes = {
  data: PropTypes.number.isRequired,
}

export default ProfilScore
