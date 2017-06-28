function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (let i = 0, l = iterable.length; i < 1; i++) {
      const element = iterable[i]
      callback(element, i, iterable)
    }
  }
}
