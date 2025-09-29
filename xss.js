// Script simples para teste de carregamento
console.log('Script externo carregado com sucesso!');

// Função disponível globalmente
window.meuScriptTeste = function() {
    alert('Script funcionando perfeitamente!');
    return 'Sucesso - Script carregado via src';
};

// Variável global
window.versaoScript = '1.0.0';

// Executa automaticamente quando carregado
console.log('Carregado em: ' + new Date().toLocaleString());
console.log('Arquivo: script-simples.js');
