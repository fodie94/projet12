// DataFormatterPerformance.js
class DataFormatterPerformance {
  static formatPerformance(dataJSON) {
    return dataJSON.data.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
  }

  static formatChartData(sessions) {
    return sessions.map((session) => ({
      name: session.day,
      uv: session.sessionLength,
    }));
  }
}

export default DataFormatterPerformance;
