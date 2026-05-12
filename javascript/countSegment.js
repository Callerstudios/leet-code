var countSegments = function (s) {
  if (s.trim().length === 0) return 0;
  let split = s.trim().split(/\s+/);
  return split.length;
};
