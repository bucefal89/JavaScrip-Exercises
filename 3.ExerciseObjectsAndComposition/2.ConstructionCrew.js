function result(obj) {
  if (obj.dizziness) {
    obj.levelOfHydrated += obj.weight * 0.1 * obj.experience;
    obj.dizziness = false;
    return obj;
  }
  return obj;
}

console.log(
  result({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);

console.log(
  result({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);

console.log(
  result({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  })
);
