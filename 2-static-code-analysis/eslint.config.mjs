export default [
  {
    rules: {
      'no-var': 'error', // Use let/const em vez de var
      'no-unused-vars': 'warn', // Variáveis declaradas, mas não utilizadas
      'no-console': 'warn', // Aviso para console.log
      'eqeqeq': 'error', // Exige uso de === em vez de ==
      'curly': 'error', // Exige chaves em blocos
      'no-unreachable': 'error', // Código inacessível
      'no-mixed-spaces-and-tabs': 'error', // Espaços e tabs misturados
      'indent': ['error', 2], // Indentação de 2 espaços
      'semi': ['error', 'always'], // Exige ponto e vírgula no final
      'brace-style': ['error', '1tbs'], // Estilo de chaves "one true brace style"
    }
  }
];
   
  