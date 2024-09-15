function examplHosting() {
  for (let i = 0; i < 3; i++) {
    var a = 10;
    let b = 20;
    b += 5;
    const c = 5;
    console.log(`Value c (const) in for ${c}`);
  }
  console.log(`Value a (var) = ${a}`);
  console.log(b);
  console.log(c);
}
examplHosting();
