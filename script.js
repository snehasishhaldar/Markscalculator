function calculateYGPA() {
  const ygpa = parseFloat(document.getElementById('ygpa').value);
  const subjects = parseFloat(document.getElementById('subjects').value);

  const percentage = (ygpa - 0.75) * 10;
  const obtainedMarks = Math.round(subjects * percentage); // Round to the nearest integer
  const totalMarks = subjects * 100;

  const formattedYGPA = ygpa.toFixed(3); // Format ygpa with three decimal places
  const formattedPercentage = percentage.toFixed(3); // Format percentage with three decimal places

  const resultMessage = `
  Total Subject: ${subjects}
  YGPA: ${formattedYGPA}
  Total Marks: ${totalMarks}
  Obtained Marks: ${obtainedMarks}
  Percentage: ${formattedPercentage}%
  `;

  // Show the results in a popup
  window.alert(resultMessage);
}
