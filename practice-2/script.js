//kiritish , chiqarish va ozlashtirish operatorlari 40ta masala

//masala-1

// let kvadratningTomoni = Number(prompt("kvadratninh tomonini kiriting"));

// let Perimetr = 4 * kvadratningTomoni;

// alert(Perimetr);

//masala-2

// let kvadratningYuzasi = Number(prompt("kvadtarning tomonini kiriting"))

// let yuzasi = kvadratningYuzasi**2;

// alert(yuzasi);

//masala-3

// let a = Number(prompt("kvadtarning a tomonini kiriting"));

// let b = Number(prompt("kvadtarning b tomonini kiriting"));

// let kvadratningYuzasi = a*b;
// let kvadratningPerimetri = 2* (a+b);

// alert(`Kvadratning yuzasi ${kvadratningYuzasi}`);
// alert(`Kvadratning perimetri ${kvadratningPerimetri}`);

//masala-4

// let d = Number(prompt("aylananing diametrini kiriting"));

// let p = 3.14;

// let uzunligi = p*d;

// alert(uzunligi);

//masala -5

// let a = Number(prompt("kubning a tomonini kiriting"));

// let hajmi = a**3;

// let tolaSirti = 6*(a**2);

// alert(`Kubning hajmi ${hajmi}`);
// alert(`Kubning tola sirti ${tolaSirti}`);

//masala-6

// let a = Number(prompt("paralelepipedning a tomonini kiriting"));

// let b = Number(prompt("paralelepipedning b tomonini kiriting"));

// let c = Number(prompt("paralelepipedning c tomonini kiriting"));

// let hajmi = a*b*c;

// let TolaSirti = 2*(a*b+b*c+a*c);

// alert(`paralelepipedning hajmi ${hajmi}`);
// alert(`paralelepipedning tola sirti ${TolaSirti}`);

//masala 7

// let R = Number(prompt("doiraning radiusini kiriting"));

// let p = 3.14;

// let uzunlik = 2 * p * R;

// let yuza = p * R ** 2;

// alert(`Doiraning uzunligi ${uzunlik}`);
// alert(`Doiraning yuzasi ${yuza}`);

//masala -8

// let a = Number(prompt("a sonini kiriting"));

// let b = Number(prompt("b sonini kiriting"));

// let ortaArif = (a+b)/2;

// alert(`sonlarning o'rta arifmetigi ${ortaArif}ga teng`);

//masala -9

// let a = Number(prompt(" manfiy bo'lmagan a sonini kiriting"));

// let b = Number(prompt(" manfiy bo'lmagan b sonini kiriting"));

// let ortaGeom = (a * b) **(0.5);

// alert(`sonlarning o'rta geometrigi ${ortaGeom}ga teng`);

//masala 10

// let a = Number(prompt(" manfiy bo'lmagan a sonini kiriting"));

// let b = Number(prompt(" manfiy bo'lmagan b sonini kiriting"));

// let sum = a + b;
// let multip = a * b;

// let kvadratA = a ** 2;
// let kvadratB = b ** 2;

// alert(`sonlarning yig'indisi ${sum}ga teng `);

// alert(`sonlarning ko'paytmasi ${multip}ga teng `);

// alert(` a sonining kvadrati ${kvadratA}ga teng `);

// alert(` b sonining kvadrati ${kvadratB}ga teng `);

//masala -11

// let a = Number(prompt(" no'lga teng bo'lmagan  a sonini kiriting"));

// let b = Number(prompt(" no'lga teng bo'lmagan b sonini kiriting"));

// let sum = a + b;
// let multip = a * b;

// alert(`sonlarning yig'indisi ${sum}ga teng `);

// alert(`sonlarning ko'paytmasi ${multip}ga teng `);

// if (a < 0) {
//   alert(-a);
// } else if (a > 0) {
//   alert(a);
// }

// if (b < 0) {
//   alert(-b);
// } else if (b > 0) {
//   alert(b);
// }

//masala -12

// let a = Number(prompt(" katetning a tomonini  kiriting"));
// let b = Number(prompt("  katetning b tomonini kiriting"));

// let c = (a ** 2 + b ** 2) ** 0.5;
// let perimetr = a + b + c;

// alert(`to'g'ri uchburchakning gitotenuzasi ${c}ga teng `);

// alert(`to'g'ri uchburchakning perimetri ${perimetr}ga teng `);

//masala -13

let R1 = Number(prompt(" R1>R2 R1 ni kiriting"));
let R2 = Number(prompt(" R1>R2 R2 ni kiriting"));

let p = 3.14;

let S1 = p * R1;
let S2 = p * R2;
let S3 = p * (R1 - R2);

alert(`ayalna yuzi S1 ${S1}ga teng `);
alert(`ayalna yuzi S2 ${S2}ga teng `);

alert(`aylana yuzlarinig ayirmasi S3 ${S3}ga teng `);

//keyingi 30 talik masala

//masala-1

// let L = Number(prompt("uzunlikni kiriting(sm)"));

// alert((L-L%100)/100);

//masala-2

// let M = Number(prompt("og'irlikni kiriting(kg)"));

// alert((M-M%1000)/1000);

//masala-3

// let bayt = Number(prompt("baytni kiriting"));

// alert((bayt-bayt%1024)/1024);

//masala -4