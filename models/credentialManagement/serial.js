function serialize (user, done) {
  return done(null, {id: user.id, username: user.username})
}

function deserialize (user, done) {
  return done(null, user);
}

export {
  serialize,
  deserialize
}