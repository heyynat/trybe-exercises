let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: true
};

let info2 =
{
  personagem: 'Tio Patinhas',
  origem: 'Pato Christmas on Bear Mountain, Dell´s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: true
};

for(let data in info) {
  if (
  info[data] === info2[data] &&
  info.recorrente === info2.recorrente) {
    console.log('Ambos recorrentes');
} else {
    console.log (info[data] + ' e ' + info2[data]);
}
}
