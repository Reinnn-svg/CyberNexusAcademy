/* Cyber Nexus Learning Center - practice languages.
   To add a language or a question, copy an existing block and edit the text.
   Each quiz item: q = question, c = choices, a = index of the correct choice, why = short explanation. */
(function () {
  var R = String.raw;

  window.LEARNING_LANGS = [

    {
      id: "html",
      name: "HTML",
      tag: "Page structure",
      intro: "HTML is the skeleton of every web page. These mini-projects let you practice the tags you will use most.",
      lessons: [
        {
          title: "1. Build a page skeleton",
          text: "Every page needs a doctype, an html element, a head for page information, and a body for what visitors see.",
          code: R`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, Cyber Nexus!</h1>
  <p>This is my first web page.</p>
</body>
</html>`,
          tip: "Only the content inside <body> appears on the page. The <title> shows on the browser tab.",
        },
        {
          title: "2. Text, links, and images",
          text: "Headings organize the page, strong and em add emphasis, a makes links, and img shows pictures.",
          code: R`<h2>My Subjects</h2>
<p>I study <strong>web technology</strong> and <em>programming</em>.</p>
<a href="LandingPage.html">Back to home</a>
<img src="logo.png" alt="School logo" width="120">`,
          tip: "Always write alt text. Screen readers say it out loud and it shows if the image fails to load.",
        },
        {
          title: "3. Lists and tables",
          text: "Use ul for bullets, ol for numbers, and table for rows and columns of data.",
          code: R`<ol>
  <li>Programming</li>
  <li>Web Technology</li>
</ol>

<table>
  <tr><th>Subject</th><th>Grade</th></tr>
  <tr><td>WEBTECH</td><td>92</td></tr>
  <tr><td>PROG</td><td>88</td></tr>
</table>`,
          tip: "th is a heading cell and td is a normal cell. Use tables for data, not for page layout.",
        },
        {
          title: "4. A contact form",
          text: "Forms collect information. Every field needs a label so people know what to type.",
          code: R`<form>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="msg">Message</label>
  <textarea id="msg" name="msg"></textarea>

  <button type="submit">Send</button>
</form>`,
          tip: "The label's for value must match the input's id. required stops the form from sending empty.",
        },
      ],
      practice: [
        {
          task: "Write an ordered (numbered) list of your three favorite subjects.",
          solution: R`<ol>
  <li>Programming</li>
  <li>Web Technology</li>
  <li>Databases</li>
</ol>`,
        },
        {
          task: "Add a link to LandingPage.html that says \"Back to home\".",
          solution: R`<a href="LandingPage.html">Back to home</a>`,
        },
      ],
      quiz: [
        { q: "Which tag creates the largest heading?", c: ["<h1>", "<h6>", "<head>", "<heading>"], a: 0, why: "h1 is the top-level heading. h6 is the smallest." },
        { q: "Which attribute gives an image a text description?", c: ["alt", "src", "href", "title"], a: 0, why: "alt text helps screen readers and shows if the image cannot load." },
        { q: "Which tag makes a numbered list?", c: ["<ol>", "<ul>", "<li>", "<list>"], a: 0, why: "ol is an ordered list. ul is an unordered (bullet) list." },
        { q: "Which tag creates a clickable link?", c: ["<a>", "<link>", "<url>", "<href>"], a: 0, why: "The anchor tag <a href=\"...\"> makes a link." },
        { q: "Where does the visible page content go?", c: ["Inside <body>", "Inside <head>", "Inside <title>", "Inside <meta>"], a: 0, why: "The body holds everything visitors see." },
        { q: "Which attribute stops a form field from being left empty?", c: ["required", "must", "needed", "validate"], a: 0, why: "Add required to an input and the browser will ask the user to fill it in." },
      ],
    },

    {
      id: "css",
      name: "CSS",
      tag: "Style and layout",
      intro: "CSS controls colors, spacing, and layout. Practice these four ideas and your pages will start to look professional.",
      lessons: [
        {
          title: "1. Selectors",
          text: "A selector chooses which elements to style. Use a tag name, a .class, or an #id.",
          code: R`h1 { color: navy; }

.card { background: white; }

#header { padding: 20px; }`,
          tip: "Use classes for things you repeat and ids for one unique element.",
        },
        {
          title: "2. Colors and text",
          text: "Set the font, text color, size, and alignment. Hex codes like #1b2437 describe exact colors.",
          code: R`body {
  font-family: Arial, sans-serif;
  color: #1b2437;
  background-color: #f4f7fb;
}

h1 {
  font-size: 32px;
  text-align: center;
}`,
          tip: "Pick a dark text color on a light background so it stays easy to read.",
        },
        {
          title: "3. The box model",
          text: "Every element is a box: content, padding inside, a border, and margin outside.",
          code: R`.card {
  padding: 20px;                 /* space inside */
  border: 2px solid #080670;
  margin: 16px;                  /* space outside */
  border-radius: 12px;
}`,
          tip: "Padding pushes the content away from the border. Margin pushes other elements away.",
        },
        {
          title: "4. Flexbox and responsive layout",
          text: "display: flex puts items in a row. A media query changes the layout on small screens.",
          code: R`.row {
  display: flex;
  gap: 16px;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .row { flex-direction: column; }
}`,
          tip: "On phones narrower than 600px the row becomes a column.",
        },
      ],
      practice: [
        {
          task: "Make every paragraph dark gray with a font size of 18px.",
          solution: R`p {
  color: #333;
  font-size: 18px;
}`,
        },
        {
          task: "Center the h1 heading and give it a 3px gold bottom border.",
          solution: R`h1 {
  text-align: center;
  border-bottom: 3px solid gold;
}`,
        },
      ],
      quiz: [
        { q: "Which symbol selects an element by its class?", c: [". (dot)", "# (hash)", "* (star)", "& (and)"], a: 0, why: ".card selects class=\"card\". #id selects an id." },
        { q: "Which property changes the text color?", c: ["color", "font-color", "text-color", "foreground"], a: 0, why: "color sets the text color. background-color sets the background." },
        { q: "In the box model, which part is the space INSIDE the border?", c: ["padding", "margin", "gap", "outline"], a: 0, why: "Padding is inside the border. Margin is outside." },
        { q: "Which declaration turns an element into a flex container?", c: ["display: flex;", "flex: on;", "layout: flex;", "position: flex;"], a: 0, why: "display: flex lets you line up the children in a row or column." },
        { q: "What does margin do?", c: ["Adds space outside the element", "Adds space inside the element", "Changes the text color", "Draws a border"], a: 0, why: "Margin creates space around the outside of an element." },
        { q: "Which rule applies styles only on small screens?", c: ["@media (max-width: 600px) { ... }", "@small { ... }", "@screen phone { ... }", "@responsive { ... }"], a: 0, why: "A media query with max-width applies only when the screen is that narrow or narrower." },
      ],
    },

    {
      id: "javascript",
      name: "JavaScript",
      tag: "Makes pages interactive",
      intro: "JavaScript runs in the browser and makes pages react to clicks, typing, and data. Try each example in your browser's console.",
      lessons: [
        {
          title: "1. Variables and output",
          text: "const holds a value that does not change. let holds a value you can change. console.log shows output.",
          code: [
            'const name = "Andrew";',
            'let age = 19;',
            'age = age + 1;',
            'console.log(`Hello, ${name}! You are ${age}.`);',
          ].join("\n"),
          tip: "Backticks let you put variables inside ${ }. Open the console with F12 to see the output.",
        },
        {
          title: "2. Functions and conditions",
          text: "A function is reusable. if statements let it choose between answers.",
          code: R`function getRemark(score) {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Passed";
  return "Review the lesson";
}

console.log(getRemark(88));   // Passed`,
          tip: "return sends a value back and stops the function.",
        },
        {
          title: "3. Arrays and loops",
          text: "An array holds many values. A for...of loop visits each one, and filter keeps only the ones you want.",
          code: R`const grades = [85, 92, 74];

let total = 0;
for (const g of grades) {
  total += g;
}
console.log(total / grades.length);   // 83.666...

const passed = grades.filter(g => g >= 75);
console.log(passed);                  // [85, 92]`,
          tip: "g => g >= 75 is an arrow function: it takes g and returns true or false.",
        },
        {
          title: "4. The DOM and events",
          text: "The DOM is the page as JavaScript sees it. You can find an element and react when the user clicks it.",
          code: R`const button = document.querySelector("#sayHi");

button.addEventListener("click", () => {
  document.querySelector("#message").textContent = "Hello, Cyber Nexus!";
});`,
          tip: "Your HTML needs <button id=\"sayHi\"> and <p id=\"message\"> for this to work.",
        },
      ],
      practice: [
        {
          task: "Write a function isEven(n) that returns true when n is even.",
          solution: R`function isEven(n) {
  return n % 2 === 0;
}`,
        },
        {
          task: "Given const nums = [1, 2, 3, 4, 5, 6]; use filter to keep only the even numbers.",
          solution: R`const evens = nums.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4, 6]`,
        },
      ],
      quiz: [
        { q: "Which keyword declares a variable that cannot be reassigned?", c: ["const", "let", "var", "fixed"], a: 0, why: "const keeps the same value. Use let when the value must change." },
        { q: "What does console.log() do?", c: ["Prints a value to the browser console", "Shows a popup on the page", "Saves the value to a file", "Changes the page title"], a: 0, why: "It is the easiest way to check your values while you code." },
        { q: "What is the result of 5 + \"5\" in JavaScript?", c: ["\"55\" (text)", "10", "NaN", "An error"], a: 0, why: "When one side is text, + joins them instead of adding." },
        { q: "Which method adds an item to the END of an array?", c: ["push()", "pop()", "shift()", "add()"], a: 0, why: "push adds to the end. pop removes from the end." },
        { q: "Which code runs a function when a button is clicked?", c: ["button.addEventListener(\"click\", ...)", "button.listen(\"click\")", "button.attachClick()", "button.onPress()"], a: 0, why: "addEventListener is the standard way to react to events." },
        { q: "What does === check?", c: ["That both the value and the type are equal", "Only that the values look similar", "Only that the types match", "That one value is assigned to the other"], a: 0, why: "=== is strict equality: 5 === \"5\" is false." },
      ],
    },

    {
      id: "python",
      name: "Python",
      tag: "Beginner friendly",
      intro: "Python reads almost like English, so it is a great first language for scripts, data, and automation.",
      lessons: [
        {
          title: "1. Variables and printing",
          text: "A variable stores a value. print() shows output, and an f-string puts variables inside text.",
          code: R`name = "Andrew"
age = 19
print("Hello,", name)
print(f"{name} is {age} years old")`,
          tip: "Python figures out the type by itself - no need to write int or string.",
        },
        {
          title: "2. Lists and loops",
          text: "A list holds many values. A for loop visits each item one by one.",
          code: R`grades = [85, 92, 74]
total = 0
for g in grades:
    total += g
print(total / len(grades))   # 83.666...`,
          tip: "Indentation (the spaces) tells Python which lines belong inside the loop.",
        },
        {
          title: "3. Functions",
          text: "A function is a reusable block of code. Use def to create it and return to send back a result.",
          code: R`def average(numbers):
    return sum(numbers) / len(numbers)

print(average([85, 92, 74]))   # 83.666...`,
          tip: "Write the function once, then call it with different lists.",
        },
        {
          title: "4. Conditions",
          text: "if, elif, and else let your program choose what to do.",
          code: R`score = 88
if score >= 90:
    print("Excellent")
elif score >= 75:
    print("Passed")
else:
    print("Review the lesson")`,
          tip: "Only the first true branch runs. Here the output is Passed.",
        },
      ],
      practice: [
        {
          task: "Write a function is_even(n) that returns True when n is even.",
          solution: R`def is_even(n):
    return n % 2 == 0`,
        },
        {
          task: "Print every number from 1 to 10 that is divisible by 3.",
          solution: R`for i in range(1, 11):
    if i % 3 == 0:
        print(i)      # 3, 6, 9`,
        },
      ],
      quiz: [
        { q: "Which keyword creates a function in Python?", c: ["def", "function", "func", "define"], a: 0, why: "Python uses def, for example def greet():" },
        { q: "What does len([4, 8, 15]) return?", c: ["3", "15", "4", "27"], a: 0, why: "len() counts the items in the list - there are 3." },
        { q: "Which symbol starts a one-line comment?", c: ["#", "//", "--", "/*"], a: 0, why: "Python comments start with #." },
        { q: "What is printed by print(7 // 2)?", c: ["3", "3.5", "4", "2"], a: 0, why: "// is floor division, so 7 // 2 is 3." },
        { q: "What type of value is \"Hello\"?", c: ["str", "int", "list", "bool"], a: 0, why: "Text in quotes is a string (str)." },
        { q: "Which line correctly loops through every item in a list called items?", c: ["for item in items:", "foreach item in items", "loop items as item", "each(items)"], a: 0, why: "Python's loop is for item in items:" },
      ],
    },

    {
      id: "java",
      name: "Java",
      tag: "Object-oriented",
      intro: "Java is strongly typed and object-oriented. It powers Android apps, school systems, and large business software.",
      lessons: [
        {
          title: "1. Your first program",
          text: "Every Java program starts in the main method inside a class.",
          code: R`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Cyber Nexus!");
    }
}`,
          tip: "The file name must match the public class name: Main.java.",
        },
        {
          title: "2. Variables and types",
          text: "In Java you must say the type of every variable.",
          code: R`int age = 19;
double gpa = 1.75;
String name = "Andrew";
boolean enrolled = true;`,
          tip: "int is a whole number, double has decimals, boolean is true or false.",
        },
        {
          title: "3. Arrays and loops",
          text: "An array stores a fixed number of values of the same type.",
          code: R`int[] grades = {85, 92, 74};
int total = 0;
for (int g : grades) {
    total += g;
}
System.out.println(total / (double) grades.length);`,
          tip: "Casting to double avoids integer division and keeps the decimals.",
        },
        {
          title: "4. Classes and objects",
          text: "A class is a blueprint. new creates an object from it.",
          code: R`class Student {
    String name;
    Student(String name) { this.name = name; }
    void greet() { System.out.println("Hi, I am " + name); }
}

Student s = new Student("Andrew");
s.greet();   // Hi, I am Andrew`,
          tip: "The constructor has the same name as the class and sets up the object.",
        },
      ],
      practice: [
        {
          task: "Write a method max(int a, int b) that returns the larger number.",
          solution: R`static int max(int a, int b) {
    return a > b ? a : b;
}`,
        },
        {
          task: "Print the numbers 1 to 5 using a for loop.",
          solution: R`for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
        },
      ],
      quiz: [
        { q: "Which method is the starting point of a Java program?", c: ["public static void main(String[] args)", "start()", "run()", "void init()"], a: 0, why: "The JVM looks for the main method to begin running." },
        { q: "Which keyword creates a new object?", c: ["new", "create", "make", "object"], a: 0, why: "new Student(\"Andrew\") creates a Student object." },
        { q: "Which type stores true or false?", c: ["boolean", "int", "String", "char"], a: 0, why: "boolean has only two values: true and false." },
        { q: "What does System.out.println(10 / 4); print?", c: ["2", "2.5", "3", "2.0"], a: 0, why: "Both numbers are int, so Java does integer division and drops the decimals." },
        { q: "Which keyword makes one class inherit from another?", c: ["extends", "inherits", "implements", "super"], a: 0, why: "class Teacher extends Person means Teacher inherits from Person." },
        { q: "What is the file extension of Java source code?", c: [".java", ".class", ".jar", ".js"], a: 0, why: "You write .java files; the compiler turns them into .class files." },
      ],
    },

    {
      id: "c",
      name: "C",
      tag: "Close to the machine",
      intro: "C is fast and small. Learning it teaches you how memory, arrays, and pointers really work.",
      lessons: [
        {
          title: "1. Your first program",
          text: "#include brings in a library. printf prints text, and main is where the program starts.",
          code: R`#include <stdio.h>

int main(void) {
    printf("Hello, Cyber Nexus!\n");
    return 0;
}`,
          tip: "\\n means new line. return 0 tells the system the program ended successfully.",
        },
        {
          title: "2. Variables and input",
          text: "scanf reads what the user types. The & gives scanf the address where it should store the value.",
          code: R`int age;
printf("Enter your age: ");
scanf("%d", &age);
printf("You are %d years old\n", age);`,
          tip: "%d is for int, %f for float, %s for text.",
        },
        {
          title: "3. Arrays and loops",
          text: "Arrays start at index 0. A for loop is the usual way to visit every element.",
          code: R`int grades[3] = {85, 92, 74};
int total = 0;
for (int i = 0; i < 3; i++) {
    total += grades[i];
}
printf("Average: %.2f\n", total / 3.0);`,
          tip: "%.2f prints a number with two decimals. Dividing by 3.0 keeps the decimals.",
        },
        {
          title: "4. Functions and pointers",
          text: "A pointer holds the address of a variable, so a function can change the original value.",
          code: R`void addOne(int *n) {
    *n = *n + 1;
}

int x = 5;
addOne(&x);
printf("%d\n", x);   // 6`,
          tip: "&x means the address of x. *n means the value stored at that address.",
        },
      ],
      practice: [
        {
          task: "Write a function int square(int n) that returns n times n.",
          solution: R`int square(int n) {
    return n * n;
}`,
        },
        {
          task: "Print the numbers from 10 down to 1.",
          solution: R`for (int i = 10; i >= 1; i--) {
    printf("%d\n", i);
}`,
        },
      ],
      quiz: [
        { q: "Which header file do you include to use printf?", c: ["stdio.h", "stdlib.h", "string.h", "math.h"], a: 0, why: "printf and scanf live in <stdio.h> (standard input/output)." },
        { q: "Which format specifier prints an int?", c: ["%d", "%s", "%c", "%f"], a: 0, why: "%d is for integers, %s for strings, %c for a character, %f for decimals." },
        { q: "What does the & operator give you in C?", c: ["The address of a variable", "The value of a variable", "A copy of a variable", "The size of a variable"], a: 0, why: "&x is the memory address of x." },
        { q: "What is the index of the first element of an array?", c: ["0", "1", "-1", "It depends"], a: 0, why: "C arrays are zero-based: grades[0] is the first item." },
        { q: "In main, what does return 0; usually mean?", c: ["The program finished successfully", "The program crashed", "The array is empty", "Nothing - it is ignored"], a: 0, why: "A return value of 0 signals success to the operating system." },
        { q: "Which character marks the end of a C string?", c: ["'\\0' (null terminator)", "'\\n'", "';'", "' ' (space)"], a: 0, why: "Strings are char arrays that end with the null character '\\0'." },
      ],
    },

    {
      id: "cpp",
      name: "C++",
      tag: "Fast and flexible",
      intro: "C++ builds on C and adds classes, strings, and containers like vector. It is used for games, systems, and performance-critical software.",
      lessons: [
        {
          title: "1. Your first program",
          text: "cout prints to the screen. << sends values into the output stream.",
          code: R`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, Cyber Nexus!" << endl;
    return 0;
}`,
          tip: "endl moves to the next line, just like \\n.",
        },
        {
          title: "2. Input and strings",
          text: "cin reads input. getline reads a whole line, including spaces.",
          code: R`#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    cout << "Your name: ";
    getline(cin, name);
    cout << "Welcome, " << name << "!" << endl;
}`,
          tip: "string is much easier to use than the char arrays in C.",
        },
        {
          title: "3. Vectors",
          text: "A vector is an array that can grow. push_back adds an item at the end.",
          code: R`#include <vector>

vector<int> grades = {85, 92, 74};
grades.push_back(90);

int total = 0;
for (int g : grades) total += g;
cout << total / (double) grades.size();`,
          tip: "size() tells you how many items are in the vector.",
        },
        {
          title: "4. Classes",
          text: "A class groups data and the functions that work on it.",
          code: R`class Student {
public:
    string name;
    Student(string n) : name(n) {}
    void greet() { cout << "Hi, I am " << name << endl; }
};

Student s("Andrew");
s.greet();`,
          tip: "public means code outside the class can use that member.",
        },
      ],
      practice: [
        {
          task: "Write a function swapValues(int &a, int &b) that swaps two numbers.",
          solution: R`void swapValues(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}`,
        },
        {
          task: "Given a vector<int> nums, print only the even numbers.",
          solution: R`for (int n : nums) {
    if (n % 2 == 0) cout << n << " ";
}`,
        },
      ],
      quiz: [
        { q: "Which object prints text to the console?", c: ["cout", "cin", "print", "echo"], a: 0, why: "cout is the standard output stream." },
        { q: "Which container is a resizable array?", c: ["vector", "array[]", "stack only", "tuple"], a: 0, why: "vector grows automatically when you push_back." },
        { q: "Which header do you include to use cout?", c: ["<iostream>", "<stdio.h>", "<string>", "<vector>"], a: 0, why: "<iostream> provides cin and cout." },
        { q: "In void f(int &a), what does & mean?", c: ["a is a reference to the caller's variable", "a is the address of a pointer", "a is a copy", "a is a constant"], a: 0, why: "A reference lets the function change the original variable." },
        { q: "Which keyword makes class members available outside the class?", c: ["public", "private", "static", "const"], a: 0, why: "public members can be used from anywhere." },
        { q: "What does the << operator do with cout?", c: ["Sends data into the output stream", "Shifts the screen left", "Compares two values", "Reads input"], a: 0, why: "cout << \"Hi\" inserts the text into the output stream." },
      ],
    },

    {
      id: "csharp",
      name: "C#",
      tag: "Apps and games",
      intro: "C# (say C-sharp) is used for Windows apps, websites with ASP.NET, and Unity games. Its syntax is clean and modern.",
      lessons: [
        {
          title: "1. Your first program",
          text: "Console.WriteLine prints a line of text. Main is where the program starts.",
          code: R`using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, Cyber Nexus!");
    }
}`,
          tip: "using System; lets you write Console instead of System.Console.",
        },
        {
          title: "2. Variables and string interpolation",
          text: "Put $ before a string to place variables directly inside { }.",
          code: R`string name = "Andrew";
int age = 19;
Console.WriteLine($"{name} is {age} years old");`,
          tip: "var lets C# pick the type for you: var score = 88;",
        },
        {
          title: "3. Lists and foreach",
          text: "List<int> is a growing list. foreach visits every item.",
          code: R`using System.Collections.Generic;

var grades = new List<int> { 85, 92, 74 };
grades.Add(90);

int total = 0;
foreach (int g in grades)
{
    total += g;
}
Console.WriteLine(total / (double)grades.Count);`,
          tip: "Use .Count for lists and .Length for arrays.",
        },
        {
          title: "4. Classes and properties",
          text: "A property is a clean way to expose a value. { get; set; } creates one automatically.",
          code: R`class Student
{
    public string Name { get; set; }
    public void Greet() => Console.WriteLine($"Hi, I am {Name}");
}

var s = new Student { Name = "Andrew" };
s.Greet();`,
          tip: "Object initializer { Name = ... } sets properties right when you create the object.",
        },
      ],
      practice: [
        {
          task: "Write a method IsEven(int n) that returns true when n is even.",
          solution: R`static bool IsEven(int n) => n % 2 == 0;`,
        },
        {
          task: "Use a for loop to add the numbers 1 to 100 and print the total.",
          solution: R`int sum = 0;
for (int i = 1; i <= 100; i++)
{
    sum += i;
}
Console.WriteLine(sum);   // 5050`,
        },
      ],
      quiz: [
        { q: "Which statement prints a line to the console?", c: ["Console.WriteLine()", "print()", "System.out.println()", "echo"], a: 0, why: "Console.WriteLine writes text and moves to a new line." },
        { q: "Which keyword imports a namespace?", c: ["using", "import", "include", "require"], a: 0, why: "using System; imports the System namespace." },
        { q: "Which collection can grow as you add items?", c: ["List<T>", "int[]", "const", "string"], a: 0, why: "A List<T> resizes automatically; an array has a fixed size." },
        { q: "What does a string that starts with $ do, like $\"Hi {name}\"?", c: ["String interpolation", "Defines a constant", "Encrypts the text", "Creates a comment"], a: 0, why: "$ lets you embed variables and expressions inside { }." },
        { q: "Which loop is made for visiting every item in a collection?", c: ["foreach", "while(true)", "do", "goto"], a: 0, why: "foreach (var item in items) visits each item once." },
        { q: "What does { get; set; } create?", c: ["An auto-implemented property", "A method", "A constructor", "A namespace"], a: 0, why: "It creates a property with a hidden backing field." },
      ],
    },

    {
      id: "sql",
      name: "SQL",
      tag: "Query any database",
      intro: "SQL is the language for asking questions of a database. These lessons use standard SQL that works in most systems.",
      lessons: [
        {
          title: "1. SELECT",
          text: "SELECT chooses columns. FROM says which table to read.",
          code: R`SELECT first_name, last_name
FROM students;`,
          tip: "SELECT * means all columns.",
        },
        {
          title: "2. WHERE and ORDER BY",
          text: "WHERE keeps only the rows you want. ORDER BY sorts the result.",
          code: R`SELECT first_name, grade
FROM students
WHERE grade >= 75
ORDER BY grade DESC;`,
          tip: "DESC is high to low. ASC (the default) is low to high.",
        },
        {
          title: "3. INSERT, UPDATE, DELETE",
          text: "These three statements add, change, and remove rows.",
          code: R`INSERT INTO students (first_name, last_name, grade)
VALUES ('Ana', 'Cruz', 88);

UPDATE students SET grade = 90 WHERE last_name = 'Cruz';

DELETE FROM students WHERE grade < 50;`,
          tip: "Always include WHERE on UPDATE and DELETE, or every row changes!",
        },
        {
          title: "4. JOIN and GROUP BY",
          text: "JOIN combines two tables. GROUP BY lets you count or average per group.",
          code: R`SELECT s.section,
       COUNT(*)       AS total,
       AVG(g.grade)   AS average
FROM students s
JOIN grades g ON g.student_id = s.id
GROUP BY s.section;`,
          tip: "AS gives a column a friendlier name in the result.",
        },
      ],
      practice: [
        {
          task: "Select all students who are in Section A.",
          solution: R`SELECT * FROM students WHERE section = 'A';`,
        },
        {
          task: "Count how many students have a grade of 75 or higher.",
          solution: R`SELECT COUNT(*) FROM students WHERE grade >= 75;`,
        },
      ],
      quiz: [
        { q: "Which clause filters rows?", c: ["WHERE", "ORDER BY", "GROUP BY", "FROM"], a: 0, why: "WHERE keeps only the rows that match the condition." },
        { q: "Which statement adds a new row?", c: ["INSERT INTO", "ADD ROW", "UPDATE", "CREATE ROW"], a: 0, why: "INSERT INTO table (columns) VALUES (...) adds a row." },
        { q: "Which clause sorts the result?", c: ["ORDER BY", "SORT", "GROUP BY", "ARRANGE"], a: 0, why: "ORDER BY column ASC|DESC sorts the output." },
        { q: "Which function counts rows?", c: ["COUNT()", "SUM()", "TOTAL()", "LEN()"], a: 0, why: "COUNT(*) returns the number of rows." },
        { q: "What is a PRIMARY KEY?", c: ["A column that uniquely identifies each row", "The first column of any table", "A password for the database", "A column that must be text"], a: 0, why: "No two rows can have the same primary key value." },
        { q: "Which JOIN returns only rows that match in both tables?", c: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "OUTER ONLY"], a: 0, why: "INNER JOIN keeps matching rows only." },
      ],
    },

    {
      id: "mysql",
      name: "MySQL",
      tag: "Popular database server",
      intro: "MySQL is a free database server used by many websites. It adds its own data types, functions, and tools on top of SQL.",
      lessons: [
        {
          title: "1. Create a database and table",
          text: "CREATE DATABASE makes a database, USE selects it, and CREATE TABLE defines the columns.",
          code: R`CREATE DATABASE cybernexus;
USE cybernexus;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name  VARCHAR(50) NOT NULL,
  section    CHAR(1),
  grade      DECIMAL(5,2)
);`,
          tip: "AUTO_INCREMENT gives each new row the next id automatically.",
        },
        {
          title: "2. Insert many rows and LIMIT",
          text: "One INSERT can add several rows. LIMIT keeps only the first rows of a result.",
          code: R`INSERT INTO students (first_name, last_name, section, grade) VALUES
  ('Ana', 'Cruz',  'A', 88),
  ('Ben', 'Reyes', 'B', 79);

SELECT * FROM students
ORDER BY grade DESC
LIMIT 5;`,
          tip: "ORDER BY grade DESC LIMIT 5 is a quick way to get a top-5 list.",
        },
        {
          title: "3. Handy MySQL functions",
          text: "CONCAT joins text, ROUND trims decimals, and NOW() gives the current date and time.",
          code: R`SELECT CONCAT(first_name, ' ', last_name) AS full_name,
       ROUND(grade, 1)                    AS grade,
       NOW()                              AS checked_at
FROM students;`,
          tip: "Functions run for every row in the result.",
        },
        {
          title: "4. Foreign keys and indexes",
          text: "A foreign key connects two tables. An index makes searches on a column faster.",
          code: R`CREATE TABLE grades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  subject VARCHAR(50),
  score DECIMAL(5,2),
  FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE INDEX idx_students_section ON students(section);`,
          tip: "The foreign key stops you from adding a grade for a student that does not exist.",
        },
      ],
      practice: [
        {
          task: "Create a table subjects with an auto-increment id (primary key) and a name of up to 80 characters.",
          solution: R`CREATE TABLE subjects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL
);`,
        },
        {
          task: "Show the 3 students with the highest grades.",
          solution: R`SELECT * FROM students
ORDER BY grade DESC
LIMIT 3;`,
        },
      ],
      quiz: [
        { q: "Which keyword makes a number column count up by itself?", c: ["AUTO_INCREMENT", "AUTONUMBER", "SERIAL_ID", "COUNTER"], a: 0, why: "MySQL uses AUTO_INCREMENT for automatic ids." },
        { q: "Which command selects the database you want to work in?", c: ["USE", "OPEN", "SELECT DATABASE", "CONNECT"], a: 0, why: "USE cybernexus; makes it the current database." },
        { q: "Which clause limits how many rows come back?", c: ["LIMIT", "TOP", "MAXROWS", "ONLY"], a: 0, why: "MySQL uses LIMIT (SQL Server uses TOP)." },
        { q: "Which function joins pieces of text together?", c: ["CONCAT()", "JOIN()", "MERGE()", "ADD()"], a: 0, why: "CONCAT(first_name, ' ', last_name) builds a full name." },
        { q: "Which data type stores text up to a chosen length?", c: ["VARCHAR(n)", "INT", "DECIMAL", "DATE"], a: 0, why: "VARCHAR(50) stores up to 50 characters." },
        { q: "What does a FOREIGN KEY do?", c: ["Links a column to the primary key of another table", "Encrypts a column", "Sorts the table", "Makes a column unique and hidden"], a: 0, why: "It keeps related tables consistent." },
      ],
    },

    {
      id: "excel",
      name: "Excel",
      tag: "Formulas and data",
      intro: "Excel turns rows of numbers into answers. Learn a few formulas and you can build a gradebook or a budget.",
      lessons: [
        {
          title: "1. SUM and AVERAGE",
          text: "Every formula starts with =. A range like B2:B6 means all cells from B2 down to B6.",
          code: R`=SUM(B2:B6)
=AVERAGE(B2:B6)
=MAX(B2:B6)`,
          tip: "Click and drag over cells while typing a formula to fill in the range for you.",
        },
        {
          title: "2. IF",
          text: "IF checks a condition and returns one value when true and another when false.",
          code: R`=IF(B2>=75, "Passed", "Failed")`,
          tip: "Drag the fill handle (small square at the corner of the cell) to copy the formula down.",
        },
        {
          title: "3. VLOOKUP and XLOOKUP",
          text: "Look up a value, like a student ID, and bring back information from another table.",
          code: R`=VLOOKUP(A2, Students!A:C, 3, FALSE)
=XLOOKUP(A2, Students!A:A, Students!C:C, "Not found")`,
          tip: "FALSE means exact match. XLOOKUP is the newer, easier version in recent Excel.",
        },
        {
          title: "4. COUNTIF and SUMIF",
          text: "Count or add only the cells that meet a condition.",
          code: R`=COUNTIF(D2:D40, "Passed")
=SUMIF(C2:C40, "A", D2:D40)`,
          tip: "Use $ to lock a cell when you copy a formula: $B$1 never changes.",
        },
      ],
      practice: [
        {
          task: "Find the highest score in cells B2 to B20.",
          solution: R`=MAX(B2:B20)`,
        },
        {
          task: "Show \"Honor\" if the grade in C2 is 90 or higher, otherwise leave the cell empty.",
          solution: R`=IF(C2>=90, "Honor", "")`,
        },
      ],
      quiz: [
        { q: "What must every Excel formula start with?", c: ["=", "#", "@", "/"], a: 0, why: "The equals sign tells Excel you are typing a formula." },
        { q: "Which function adds up a range of numbers?", c: ["SUM", "ADD", "TOTALIZE", "PLUS"], a: 0, why: "=SUM(B2:B6) adds the five cells." },
        { q: "What does $A$1 mean?", c: ["An absolute reference that does not change when copied", "A dollar amount", "A comment", "The first row only"], a: 0, why: "The $ signs lock the column and the row." },
        { q: "Which function looks a value up in the first column of a table?", c: ["VLOOKUP", "COUNTIF", "ROUND", "CONCAT"], a: 0, why: "VLOOKUP searches down the first column and returns a value from the same row." },
        { q: "Which function counts only the cells that meet a condition?", c: ["COUNTIF", "COUNT", "SUM", "AVERAGE"], a: 0, why: "COUNTIF(range, condition) counts matching cells." },
        { q: "What does =AVERAGE(B2:B6) calculate?", c: ["The mean of the five cells", "The biggest of the five cells", "The sum of the five cells", "The number of cells"], a: 0, why: "AVERAGE adds the values and divides by how many there are." },
      ],
    },
  ];
})();
