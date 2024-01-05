//the type any doesn't check the type of the variable and defeats the purpose of TS

let thing: any = "Abdi";
thing = 1;
thing = true;
thing = {
  a: "1",
  b: 2,
  c: true,
}
//as you can see above there is not type check from TS