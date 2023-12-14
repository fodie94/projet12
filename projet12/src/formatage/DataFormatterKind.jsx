// DataFormatterKind.jsx
class DataFormatterKind {
  static formatPerformanceData(JSON) {
    const performanceData = JSON.data.data || [];

    const formattedData = performanceData.map((session) => ({
      value: session.value,
      kind: session.kind,
    }));

    return formattedData;
  }
}

export default DataFormatterKind;
