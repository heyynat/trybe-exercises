function techList (skills, name) {
  let packageSkills = [];
  
  if (skills.length <= 0) {
    return 'Vazio!';
  }
  skills.sort();
  for (let index = 0; index < skills.length; index += 1) {
    packageSkills.push({
      tech: skills[index],
      name,
    });
  }
  return packageSkills;
}
module.exports = techList;
