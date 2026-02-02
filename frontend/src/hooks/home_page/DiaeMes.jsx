
export function getDiaMesAtual() {
  const hoje = new Date()
  
  const opcoes = {
    day: '2-digit',
    month: 'long'
  }
  
  const formatada = hoje.toLocaleDateString('pt-BR', opcoes)
  // Retorna algo como "02 de fevereiro"
  
  return formatada
}

// Versão alternativa com capitalização do mês
export function getDiaMesCapitalizado() {
  const hoje = new Date()
  
  const dia = hoje.getDate()
  const mes = hoje.toLocaleDateString('pt-BR', { month: 'long' })
  
  // Capitaliza primeira letra do mês
  const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1)
  
  return `${dia} de ${mesCapitalizado}`
}