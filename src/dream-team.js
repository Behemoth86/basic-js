module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    let dreamteam =[];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        dreamteam.push(members[i].trim()[0].toUpperCase());
      }
    }
    return dreamteam.sort().join('');
  }
  else return false;
};