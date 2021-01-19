button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 1"));
  console.log("Listener 1");
});
button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 2"));
  console.log("Listener 2");
});

//Answer 


// Первый EventListener попадает в стэк вызова => 
// Внутри первого EventListener есть микротаска Promise, она планируется => 
// Выполняем консоль лог внутри первого EventListener => 
// Первый EventListener заканчивает своё выполнение и выходит из стэка =>
// Выполняется микротаска из первого EventListener =>
// Второй EventListener попадает в стэк вызова => 
// Внутри второго EventListener есть микротаска Promise, она планируется => 
// Выполняем консоль лог внутри второго EventListener => 
// Второй EventListener заканчивает своё выполнение и выходит из стэка =>
// Выполняется микротаска из второго EventListener =>


// Результат: console.log("Listener 1") => console.log("Microtask 1") => console.log("Listener 2") => console.log("Microtask 2")


// Answer Ends





button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 1"));
  console.log("Listener 1");
});

button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 2"));
  console.log("Listener 2");
});

button.click();



//Answer 

// Из-за присутствия ручного вызова button.click() поведение будет меняться

// В стэк попадат button.click() =>
// Первый EventListener попадает в стэк вызова => 
// Внутри первого EventListener есть микротаска Promise, она планируется => 
// Выполняем консоль лог внутри первого EventListener => 
// Первый EventListener заканчивает своё выполнение и выходит из стэка =>
// Т.к мы не закончили выполнение button.click(), мы не можем начать выполнение микротасков, а переходим к второму EventListener
// Второй EventListener попадает в стэк вызова => 
// Внутри второго EventListener есть микротаска Promise, она планируется => 
// Выполняем консоль лог внутри второго EventListener => 
// Второй EventListener заканчивает своё выполнение и выходит из стэка =>
// Выполняется микротаска из первого EventListener =>
// Выполняется микротаска из второго EventListener =>


// Результат: console.log("Listener 1") => console.log("Listener 2") => console.log("Microtask 1") => console.log("Microtask 2")


// Answer Ends