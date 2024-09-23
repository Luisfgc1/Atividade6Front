const aluno = [
  {
    nome: "Luis Felipe",
    idade: 18,
    curso: "Ciencias da computação",
    nota: [10, 9, 8],
  },
];
console.log(aluno[0].nome);
console.log(aluno[0].nota[0]);

aluno[0].idade = 22;
aluno[0].nota.push(11);
console.log(aluno[0].nota);

console.log(JSON.stringify(aluno));
console.log(JSON.parse(JSON.stringify(aluno)));

aluno = aluno[0];

for (let i in aluno) {
  console.log(aluno[i]);
}

const ValorInicial = 0;
const soma = aluno[0].nota.reduce(
  (acumulador, ValorAtual) => acumulador + ValorAtual,
  ValorInicial
);

let media = soma / aluno[0].nota.length;
console.log(media);

aluno[0].endereco = {
  rua: "rua xxxxxxx",
  cidade: "Joao pessoa",
  estado: "Paraiba",
};

console.log(aluno[0].endereco.estado, aluno[0].endereco.cidade);
const alunos = [
  {
    ...aluno[0],
  },
  {
    nome: "joao",
    idade: 20,
    curso: "medicina veterinaria",
    nota: [10, 10, 9],
    endereco: { ...aluno[0].endereco },
  },
];
const alunosComMediaSuperiorA8 = alunos.filter((aluno) => {
  const somaNotas = aluno.nota.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );
  const mediaNotas = somaNotas / aluno.nota.length;
  return mediaNotas > 8;
});

console.log(alunosComMediaSuperiorA8);
