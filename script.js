function formatNumber(input) {
  let value = input.value.replace(/\D/g, "");
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  input.value = value;
}

function calculateMargin() {
  const salary =
    parseFloat(document.getElementById("salary").value.replace(/\./g, "")) || 0;
  const loan =
    parseFloat(document.getElementById("loan").value.replace(/\./g, "")) || 0;
  const marginAllowed = (salary * 0.35).toFixed(2);
  const marginAvailable = (marginAllowed - loan).toFixed(2);
  const loanAvailable = (marginAvailable * 45.56).toFixed(2); // Exemplo de cálculo para empréstimo disponível

  document.getElementById("result").innerHTML = `
        <p>Margem permitida: R$ ${marginAllowed}</p>
        <p>Margem disponível: R$ ${marginAvailable}</p>
        <p>Empréstimo disponível: R$ ${loanAvailable}</p>
    `;
}
