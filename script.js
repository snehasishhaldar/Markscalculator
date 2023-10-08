function calculateYGPA() {
  const ygpa = parseFloat(document.getElementById('ygpa').value);
  const subjects = parseFloat(document.getElementById('subjects').value);

  const percentage = (ygpa - 0.75) * 10;
  const obtainedMarks = subjects * percentage;
  const totalMarks = subjects * 100;

  const resultMessage = `
  Total Subject: ${subjects}
  YGPA: ${ygpa}
  Total Marks: ${totalMarks}
  Obtained Marks: ${obtainedMarks}
  Percentage: ${percentage.toFixed(2)}%
  `;

  // Show the results in a popup
  window.alert(resultMessage);
}
