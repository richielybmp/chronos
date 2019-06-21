import { Assunto, Disciplina, Cronograma } from "./domain";

//#region 'Mock'
var mock_assunto1: Assunto[] = [
    new Assunto('111', 'Assunto 1', [], [], [], 'anotações1'),
    new Assunto('112', 'Assunto 2', [], [], [], 'anotações2'),
    new Assunto('113', 'Assunto 3', [], [], [], 'anotações3'),
    new Assunto('114', 'Assunto 4', [], [], [], 'anotações4'),
]

var mock_assunto2: Assunto[] = [
    new Assunto('115', 'Assunto 5', [], [], [], 'anotações5'),
    new Assunto('116', 'Assunto 6', [], [], [], 'anotações6'),
    new Assunto('117', 'Assunto 7', [], [], [], 'anotações7'),
    new Assunto('118', 'Assunto 8', [], [], [], 'anotações8'),
]

var mock_assunto3: Assunto[] = [
    new Assunto('119', 'Assunto 9', [], [], [], 'anotações9'),
    new Assunto('1110', 'Assunto 10', [], [], [], 'anotações10'),
    new Assunto('1111', 'Assunto 11', [], [], [], 'anotações11'),
    new Assunto('1112', 'Assunto 12', [], [], [], 'anotações12'),
]

var mock_discicplinas: Disciplina[] = [
    new Disciplina('11', 'Disicplina 1', mock_assunto1),
    new Disciplina('12', 'Disicplina 2', mock_assunto2),
    new Disciplina('13', 'Disicplina 3', mock_assunto3),
    new Disciplina('14', 'Disicplina 4', mock_assunto3),
    new Disciplina('15', 'Disicplina 5', mock_assunto3),
    new Disciplina('16', 'Disicplina 6', mock_assunto3),
    new Disciplina('17', 'Disicplina 7', mock_assunto3),
    new Disciplina('18', 'Disicplina 8', mock_assunto3),
    new Disciplina('19', 'Disicplina 9', mock_assunto3),
    new Disciplina('110', 'Disicplina 10', mock_assunto3),
    new Disciplina('111', 'Disicplina 11', mock_assunto3),
    new Disciplina('112', 'Disicplina 12', mock_assunto3),
    new Disciplina('113', 'Disicplina 13', mock_assunto3),
]

var mock: Cronograma[] = [
    new Cronograma('1', "Cronograma 1", new Date(), new Date(), mock_discicplinas),
    new Cronograma('2', "Cronograma 2", new Date(), new Date(), mock_discicplinas),
    new Cronograma('3', "Cronograma 3", new Date(), new Date(), mock_discicplinas),
    new Cronograma('4', "Cronograma 4", new Date(), new Date(), mock_discicplinas),
    new Cronograma('5', "Cronograma 5", new Date(), new Date(), mock_discicplinas),
    new Cronograma('6', "Cronograma 6", new Date(), new Date(), mock_discicplinas),
    new Cronograma('7', "Cronograma 7", new Date(), new Date(), mock_discicplinas),
    new Cronograma('8', "Cronograma 8", new Date(), new Date(), mock_discicplinas),
    new Cronograma('9', "Cronograma 9", new Date(), new Date(), mock_discicplinas),
    new Cronograma('10', "Cronograma 10", new Date(), new Date(), mock_discicplinas),
]
//#endregion

export default mock