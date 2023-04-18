const MESES_EN_EL_ANIO = 12;
const SEMANAS_EN_EL_ANIO = 52;
const DIAS_EN_EL_ANIO = 365;

function calcularSalario() {
    const salarioAnual = Number(document.querySelector("#salario-anual").value); 
    let salarioMensual = salarioAnual / MESES_EN_EL_ANIO;
    let salarioSemanal = salarioAnual / SEMANAS_EN_EL_ANIO;
    let salarioDiario = salarioAnual / DIAS_EN_EL_ANIO;

    document.querySelector("#mensualmente").innerHTML = "Salario mensual: " + salarioMensual.toFixed(2);
    document.querySelector("#semanalmente").innerHTML = "Salario semanal: " + salarioSemanal.toFixed(2);
    document.querySelector("#diariamente").innerHTML = "Salario diario: " + salarioDiario.toFixed(2);
}

calcularSalario();



