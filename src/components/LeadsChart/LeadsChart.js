// vendors
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { format, parseISO, subDays } from "date-fns";

// styles
import { LeadsChartWrapper, ChartWrapper, Title, Divider } from './styled'

const data = [];

for( let num = 30; num >= 0 ; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString(),
    value: 1 + Math.floor(Math.random() * ( 50 - 1)) + 1,
  })
}

function LeadsChart () {

  return <LeadsChartWrapper>
    <Title>
      Leads (últimos 30 dias)
    </Title>
    <Divider />
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="-11.16%" stopColor="#99CDFF"/>
              <stop offset="84.31%" stopColor="#EAF9FF"/>
            </linearGradient>
          </defs>
          
          <Area dataKey="value" stroke="#0065FF" dot={true} fill="url(#color)"/>
          
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tickFormatter={date => format(parseISO(date), "dd/MMM")} 
            interval={6}
            dy={11}
          />
          
          <YAxis 
            dataKey="value" 
            dx={-25}
            axisLine={false} 
            tickLine={false}
          />
          
          <Tooltip />
          
          <CartesianGrid opacity={0.2} vertical={false} />
        
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  </LeadsChartWrapper>
}

export default LeadsChart;