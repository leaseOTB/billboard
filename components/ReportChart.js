import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'


export const ReportChart = () => {
  return (
    <>
      <VictoryChart theme={VictoryTheme.material} height={250}>
        <VictoryLine
          style={{
            data: { stroke: "#E86D48" },
            parent: { border: "1px solid #ccc"}
          }}
          data={[
            { x: '9/11/20', y: 3 },
            { x: '9/12/20', y: 1 },
            { x: '9/13/20', y: 8 },
            { x: '9/14/20', y: 54 },
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "#250A3C" },
            parent: { border: "1px solid #ccc"}
          }}
          data={[
            { x: '9/11/20', y: 4 },
            { x: '9/12/20', y: 24 },
            { x: '9/13/20', y: 1 },
            { x: '9/14/20', y: 0 },
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "#250A3C" },
            parent: { border: "1px solid #ccc"}
          }}
          data={[
            { x: '9/11/20', y: 1 },
            { x: '9/12/20', y: 0 },
            { x: '9/13/20', y: 1 },
            { x: '9/14/20', y: 2 },
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "#250A3C" },
            parent: { border: "1px solid #ccc"}
          }}
          data={[
            { x: '9/11/20', y: 0 },
            { x: '9/12/20', y: 3 },
            { x: '9/13/20', y: 1 },
            { x: '9/14/20', y: 0 },
          ]}
        />
      </VictoryChart>
    </>
  )
}