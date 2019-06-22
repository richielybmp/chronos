export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (err) { }
};

// const converter = (obj: any) => {
//     var state: ChronosStateType = obj.cronogramas;
//     const c = state["cronogramaOnDetail"].cronograma

//     var disciplinasTST: Disciplina[] = [];
//     var cronogramaTST: Cronograma[] = [];
//     if (c != null) {
//         for (let index = 0; index < c.disciplinas.length; index++) {
//             const disciplina = c.disciplinas[index];

//             var assuntoTST: Assunto[] = [];
//             for (let j = 0; j < disciplina.assuntos.length; j++) {
//                 const assunto = disciplina.assuntos[j];

//                 var exercicioTST: Exercicio[] = [];
//                 for (let x = 0; x < assunto.exercicios.length; x++) {
//                     const exercicio = assunto.exercicios[x];
//                     exercicioTST.push(new Exercicio(exercicio.codigo, exercicio.descricao, exercicio.quantidade, exercicio.acertos))
//                 }

//                 var materialTST: Material[] = [];
//                 for (let x = 0; x < assunto.materiais.length; x++) {
//                     const material = assunto.materiais[x];

//                     materialTST.push(new Material(material.codigo, material.descricao, material.porcentagem))
//                 }

//                 var revisaoTST: Revisao[] = [];
//                 for (let x = 0; x < assunto.revisoes.length; x++) {
//                     const revisao = assunto.revisoes[x];
//                     revisaoTST.push(new Revisao(revisao.codigo, revisao.descricao, revisao.escopo, revisao.quantidade))
//                 }

//                 assuntoTST.push(new Assunto(assunto.codigo, assunto.descricao, materialTST, revisaoTST, exercicioTST, assunto.anotacao))
//             }

//             disciplinasTST.push(new Disciplina(disciplina.codigo, disciplina.descricao, assuntoTST))
//         }
//         cronogramaTST.push(new Cronograma(c.codigo, c.descricao, new Date(), new Date(), disciplinasTST))
//     }
//     debugger
// }