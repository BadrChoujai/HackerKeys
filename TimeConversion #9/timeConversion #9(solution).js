function timeConversion(s) {
  let time = s.match(/(\d|\:)/gi);
  let tag = s.match(/(A|P)/gi).join("");

  return time
    .join("")
    .split(":")
    .map((v, i) => {
      return i === 0
        ? tag.match(/P/i)
          ? Number(v) === 0
            ? "00"
            : (Number(v) % 12) + 12
          : Number(v) % 12 === 0
          ? "00"
          : v
        : v;
    })
    .join(":");
}
