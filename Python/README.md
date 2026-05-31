# Python Lessons

This README preserves the Python lesson content in sequence from `Lessons/Lessons.pdf` and the matching slide images. Each lesson includes the original slide image plus an OCR transcript so the notes are searchable.

## Source

- [Lessons PDF](Lessons/Lessons.pdf)
- Slide images are stored in [Lessons](Lessons).

## Lesson Index

1. [Variables](#1-variables)
2. [Local and Global Variable](#11-local-and-global-variable)
3. [Data Types](#2-data-types)
4. [Operators](#3-operators)
5. [is vs ==](#31-is-vs)
6. [Input and Output](#4-input-and-output)
7. [Typecasting](#5-typecasting)
8. [Typecasting](#51-typecasting)
9. [Conditional Statements](#6-conditional-statements)
10. [Conditional-Shorthand](#61-conditional-shorthand)
11. [Match Case](#7-match-case)
12. [Loops](#8-loops)
13. [Enumerate](#81-enumerate)
14. [Functions](#9-functions)
15. [Lambda Function](#91-lambda-function)
16. [Strings](#10-strings)
17. [String Methods](#101-string-methods)
18. [String formatting](#102-string-formatting)
19. [F-String](#103-f-string)
20. [Lists](#11-lists)
21. [List Methods](#111-list-methods)
22. [Tuples](#12-tuples)
23. [Tuples Methods](#121-tuples-methods)
24. [Docstrings](#13-docstrings)
25. [Sets](#14-sets)
26. [Sets Methods](#141-sets-methods)
27. [Dictionary](#15-dictionary)
28. [Dictionary](#151-dictionary)
29. [Dictionary Methods](#152-dictionary-methods)
30. [Exception Handling](#16-exception-handling)
31. [Exception Handling](#17-exception-handling)
32. [Virtual-Environment](#18-virtual-environment)
33. [Modules](#19-modules)
34. [Import-Statement](#191-import-statement)
35. [Import __name__=__main__](#192-import-namemain)
36. [OS Module](#193-os-module)
37. [File Module](#194-file-module)
38. [File Methods](#195-file-methods)
39. [OOPs](#20-oops)
40. [Access Modifiers](#201-access-modifiers)
41. [Inheritance](#202-inheritance)
42. [Inheritance Types](#2021-inheritance-types)
43. [Static Methods](#203-static-methods)
44. [Instance vs Class Variables](#204-instance-vs-class-variables)
45. [Class Methods](#205-class-methods)
46. [Super Keyword](#206-super-keyword)
47. [Decorators Intro](#21-decorators-intro)
48. [Decorators With Examples](#211-decorators-with-examples)
49. [Getters and Setters](#212-getters-and-setters)
50. [dir, __dict__, help](#22-dir-dict-help)
51. [Dunder Methods](#23-dunder-methods)
52. [Method Overriding](#24-method-overriding)
53. [Operator Overloading](#25-operator-overloading)
54. [Time Module](#26-time-module)
55. [Walrus Operator](#27-walrus-operator)
56. [SHutil Module](#28-shutil-module)
57. [Requests Module](#29-requests-module)
58. [Generators](#30-generators)
59. [Mini Projects](#mini-projects)

## 1. Variables

![1. Variables](Lessons/1.%20Variables.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON VARIABLES
Store data. Reuse it. Make your code smart!
1. WHAT IS A VARIABLE?
2. SYNTAX
AVarianie is anamed containeruised rc
Value
store aata in memory
"Rahul"
variable_name = value
(data)
It allows vou to store a value and
Example:
use it later in vour proaram
name
Variable
name = "Rahul"
mane
age = 18
is_student
True
3. EXAMPLES
4. REASSIGNING VARIABLES
Variable
Value
Data Type
Example
You can change the value of a variable
SCOre
namA
#Rabul"
str (String)
name = "Pabul'
10
scor = 10
age
int (Integer)
age = 18
printscore
# 1C
nelgnt
5.8
float (Float)
height = 5.E
score = 20
SCOre
Is_student
True
boo(Boolean)
is student = Trug
printscore)
# 20
20
5. MULTIPLE VARIABLES
6. DATA TYPE OF A VARIABLE
a) Multiple assignment
b) Assigning multiple values
Use tvne function to check data tvne
X, v, z = 1, 2, 3
"Rahull'
type
= 20
print(x, y, z) # 1 2 3
ade = 18
c = 30
print(type(name))
# <class 'str's
print(type(age))
# <class 'int'>
7. RULES FOR NAMING VARIABLES
8. SCOPE OF VARIABLES
Valid Examples
Can contain letters (a-z, A-Z), digits (0-9) and
srudent name
a) Local Variable: Defined inside a function,
underscore)
accessible only inside that function.
_age
Must start with a letter or underscore (_).
age1
b) Global Variable: Defined outside all functions,
Case-sensitive (age, Age and AGE are different)
total marks
accessible throughout the program
# alobal variable
Global
(x)
Cannot start with a digit
Invalid exambles
KevwOrGs
X 1рaтe
def my func:
# local varlable
student namє
print(Y
(y)
No spaces allowed
amarks
print X)
my_func()
DYNAMIC TYPING
10. . CONSTANTS IN PYTHON
11. MEMORY IDEA (BASIC)
Python is dynamically typed. You dont need to
Pvthon doesn't have constants. but bv
A variable holds a reference to the value in memory
declare the type ot variable. It decides automatically.
convention we use UPPER CASE names
= 10
PT = 3.14159
points tc
GRAVTTY P C X
10
"HеLLo"
3.14
NAME =
"Farth'
variable
(value in memorv
a= rase
Thpse arp variables. but treated as constant
12. COMMON
MISTAKES
QUICK RECAP
EXTRA TIP
Forgetting quotes for strings: name = Rahul &
Variables store data
Use meaninaful variable names so vour code
x Using spaces in variable names:
nатe У
m Use meaningtul names
is easv ro read and undersrand
ss rollow naming rules.
Example:
•  Starting with a digit: 1age &
§ Reassign anytime
X = 5
not good
( Using keywords: for = 10 &
w Pvthon is case-sensitive
total students = E
пerres
```

</details>

## 1.1. Local and Global Variable

![1.1. Local and Global Variable](Lessons/1.1.%20Local%20and%20Global%20Variable.png)

<details>
<summary>OCR transcript</summary>

```text
LOCAL vS GLOBAL VARIABLES IN PYTHON
Variables define where data is stored.
The scope of a variable determines where it can be accessed in a program.
LOCAL VARIABLE
GLOBAL VARIABLE
Defined inside a function.
•Defined outside any function.
• Can be accessed only within that function.
• Can be accessed from anywhere in the prograr
• Created when the runction is called
(Inside or outside runctions)
• Destroyed when the tunction ends.
• exists tor the entire duration ot the program
1. EXAMPLE: LOCAL VARIABLE
def my_function():
y = 19
# local variablo
Explanation:
Output:
Inside function, x = 10
print("Inside function, x ='
• X Is created inside my_ runctionO
• It exists only during the function call.
If you uncomment print(x)
my_function()
• Trving to access x outside the tunction
you'll get:
wil raise NameErroi
NameError: name x
# print(x) # X Error: x is not defined
• 1S
not detined
2. EXAMPLE: GLOBAL VARIABLE
= 10# Glohal variable
Eyplanation:
Output:
def my_function()
• x is defined outside anv function
print("Inside function,
Inside function
= 1€
so It is global.
Outside function, X = 1€
my_function ()
• It can be accessed inside the
print("Outside function, x =", x)
runction and outside as well
3. MODIFYING GLOBAL VARIABLE INSIDE A FUNCTION
X = 10
Explanation:
Output:
def update():
Inside function, x = 2€
guoDal x
Tell Python we want
• By default, if you assign a value to a
Outside function, x = 2t
to use the global x
variable inside a function. Pvthon treats
х = 20
Mochfies gllobally
IASA OCA VARIADIO
print("Inside function,
without global kevword
• The global keyword allows us to modifs
Uncommenting update) will no1
update()
the global variable
change the
• global x. It will create
print("Outside function,
a new local x inside the runction
4. RULES SUMMARY
@: KEY TAKEAWAY
Rule
Local Variable
Global Variable
• Use local variables for temporary data inside functions
inside ant
Outside any function
• Use global variables for data that needs to be share
осоре
Only inside that function
Throughout the proaram
across functions.
fotimc
While the function runs
Entire program execution
• Avoid using too many global variables-they car
CanDOR DA aCCASSEG OUSICA
Can be accessed anywhere
make code hard to debug and maintain
Modification
Doesn't affect olobal variable
Tuse globa kevwordto mocir
• Prefer passing data as function parameters and
returning results
5. QUICK VISUAL SUMMARY
A COMMON ERROR
Local Variable
Global Variable
Irving to access a local variable outside it:
my_function()
Exists only
iobalscooe
Accessible
function causes Nametrror.
iincido th
in che
• progran
def f():
func1()
print(y)
# X NameErro
```

</details>

## 2. Data Types

![2. Data Types](Lessons/2.%20Data%20Types.png)

<details>
<summary>OCR transcript</summary>

```text
name e "Rahul
PYTHON DATA TYPES
age = 18
height = 5.8
Every value in Python has a type.
is student = True
Know the type, use it the right way!
IC
PYTHOI
1. WHAT ARE DATA TYPES?
2. BASIC (BUILT-IN) DATA TYPES
Data types tell Python what kind of
| 123
MEMORY TRICK
Type
Description
Example
value a variable holds.
1nT
whole numbers
it helos Python to store. understanc
("Hello"
Think of data types as
10, -5. 0
and work with data correctlv
True
different categories
float
Decimal number
3.14. -0.5. 2.1
of items in a school
Text / String
"Hello', 'Pythor
[1,2,37 [1,2,3]
bag. Every iten
belonas to:
bool
True or False
True, ralse
particular tvpe
list
orcerer collectior
mutable
[1, 2, 3]
tuplE
Ordered collection
(1, 2, 3)
DATA TYPES
dict
Kev-Value pair‹
{'name': 'Rahul"
sel
Unordered uniaue
{1, 2, 3}
3. EXAMPLES WITH CODE
tuple
123
3.14
"Hello"
True
(1.2,3'
[{1,2,3}
whole numbei
Decimal numbe
lext  String
True or Falsi
Ordered, Mutable
Ordered, immutable
a0e s 10
height = 5.c
is student = True
marks = 80. 90. 751
coords = (10. 28)
"аce: 18
nums = 1. 2. 3
Tornocvoeraden onncacvberneronn
Tonccvoes scwoencnrorancscvdemnarks
OULOUE
DUtoUd
Outout:
UCol
vutou
Outout:
Output:
Outout
<class 'int':
<class "float'> <class 'str'y
<class 'tuple':
4. CHECK DATA TYPE USING type()
5. MUTAI
BLE vs IMMUTABLE
6. TYPE HIERARCHY (SIMPLIFIED
Use typety runction to knon
Mutable (can be changed
the type ot any value.
Tist dicc, sec
All data types in Python belong to the
obiect
object
print tvoey s cclass "int'
y = "Hello"
print(tvpe(v)) # <class 'str'>
Immutable (cannot be changed)
int, float, str, tuple, boo.
Tioai
z = [1, 2, 3.
orint(tvoe(z)) # <class 'list
# new obiect created
it now oniect created
(All other built-in tvpes are derived from obiect
= (1, 2)
7. TYPE CONVERSION (QUICK IDEA)
8. COMMON OPERATIONS
9. COMMON MISTAKES
roucan converc one oaraiuv
using type casting.
• int / float: +, -, *,
using numbers in auotes: ac
y = "10"
ina single = insread or =s in condirior
print(int(x))
• list: append(). remove). len(
~ Forgetting quotes for string
orntEтrоauи
iring to change immutable tvpes like int. str. tupl
7 = 3.7
remover leno
orint(straz
Mixing different data types without conversio
10. QUICK RECAP
11. PRACTICE TIME!
Every value in Python has a type
whar is the gararvne or each or the rollowina
1 25
use cypeg to cneck the cype
5. [10, 20, 30]
2 3.14
6.1. 2. 3
Some types are mutable (can change),
some are immutable (cannot change).
. "Python"
7. ('a': 1, 'b': 2}
Practice dailv
choose the right data type for the right task
8. 1. 2. 3
become prc
in Python!
```

</details>

## 3. Operators

![3. Operators](Lessons/3.%20Operators.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON OPERATORS
printx + V)
Operators are special symbols that perform operations on
values and variables.
1. WHAT ARE OPERATORS?
2. TYPES OF OPERATORS IN PYTHON
Operators are used to pertorm operations on
Memory Trick
Python nas the roulowing types or operato
one, two or more values (operanas) and
~ Arithmetic Operator‹
return a result.
Comparison (Relational) Operator:
Assignment Operators
Operator = Action
Opel
ranceunwna
• Logical Operators
+
action is pertormed
~ Bitwise Operators
Operators
Operand Operator Operand
Result = Outout
v Membership Operators
ldentity Uperator:
3. OPERATOR DETAILS WITH EXAMPLES
Type
Operator
Descriptior
Exampli
Code
Result
Addition
ArIrоmeTic
эubtractior
Pertorms matr
Multiplication
prints *
Division (float result)
rioor Division inceder resulc
Modulus tremainder
Exponentiation (power)
Equal to
2. Comparison
relacionau
Greater thar
combare
Less than
Greater than or equal tc
IFEEE ENNNENe
or equal te
AsSign
assiar
3. Assignment
Multioiv and assian
Subtract and assign
(Assign values)
Divice and assian
Floor divide and assign
Modulus and assign
Exponent and assign
4. Logical
anо
True if both conditions are Truc
True and rals
icombine condicional
True if at least one is Trut
reverse the result rue
SSтсс
orint(True or False®
5. Bitwis
Bitwise OR
Works on binar
Bitwise XOR
print(5 |
print (5
Bitwise NOT (inverts bits)
Tofk chir
OrInt~s
print (5 << 1)
Right Shift
6. Membershir
True if value eyists
(lest it value is present
3 in 1,2,3]
print (3 in [1,2,31
ina sequence
nOTir
True if value does not exist
4 n0 10 .2.5
orancia nou in.s
compare memory
7. Identity
True it both are same obiect
X iS 1
print(x 1s y)
True  Falst
ocation
True if both are not same obiect
XIs nOT
print(x is not v'
True / Falst
4. OPERATOR PRECEDENCE (HIGH TO LOW)
5. EXAMPLE: COMBINING OPERATORS
COMMON MISTAKES
High
y = 5
X Using = instead of == in condition:
(if x
( 3 5 к
result =  (x  +  y)
> 20 and not (y =
OrLncresut
x Forgetting operator precedenc
Step by step:
Dividing two integers and expectint
1 (x + y) = 15
to concrot the
integer (use 7 for floo
(2 15 * 2 = 38
¡order of operatior
Confusing is with =:
3 30 > 20 -> True
4 y == 5
X  Using not with non-boolear
6 True and False -* False
7. QUICK RECAP
8. PRACTICE TIME!
Operators help us pertorm actions on value:
Fredic the outout or the rollow
Python has 7 types of operators.
1. print(10 + 3 * 2)
4. print(2 ** 3 + 4 % 3'
Know the purpose and usage of each operatoi
b.orint(o 15 5
Practice regularly to use them ettectivelv
3. print(5 > 3 and 2 < 1 or 3 == 3.
6 rptanu 3 a
```

</details>

## 3.1. is vs ==

![3.1. is vs ==](Lessons/3.1.%20is%20vs%20==.png)

<details>
<summary>OCR transcript</summary>

```text
Python is vs ==
Both are comparison operators, but they check different things.
1. == (Equality Operator)
2. is (Identity Operator)
Checks if the values of two objects are equal.
Checks if two variables point to the same obiect in memorv.
= 10
10
VS
b = 10
print(a == b) #  True
print(a is b)
# Maybe True (for small integers)
•Compares the contents/values.
• Compares the identity (memory location).
Calls the __eq__() method internally.
• Calls the __is__ logic (checks id()).
3. Key Difference
Aspect
== (Equality)
is (Identity)
What it checks
Value egualitv
Obiect identitv (same memory location)
How it works
Compares contents using __еq__()
Compares memory addresses using idO
When to use
When vou want to compare values
When you want to check if two variables
refer to the same obiect
Example
# Are the values same?
a is b
# Are both
variables same obiect?
Can be overridden?
Yes_eq_.
can be customized)
No (identity is always about memory]
4. Examples
Example 1: Integers
Example 2: Large Integers
Example 3: Strings
Example 4: Lists
"hello"
• П1.
e "belle"
b = [1, 2, 3]
print(a as b) # True
print(a ms b) # True
print(a as b)
ATFTO
print(a #s b)
" TРTO
print(a is b) * True (due to interning)
print(a is b) # False
print(a is b)
# True (may be True)
print(a is b)
Falso
Python reuses (interns) small integers 5 to 266)
Large integers are not interned, so
String interning may happen based on
ere wirn camo conronre
dirtoren oDiOcEs
implomentation.
different obiects
5. id() Function
6. When to Use
7. Special Case: None
Returns the memory address (identity) of an object.
Use == when:
Nono
You want to compare values.
print(a ss b)
и True
You don't care where the obiects are stored.
print(a is b)
# True
= 1. 2. 3]
Default choice for most comparisons
print(ad(a))
e.g..
Always use 'is' or 'is not' to compare
Use is when;
print(dc))
# difforont From
WinNone
You want to check if two variables refer
Donuse
a witn None
to the exact same obiect.
a and b reterence the same obiect.
Useful with None.
if x is None:
Good
c is a new obiect with same value
Useful in singletons or caching scenarios
eeamone
noterecommondec
"Remember:
•= compares values, as compares identity (memory location).
For most cases. use ==. Use is onlv when vou really need to check identitv
```

</details>

## 4. Input and Output

![4. Input and Output](Lessons/4.%20Input%20and%20Output.png)

<details>
<summary>OCR transcript</summary>

```text
name = input("Enter
PYTHON INPUT AND OUTPUT
print("Hello".
age = int(input("Enter age: "))
Take input from the user. Show output to the user.
prant( Next year you wall be
Interact with your program!
WHAT IS INPUT AND OUTPUT?
2. THE print() FUNCTION (OUTPUT)
The print function is used to display text, numbers or values on the screer
INPUT
Please enter
Input means getting data
vounngnes
eXE
Explanatio
from the user.
Rahul
•o. WorLoH"
Frints a text istring
We use the input
Prints a numbe
Tunction.
"Pэnn"
Printe the Vae or a varianie
orir t 3)
Prints the result ot an exoressio
OUTPUT
Prints multiple
Output means showing
Hello, Rahul!
cacato the user
You are awesome!
print("I love'
"Python")
Prints multiple strinas
We use the print
- By default, print adds a new line after the output
" to change it
print("Hello", ends" ")
Hello woric
3. THE input() FUNCTION (INPUT)
44. TAKING NUMERIC INPUT (TYPE CONVERSION)
mhe anouct runccionsu seg ro take inoucrrom ine
ceinoucrecurnss rino. we musc converso
t alwavs retur
•оrо
int, float etc. to do calculations
Example Code
vvhac happens
Explanatior
Asks user to enter name
and stores it in 'name
• int(input("Enter age:
Converts input tc
age = input("Enter your age:
and stores it in
Asks user to enter age
L'аge
Float
height = float(input("Enter
Converts input tc
city = input("Enter your
city:")
Asks user to enter city
and stores it in 'city
a = int (input("Enter a: "))
b = int(nput("Enter b: "))
ow wecan dc
sum = a t
mathematica
input () returns data as STRING.
print("Sum is:"
If you enter a number, it will still be stored as text.
You type:
Puthor stores: "25" (string
s convert input to the required data tvpe before doina calculation:
COMMONEMISTAKESI
5. COMPLETE EXAMPLES
rorgetting tvpe conversion
Examble "s Grec
ExamDle ZRAGOEIt
prantn+
# Error! (string +  int.
name = ampucs enter your name
a = int(input("Enter first namber: "))
X Trying to convert invalid inpu
print  velcome
total e a + b
# if user enters 'abc' -> ValueErro
X  Expecting number but getting string
input("Enter ar
b = input("Enter b: ")
7. USEFUL TIPS
8. INPUT AND OUTPUT FLOW
9. MINI PRACTICE
Ruse clea
Outon
use prince to snow meaningrut messages
2 Take two numbers as inout and print their sur
use ende"" in printO to print on the sat
3 Take radius of a circle as inout and prin
lest vor
* Take temperature in
it to Fahrenheil
10. QUICK RECAP
input
printO
Type Conversion
Output gives results to the ust
Together they make you
Dy deraulc
program interactive! r
```

</details>

## 5. Typecasting

![5. Typecasting](Lessons/5.%20Typecasting.png)

<details>
<summary>OCR transcript</summary>

```text
# string
PYTHON TYPE CASTING
ye int(x
ZEVt
Convert one data type into another.
print(z)
The right type for the right operation!
1. WHAT IS TYPE CASTING?
2. BUILT-IN TYPE CASTING FUNCTIONS
3. BASIC CONVERSIONS WITH EXAMPLES
lype casting (or conversion) is the process
Converrs o
Strina to Intege
of converting one data type into another.
It helps us pertorm operations
chacredure
•asceciric eacacvoe
float
8.5"
T9.5
print(y
String to Floal
"123"
123
x = "3.14"
Outou
Boolear
bool 0.
Salcc
y = float(X)
Conver
DrintaV
5.1 4
Integer to String
String
Tuple
tuolean.zO
= 186
= strX
Outpu
setO
set 1.2.1
11, 2,
погапссу
roat to integei
You must convert the string to integer first.
dict
Dictionary dict(name="Ravi") {'name:'Ravi'
у = 7 89
AROOTFAN CONVERSIONS IhOOOI
5. LIST, TUPLE, SET, DICT CONVERSIONS
6. IMPLICIT vs EXPLICIT CONVERSION
0.0. ", [J, O, O, setO,
Python automatically converts smaller tvor
Г'a.'b'. "c'g
To Tuple
print(bool(e))
print (0001(1))
l1, 2, 3]
•- cuplelx,
printi v
(1, 2, 3)
# 12.5
print(boo1([]))
To Set (removes duplicates'
Explicit Conversion (Manual)
We manually convert using built-in function:
printEv
{1, 2, 3]
Te Dictionary
c = int(a) + b
# convert string to int
COMMON USE CASES
8. INVALID CONVERSIONS (WILL RAISE ERROR)
9. HOW TO HANDLE CONVERSION ERRORS
Use trv…excent to handle errors araceful
ant"aoc"
10. PRACTICE EXAMPLES
11. QUICK RECAP
12. MEMORY TRICK
1Convert the following strin
Type casting converts one type to another
Think of type casting like changini
= 9 87
eRCG
Strins
Content (value) same,
00
```

</details>

## 5.1. Typecasting

![5.1. Typecasting](Lessons/5.1.%20Typecasting.png)

<details>
<summary>OCR transcript</summary>

```text
int(3.14)
PYTHON TYPECASTING
float('2.5')
2.5
str(100)
Convert one data type into another.
list('Hi')
* Г'H, "9
1. WHAT IS TYPECASTING?
2. TYPES OF TYPECASTING
3. BUILT-IN TYPECASTING FUNCTIONS
lypecasting (lype conversion) is the process
Implicit Typecasting (Automatic)
Function
Converts Tc
Examplt
Resul
or converting a value trom one data type
rython automatically converts one data type
to another data type
to another (wider) type to avoid data loss
int
Integei
int('25')
float ()
Float
float('3.14")
s int
• To perform operations between
# float
str()
String
str(123)
'123'
incompaciole daua ryoes.
str
# 12.5 int - float)
DooE
Boolear
False
• To take input as one type and work with
listO
List
LIstab"
a 'b'.
another.
Explicit Typecasting (Manual)
• oensureine correct type of data
The programmer converts the data typi
tuple()
Tuple
tuple([1,2])
(1, 2)
ror runctions
manually using built-in functions.
corIE
Set
set('abea")
{'a','b', 'c')
dict()
Dictionar
dict(a=l, b=z a':1,'b':2
antidy,
# 100 str  int)
4. EXAMPLES OF EXPLICIT TYPECASTING
To Integer (intO
• To Float (float)
• To Strina (str)
•  To Boolean (bool
оrincaincCоnу
orinacroadao
printaint -20
prant(tloat 3.14*
printstr(3.14))
print(int 100*)
print(float("-2.5 ))
print(str(True))
print(bool'Hello'
• To List (list())
• To Tuple (tuple())
• To Set (set())
• To Dict (dictty'
print(list('Hi'))
# ('H', '1*)
print(tuple([1, 2])) # (1, 2)
print(set ('banana')) # ('a', 'n', 'b')
print(dict(as1, b=2)) #('a': 1, 'b': 2)
print(list((1, 2)))
# [1, 2)
print(tuple('ab'))
print(set([1, 2, 2, 3J)) # (1, 2, 3)
print(dict([('x', 10), ('y', 20)]))
printist(13.
# (3, 4] *
print(tuple(1, 2)))
# (1, 2) *
print(set((4, 5, 5)))
# 14, 5
# 'X':
10. 'у":
Order may vary in set
Order may vary an sec
5. TYPECASTING WITH USER INPUT
6. IMPORTANT NOTES
7. COMMON TYPECASTING ERRORS
• Typecastina may result in data loss
• Valuetrror: When the value is not appropriatt
age = int input'Enter your age: "
Example: int (9.99) - 9 (decimal part lost)
for the target type
height = float input('Enter height in meters:
• Not al conversions are possible
int('abc')
omesrror
print(type(name)
" celass
Example: int('hello') - ValueError
print(type(age))
# <class "int'>
•TypeError: When the type is unsupported
• Be careful while converting large number
print(type(height)
berween intandirioat orecisior
int([1, 2, 3]) # TypeError
8. TYPECASTING TABLE (QUICK REFERENCE)
From \ To
fioat
bool
list
tuple
9. BEST PRACTICES
float()
strO
bool()
list()
tuple()
set()
dict() X
Always know the data type you are workins
intO
StrOE
bool()
list() X
tupleX
with (use typeg)
int() *
float "
boolo
list()
tuple()
v
list()
© Convert explicitly when needed.
intX
TOarX
StrIDE
bool()
tuple
sere
Validate user input before typecasting
tuole
ToarX
DOоEт
list()
tioarx
STPIEI
list()
tune
Handle exceptions using try-except
intX
tioatx
StrIET
list()
tune
Avoid unnecessary type conversior
v = Possible
X = Not directlv possible
Possible if the string represents a valid number
Understand types. Convert wisely. Code effectively! (У
```

</details>

## 6. Conditional Statements

![6. Conditional Statements](Lessons/6.%20Conditional%20Statements.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON CONDITIONALS
IF
print("Positive")
ELIF
(IF, ELSE, ELIF)
ELSE
Make decisions in your program. Choose the right path!
1. WHAT ARE CONDITIONALS?
2. COMPARISON OPERATORS (Used in Conditions)
conditionals alow vour oroaram to
оoeraco
Example
Result ff x = 5. v = 10
Python checks a condition
caualtc
ralse
Not equal tc
Exampl
If it is False, it runs another block.
Greater thar
m)- Memory Trick
Less thar
Think of conditionals as traffic sianals for
Greater rhan or eaualtc
у = 16
× >= )
Green light (lrue) -> Go this way.
Red lignt
Less than or equal to
Tru
3. IF STATEMENT
4. IF…..ELSE STATEMENT
Executes a block of code it the condition is True
Executes one block if the condition is True
another block if it is raise
11 agе >= 18:
Youare
print("You are an adult.
age > 18:
print( "You are an adult. "*
5. IF...ELIF…..ELSE LADDER
NESTED IF STATEMENT
Checks mulciple congicions one oy
antf etotomont neido эncthor fetstor
if marks >= 90:
print Grade A")
print( "You can drive."
elit marks >a э0:
to driv
omtт oradе c
oranc rou are coo youne ce
You nee
7. LOGICAL OPERATORS (Combine Conditions)
8. TRUTH VALUES
9. COMMON MISTAKES
= 5. v = 1€
Alconditions evalnare
to either True or Falst
X  Using = instead of == in conditions
True if both
xgoana v >
concition is
True if at least oni
X  Indentation error:
y Emoty string
(Alwavs indent the block unde
1) x > 5 and x < 10 -+ Truc
1r x > 5 and x < 16:
x  Missina colon : after if. elif. elst
§6 y < S or y =e 7•
3) not (v == 7\ = falee
© Using log
x is less than 5 or equal to 7
10. PRACTICE EXAMPLES
4 Grade a stude
11. QUICK RECAP
12. MINI CHALLENGE
13. MEMORY TRICK
v  Use if to rur
when condition is True
Write a program that:
IF the condition is True
Use if...else to choose between two options
• Takes a number as input
• If the number is positive -* print "Positive
ELIF
• If the number is negative -* print "Negati
option, check this
valwavs check conditions -+ True or False
• If the number is zero
Feifece
ie aelieaese
```

</details>

## 6.1 Conditional-Shorthand

![6.1 Conditional-Shorthand](Lessons/6.1%20Conditional-Shorthand.png)

<details>
<summary>OCR transcript</summary>

```text
Python if-else Shorthand
age = 20
Write simple if-else logic in a single line.
status = "Adult" if age ›= 18 else "Minor"
Shorthand if-else is also called the "ternary operator"
print(status)
#  Adul+
because it takes three parts: a condition, a value if True, and a value if False
1. BASIC SYNTAX
HOW IT WORKS
value if true if condition else value if_false
Evaluate the conditior
• If condition is True -> returns value if_ true
condition is False
If True
If False
- returns value_if_false
BхAMPLES
KeTurг
Returr
whas You Want
Normant-else
Result (if
condition is True condition is False
Result (if
value_if_trut
value_if_false
if n % 2
check ir a nu
even
3. NESTED (CHAINED) SHORTHAND
"Odd'
You can chain multiole conditions. but
use it only for simple cases (for readability)
scorf
grade
"A" if score >= 90 else "B" i1
score >= 75 else
score >= 50 elsi
Check if a person
status = "Adult" if
is adult or minoi
age >= 18 else "Minor"
Equivalent to:
if score s
QO•
grade :
grade
Return a dofaul
50:
value i None
"C'
AvOId overusing chaininc
It logic is complex, regular it-else
4. WHEN TO USE
is easier o reacrancmainrain
uçe shorhand when
TAvOiGEShorhand When
5. SHORTHAND WITH FUNCTIONS (COMMON PATTERN)
The logic is simple and short
& The logic is complex or long.
Orten used to return one or two values
~It makes the code more concise
You need multiple statements
and easv to read
inside ir or else
return "Adult" if age >= 18 else "Minor'
You are assianing a value based
X  Readability would suffer.
onaconcicion
print(get_ status(21))
print(get_ status 16))
6. QUICK REFERENCE
KEY TAKEAWAY
§6 n >A
Shorthand if-else makes youi
code shorter and cleaner
Tuse iror simole value sejecrion
Chained (multiple conditions
grade = "A' if s >e
v Prefer readability over cleverness
When in doubt, use the norma
```

</details>

## 7. Match Case

![7. Match Case](Lessons/7.%20Match%20Case.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON MATCH-CASE
day = "Monday"
matchdav
Pattern Matching Made Easy (Introduced in Python 3.10)
case "Monday";
print("
The match statement tests a value against multiple patteri
print("Almost weekend!")
"Friday":
t is more powerful and readable than multiple if-elif-else statements
print("Just ano
her davn
1. SYNTAX
2. BASIC EXAMPLE
3. PATTERN TYPES WITH EXAMPLES
Exan
Out
"annle":
Multiole
"Ca
? deTauat case opczonas
: = (2, 3)
case o. o
SкеуP
print("Origin"
pranes oacurday
print(f"Point({x}, (y))")
"Sundav"
Alace 15 Zc
case -
• Indentation is significant
Claec Pattern
4. DEFAULT CASE
color = "voBlos
case Poincax,
print("Origin".
print($"Point({xI. (yt)"*
case "veDIow":
Guard Patten
ur condicion.
case x if x % 2 m
Pгane 0о
case x if x X 2 !:
match y
5. NESTED PATTERNS
6. MATCH-CASE VS IF-ELIF-ELSE
data = {"type": "user"
"age": 22.
htaollf.olec
Can be long and
7. WHEN TO USE?
When you have many possible conditior
When matching complex data structure
print( f"Admin (namel"
(lists. dicts. obiects
To make code cleaner, shorter and easit
8. LIST / TUI
LE PATTERNS (EXAI
9.
IMPORTANTENOTSS
10. COMMON MISTAKE
case is not rall-through uike in some
x Expecting fall-through behavior
oeiD.
th rest ir
restetrest*
patterns (use guards or .get())
12. QUICK RECAP
Create a match-case to print the name of a month from number (1-12)
Use match-case to write cleaner, more expressive and maintainable Python code! &
```

</details>

## 8. Loops

![8. Loops](Lessons/8.%20Loops.png)

<details>
<summary>OCR transcript</summary>

```text
for i in range(5):
print(i)
PYTHON LOOPS
i=1
while i <= 5:
print(i)
Repeat actions, save time, write efficient code!
1. WHAT IS A LOOP?
2. TYPES OF LOOPS IN PYTHON
3. FOR LOOP
A loop is used to repeat a block of cod
Used to iterate over a sequence
multible times.
Start
for Loor
(list, tuple, string, range, etc.)
it helps to automate repetitive task:
Used to iterate over a sequence
and saves rime and ettort.
(list, tuple, string, range, etc.)
for variable in sequence
besc when vc
times to repeat
Examole Tr Print numbers o to 4
for i in range(5)
Memory Trick
Loop = Do somethinc
Stop
while LOop
acaln and again.
Repeats as ong as a conditior
wichouc rewricing
is true
Examole 2: Iterate over a list
mdry cnrtes coregedi
4. range() FUNCTION
5. WHILE LOOP
6. LOOP FLOW DIAGRAMS
range(start, stop, step,
Repeats as long as the condition is True
Generates a sequence of number:
for Loor
while Loop
2 to 8 step 2)
10 to 2 (sten -2]
Examole: Print numbersT tO S
1  =1
Outout
for 1 in ranget. o):
while i <= 5:
1 2 3 45
Execute codr
7. NESTED LOOPS
8. LOOP CONTROL STATEMENTS
9. INFINITE LOOP
A loop inside another loop
Ourou
it the condition never becomes ralse
for 1 in range(1,
the ooo runs rorever
if i se ?
print(f"iasiy, joli")
looo completelv
orintS
while True:
Skine the eurcon
•i in rances)r
Pattern Example
in rance(s)r
Be caretull intinite oons car
crash your progran
10. COMMON USE CASES
11. COMMON MISTAKES
12. QUICK RECAP
Froc
Forgetting to update the condition in while loor
vUse for loop when you know the number of iteration
Repeat until user gives correct inpui
causes infinite loop
Keep askinq for data until valid
• Using = instead of == in conditions
of iterations
Menu-driven programs
X  Incorrect indentation
Use range with for loop to gen
Game loop!
x  Modifying list while looping over i
Reading files line by line
X Not usinc
13. PRACTICE TIME!
Print numbers from 1 to 10
2. Print even numbers from 2 3. Print table of 5
to 20 using for loop.
iSyiroSx10
```

</details>

## 8.1. Enumerate

![8.1. Enumerate](Lessons/8.1.%20Enumerate.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON enumerate()
tasks = "Write code". "Review PRs". "Fix buas"
in Python. enumerate) is a built-in function that lets vou loop
for index, task in enumerate (tasks):
through a list (or any iterable) and keeps track of both the
print(f"Task <index}: {taskt"
index (the count) and the item at the same time
# Outout
Instead of just getting the items, it wraps them into
Task O: Write code
neat package or findex, Itemy pairs
# lask 1: Review PR
1. THE SYNTAX
It returns an iterator that vields (index, item) pairs
enumerate(iterable, start=0)
Example:
• iterable: The collection of items vou want to loor
through (like a list. tuple. or strina).
(0
), 'a')
(1, 'b')
(2, 'c')
• start (optional): The number you want the counter
to start from. by detault. it Is O.
cach time vou loop, you get the next pair.
2. HOW IT WORKS IN PRACTICE
3. STARTING FROM 1 (OR ANY OTHER NUMBER)
madine vou have a list of tasks for the dav:
Human beinas don't usuallv start countinc
It vou are building a menu, a quiz game, or a top-10 list,
= l'Write code",
, "Review PRs", "Fix bugs".
you can tell enumerate to start counting trom 1:
for index, task in enumerate tasks):
tasks
"ROVTOU
F1X bugs".
print(f"Task findex': {task\")
number, task in enumerate(tasks.
startE
print(t <number‹. 'tasks")
Output:
rask or write code
Task 1: Review PRs
Output
Task 2: Fix buas
T.write code
• Review PRS
3. Fix bugs
By detault, the index starts at 0
You can start from anv number vou like
start=s -> 5, 6, 7.
1. WHAT IS ACTUALLY HAPPENING UNDER THE HOOD?
If vou run enumerate by itself outside of a loop. it returns an "enumerate obiect" (which is an iterator).
It you convert it directly into a list, you can see exactly what it's doing
It creates a list of tuples:
fruits = ["apple"
"banana"]
fruits = ["apple",
"banana"]
print(list enumeratefruits))
enumerate(fruits
# Output: [(0, 'apple'), (1, 'banana')]
(0, 'apple')
-> (1, 'banana')
When you use it in a for loop, Python automaticall)
unpacks those tuples into two separate variables for you:
Think of it as
The enumerate function is a helpey
for index , fruit in enumerate(fruits):
that keeps count for vou while vou
print index, truit)
enioy the items
QUICK SUMMARY
Purpose
oon throuch an rerable wirh an auromaric counter iIndex
common
</>
starteU
Using a manual counter
Derault Start
Star
Use start=1 (or any number) to change where counting begins
print(i, item,
Keturns
• enumerate) is simpler
Best Use Cases
cleaner. ancrless error-orone
```

</details>

## 9. Functions

![9. Functions](Lessons/9.%20Functions.png)

<details>
<summary>OCR transcript</summary>

```text
def greet(name):
PYTHON FUNCTIONS
return f"Hello, {name}!"
Write once, use many times!
print (greet ("Python*))
# Hello, Python
Functions make your code modular, reusable and easy to maintain.
1. WHAT IS A FUNCTION?
2. DEFINING AND CALLING FUNCTIONS|
3. TYPES OF FUNCTIONS
Arunction is a оck оi
Defining a Function
TABUI
performs a specific task.
(Already available in Python
It runs onlv when it is called
1, D).
mine
tunction_ name(parameters):
Calling a Function
(B) User-defined Function
result :
Drint resut
Q: Memory Trick
Think of a function like a machini
rerurn nY
the work, and gives output (retu
A function is defined once
ouc can ve caueo many times
orintsquareq
4. PARAMETERS AND ARGUMENTS
5. RETURN STATEMENT
6. DEFAULT PARAMETERS
it an argument is not provided, detault value I
• Arquments: values passed durinc function call
def greet (name):
greet"ALic
, Alice!
# Hi. Bob!
Like a variable
If there is no return, the functior
• >  Default parameters make functions more flexible
7. VARIABLE LENGTH ARGUMENTS
R. LAMRDA FUI
9. RECURSIVE FUNCTIONS
(A) *aras
A runcrion thar cals
der add ajrrarash
def fact(n):
(B)  kwargs (Keyword Arguments.
print[ square (5))
print racts
add = lambda a
fact(5)
5 * fact(4)
5 * 4 * fact(3
print(add(3, 4))
g
Useful for short and simple function:
* 1 = 120
10. SCOPE OF VARIABLES
11. BUILT-IN FUNCTION EXAMPLES
12. PRACTICE EXERCISES
X = 10
x =  w Loca variabs
Sret n pstural numbor
TKSOUICKRECAP
Use def to
Use recurn c
Functions can havi
Use *args anc
**kwargs fo
Tambda is for shor
ono. lno trnction
эnd eэvo timo
- func(5)*
recurn
Functions are the building blocks ot clean and powertul Python programs
```

</details>

## 9.1. Lambda Function

![9.1. Lambda Function](Lessons/9.1.%20Lambda%20Function.png)

<details>
<summary>OCR transcript</summary>

```text
Syntax
Python Lambda Function
lambda arguments: expression
A lambda function is a small, anonymous (nameless) function
defined using the lambda keyword.
Input
Output
Key Points
Lambda vs def Function
Basic Examples
v  Lambda functions can have any number of arguments.
def function
lambda function
1. No argument
but onlv one expression
§  = lambda:
"Helllo"
The expression is evaluated and returned automatically
Has a name
Anonymous (no name)
print(f())
# Outout: HeLLo
• Lambda functions are anonymous (no name).
Can have multiple
Can have only
2. One argument
sudremenss
one expression
f = lambda x:
Useful for short, simple operations.
© Often used as arguments to higher-order functions
Uses return keyword
Returns automatically
print(f(5))
# Output: 10
(like map(), filter(), sorted(), etc.).
More readable for
Useful for short,
3. Multiple arguments
f = lambda x, y: x
+ Y
complex logic
simple logic
print(f(3, 4))
# Outout: 7
More Examples
1. Square of a number
2. Maximum of two numbers
3. Concatenate two strings
square = lambda x: × ** 2
maxamum = lambda a, b: a if a > b else b
concat = lambda a, b: a
print(square(4))
# 16
print(maximum(10, 20))
# 20
print(concat("Hello", "World"))
# Hello World
4. Check even or odd
5. String length
6. List sorting with lambda
is_even = lambda x: x % 2 == 0
print(is_even(10))
# True
length = lambda s: len(s)
nums = [(1, 3), (4, 1), (2, 2)]
print(is_even(7))
# False
print(length("Python"))
# 6
nums.sort(key=lambda x: x[1])
print(nums) # [(4, 1), (2, 2), (1, 3)]
Using Lambda with Built-in Functions
Equivalent def vs lambda
When to Use Lambda?
1. map - Apolv runction to all items
•  When you need a small function
lambda x: x * 2
nums =1. 2. 3. 41
for a short time.
is equivalent to;
squared = list(map(lambda X: x ** 2, nums))
print(souared
#1. 4. 9. 161
• When you are passing a function
def f(x):
as an araumenta
return x
2. filter - Filter items based on condition
When the logic is simple and
lambda a, b: a + b
nums = [1, 2, 3, 4, 5, 6]
readability is not compromised.
is equivalent to:
evens = list(filter(lambda X: X % 2 aa 0, nums))
def f(a, b):
Coranetevens
# [2, 4, 6]
return a
Limitations
3. sorted() - Sort using custom key
words = ['apple', 'banana',
'cherry'
'date']
©  Can have only one expression.
Tambda x: x ir x > O else -X
sorted_words sortedwords,key=lambda x: lenX))
© Not suitable for complex logic.
is equivalent to:
DrintsOY ted_words)
# 'date
.'apole. cherry"
'banana"
©  Harder to debug (no name).
def f(x):
G  Readability can decrease if overused
return × if X > geIse
Summary
Lambda functions are small, anonymous functions defined using lambda.
They can have any number of arquments but only one expression.
They are mainly used with higher-order functions like map(), filter(), and sorted().
```

</details>

## 10. Strings

![10. Strings](Lessons/10.%20Strings.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON STRING
text = "Hello, Python!'
print(text.upper())
# HELLORPYTHON
Strings are immutable sequence of characters
print(text [0])
They are enclosed in single), double (" ") or triple (  ) quotes
print(len(text))
1. CREATING STRINGS
2. COMMON STRING METHODS
3. STRING INDEXING & SLICING
• Double Quotes
rstrip()
Q- TIP
textl::-1.
4. STRING FORMATTING
name s namel and I am agel
name as Adace and d am Zo
print("My name is %s and I am %d." % (name, age)
# My name is Alice and I am 25
5. ESCAPE SEQUENCES
6. STRING OPERATIONS
7. USEFUL BUILT-IN FUNCTIONS
lenfe\
ord(c)
maxFychon
sorted s
sorted'bca"
8. EXAMPLES (WITH OUTPUT)
9. MULTI-LINE STRINGS
10. RAW STRINGS
raw = rClusers\adace shew_roddel
2.text =  Pyrhor
prancctext.scrappy
# yth
prancacexc ::-1
to avoid escap
11. STRING COMPARISON
orinttext.sousi.bтa rar br. 'ca
multiplle
12. IMPORTANT NOTES
13. COM
MON MISTAKES
14. QUICK RECAP
Use single, double or triple quote:
xForgetting tha
```

</details>

## 10.1. String Methods

![10.1. String Methods](Lessons/10.1.%20String%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON STRINGS METHODS
Strings are ordered, immutable sequence of characters
text = "Hello, Python!"
print (text.upper())
# HELLO, PYTHON!
STRING METHODS (Most Used)
No.
Method
Description
Example
Output
EXAMPLES (With Output)
upper()
text.upper
text = "Hello. Python!'
2 lower()
Converts strlng
2print(text.upper())
# HELLO. PYTHON
ro owercase
text.lower
print(text.lower())
# hello. python
B title()
Converts first letter of
each word to uppercast
text.titlen
4  print(text.title())
.неLо. P
(4  capitalize ()
s the firsc
reyr.cantrarze
5 print(text.capitalize
6 print(text.swapcase())
5 swapcase )
пeзeпспaтасто
[7]
print( Hello, Python!
10(
Hеgo. Pr
".strip())
6 strip()
both sides
8 print(text.replace( "Python"
Istrip()
rexrrasuros
# Hello. World
rstrip()
Removes whitespace
orint text.tind "rvthon"
gnt sida
9 replace(old.new)
Replaces old substring
10 print(text.count("1"))
find(sub)
Returns index of first
11 printtext.startswith("Hello").
e or substrina
12 print(text.endswith("!"))
CouncisSuo
Returns count or occurrences
13 print(text.split('
12 startswith(sub)
Ghecks ir strine starcs
with substring
text.startswith"HeГro
True
13endswith(sub)
Checks if string
with substring
(5 print (len(text))
(14 split(sep)
['Hello', 'Python!'.
16
print(text.center(20
(5 join(iterable)
into a string
(7 print(text.Ijust(20,))
(6 len()
Returns length of string
G3 print(text.rjust(20, ."))
......Hello, Python
Centers string in given widtl
(9  print("Hello", isalpha():
18
Tnust width. rill
20 print("12345".isdigit())
Right aligns string in giver
text.rjust(20,
21 print("Hello123".isalnum)
20isalpha()
Ghecks ir au characcers
"Hello".isaloha('
22 print("
".isspace())
21 isdigit()
are digits
Ghecks ir au characters
23 print("hello".islower()
(22 isalnum()
Checks if all characters
"Helo123".isalnum
24print("HELLO". isupper()
23isspace()
Checks it al characters
".isspace
25 print("Hello World".istitle())
24  islower()
Checks if all characters
"hello".islower
26 print("Line1\nLine2".isprintable()) # Fals
(25 isupper()
Checks ir al characrers
"HELLO".isupper
26 istitle()
Checks if string is in
- TIP
"Hello World".istitle()
True
Strings are immutable. You cannot change a string
isprintable
Checks if all characters
1 can only create a new one.
INGSILCINC
ATTTNe
CHECK METHODS
"Hello
isalpha
-> Only alphabet:
Output
visdiqit()
-> Only digits
_сехсто:эт
rirses characcers
"Hоmо
• "My name is  and age is .".format (name, age) # § format
~isalnum()
-> Alohabets + digit:
text 7:1
• to endi
-> Onlv spaces
ndex
vislower
Allowercas
text -7:1
ESCAPE SEQUENCES
visupper(
Reverse the string
'InohtvP .oeн
single Quote
-> Title case
Tar
Rackslash
text (2:10:2] Step of 2 from 2 to §
v isprintable() -> All printable char:
Double Quote
Strings are immutable, ordered and versatile. Use these methods to process and manipulate text efficiently! S
```

</details>

## 10.2 String formatting

![10.2 String formatting](Lessons/10.2%20String%20formatting.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON STRING FORMATTING
age = 36
String formatting allows you to insert variables or values
orint t"MV
into a string in a structured way.
and I am <age] years old.")
1. OLD STYLE FORMATTING (%)
2. NEW STYLE FORMATTING (str.formatt())
Examolt
Outout
String (or any object
Hoпo"
Placeholder for any type of valuc
Positional argument
Named placeholders
"%f" % 3.14159
"3.141590*
Formatting for floating point ( decimal places
Formar wirh width O characters wide'
Integers in hexadecima
30:<105
Left-align within the specified width
{0•$10
Right-align within the specified width
Integers in hexadecima
"%X" % 255
{0:^10
Center-align within the specified widt
<ORO>о
Pad with zeros on the left to fill widtt
A literal '%' character
"100%%
0:0т
rad wich zeros on the rignc to milt widch
ЗOРо^1о
EХAMPLE
Number with commas and z decima olace
a0e s 3о
9•1o9r
h 10 and decimalnlace
30•510 2F3
Number with width 10, 2 decimals, right-aligi
# Output: My name is Alice and I am 30 years old.
3. BASIC EXAMPLES (NEW STYLE)
4. FLOATING POINT FORMATTING
# 2: Usinq positional arqur
# Output: Pi is approximately 3.14.
print"Mv name is names
5. WIDTH & ALIGNMENT
6.COMMAS & PERCENTAGE
number = 1234567.89
m verausc same as 106107
print("Name: (0:10} Age: {1:5]".format (name, age))
Ontnuee Cormattos numbors 1 234 669 80
print("Name: {0:<10} Age: {1:5}".format(name, age))
orint Percentage: 6..2 ".tormat 6.1234
Output: Percentage: 12.34%
# Contor glien
print("Name: {0:^10} Age: {1:5}".format (name, age))
Pad with zeros on the left
7. WIDTH & DECIMAL PLACES
01 8 3.14159
print("Name: {0:0<10} Age: {1:5}".format(name, aqe)) # Name: Alice@0000 Age
oranci rormacceo numbers aosso.err.rormacuosn
# Pad with zeros on both sides
# Output: Formatted number
rormat name. a00
Ontout• Sormattos numbor
8. MORE EXAMPLES
9. QUICK RECAP
# Multiple types
print("String: ), Integer: {], Float: {:.2f)".format("Hi", 42, 3.14159).
42, Float: 3.14
print("Hex (lower): {e:x). Hex (UPPER): {0:X)".format (255, 255):
TIP: F-strings (Python 3.6+) are the easiest and most readable way!
print(f"My name is fnamel and I am fagel years old."
```

</details>

## 10.3 F-String

![10.3 F-String](Lessons/10.3%20F-String.png)

<details>
<summary>OCR transcript</summary>

```text
"Alice
PYTHON F-STRINGS
f-strings (formatted string literals) make it easy to
msg = f"Hello, (name)! You are (age) years old."
embed expressions inside string literals using curly braces {}.
orint(msa) # Hello. Alice! You are 25 vears olc
1. BASIC SYNTAX
4. COMMON USE CASES
8. CONVERSION FLAGS
Prefix the string with f or F anc
place expressions inside  .
use vast
Use !r, !s, la to convert value:
Meaning
ade = Z5
strO
зaдо"
Multole vartables
, у = 3, 4
vEsy"
renr
# Uutput
a, b = 10,
print t"arb • a + br")
atb w 31
2. SIMPLE EXAMPLES
Condition ir
. MULTI-LINE F-S1
TRINC
print(f"('Even' if nX2an€
Use triple quotes for mult
prantt vaaue:x
Loop with f-string
print(f"Item {i)")
atem .
age = 25
b a 57
# Sum: 12
Dersor
3 15 36
Expressions inside {
years old
is {person('age')
vears O1d."
print(text
"Area: soi * r ** 21"
* Area: 12.0004
. нелдо Aдcе,
5. ALIGNMENT EXAMPLES
# Youare 2 vears od
Outout widrhe10
41512•<103*
10. RAW F-STRINGS
Right
+*542•5103*
Combine r and t o avoid escave sequenca
while using expressions
3. FORMATTING OPTIONS
Left (text)
f"{'hi': <10}
path =  r"C: \new\folder
file =  "data.txt"
Right (text)
f"hi'.s101*
print(fr"Path: {path}\{file)"
f^549-419
sn1a o
6. NESTED EXPRESSI
ONS
YOU can lIse exnressions inside expressionc
11. DEBUGGING WITH = (PYTHON 3.8+)
print(f"x souared is {x**2}")
# x sqvared is 25
Add = atter expression to print its value anc
printf" Yes
•Oelse Nos"
7. DATE & TIME EXAMPLE
# x = 4
cooay = cacecame zoz9. o
. 20. 15.
# y = 8
print(f"Date: {today: XY-%m-%d}")
print(f{x + y = )".
# x * V = 12
orintf"Time:
todav: SHH
12. PRACTICAL EXAMPLES
13. QUICK RECAP
e caculacu
Number Formattinc
num = 1234567 8019
Prefix string with f or F
tota = price + price * tax
~ 1.234,567.89
Embed expressions in <)
prancar  locas prace: sacocadt. )
underscore: (num:_.21")
Use !r. Is. la tor conversions
Table-like Output
Support alignment, width, precisic
orint ftheaders[e:<1e)  Sheaders 1l:
vDebug with = (Python 3.8+)
"row e :<10)
f-strings are fast, readable, and powerful. Use them to write clean
# Always prefer f-strings for string formatting
and maintainable Pvthon code!
print(f"I love {name}!")
```

</details>

## 11. Lists

![11. Lists](Lessons/11.%20Lists.png)

<details>
<summary>OCR transcript</summary>

```text
fruits = ["apple", "banana", "cherry".
PYTHON LISTS
print(fruits[0])
fruits.append("mango")
Store multiple items in a single variable.
print(len(fruits))
Lists are ordered, changeable, and allow duplicates
WHAT IS A LIST?
2. CREATING LISTS
3. ACCESSING ITEMS
A list is an ordered collection or items
You can create a llist bv placing items inside sauare brackets A
IC Is Changeable (mutableland sllov
duolicate values.
Lisc of inceder
[1, "a", 3.5, True]
List with different data tvpe
[[1. 21. [3. 411
@- Memory Trick
Think or allisi as asnopo
You can add, remove o
numbers = [1, 2, 3, 4]
names = ["Alice", "Bob", "Charlie".
"Python". 3.14. F
Slice (0 to 2)
|['apple', 'banana', 'cherry']
nested = |1.2 . 13.41. 15.61
Slice (1 40 end)
fruztsu:
4. MODIFYING
; LISTS
COMMON
ILIST OPERATIONS
6. LIST SLICING
Lists are changeable. You can update, add or remove items
det a nart slcel or the list
nuns 11 = 99
178, 20, 30
138, 40, 50, 60
nums w 10, 20. 30. 40. 50. 60
a =10.20.30. 40. 50. 68
print sumnums)
•210
rru:s1
print[a:21)
# [2e, 30, 40, 50.
append() adds one item, extend() adds multiple item
#  10. 30
7. NESTED LISTS
8. LIST METHODS (QUICK REFERENCE)
9. IMPORTANT NOTES
Use
matrix = [[1,2,3], [4,5,6], [7,8,911
vLists are changeable
vList index starts from (
store difterent data tvoes
Use len to find the number of item:
Use in to check if an item exists
ASt.sOrCO
- Out ot range index will giv
10. COMMON MISTAKES
11. PRACTICE EXAMPLES
12. QUICK RECAP
Accessina index that doosn't exist
a 2 |1,2,3)
print(al3  # Indext
(  Using remove) for index (use pop( ) instead).
use to create a liist
Xrorgettino that lists a
•e mutable (changes affect original list)
vUse index to access items
#x is now1.2.31 too!
Reverse the list and print i
(x Confusing append( ) and extend( )
Find the number
tho lict
Lists make your code powerft
# {[3.411
BONUS: LIST VS TUPLE
List
Created with
When to Use?
Use Tuple -> when data should not changi
Example: (1,2,3]
lusetul ror rixed data and as dictionary kevs
```

</details>

## 11.1. List Methods

![11.1. List Methods](Lessons/11.1.%20List%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
LIST METHODS IN PYTHON
fruilst = ["apple", "banana",
fruilts.append("orange*)
Python has a set of built-in methods that you can use on lists
print (fruist)
METHOD
DESCRIPTION
SYNTAX
EXAMPLE
OUTPUT
aррenag
Adds an elemenc al
"banana", "cherry"]
the end of the list
print(thislist
'orange'
clear
ves aluneelemen
thislist = ("apple'
• "banana". "cherry"1
thiSlISc.clear
print thislist)
cору()
Returns a copy
thislist = "apple", "banana",
"cherry"]
orche ust
list.copy()
newlist = thislist.copy(.
['apple',
rrintirowiсr
count()
Returns the number of
thislist = L'apple":
banana
elements with the
list.count(value)
specified value
X E thislist.count("apple".
extenda
Add the elements of a list
thislist = ["apple", "banana", "cherry")
(or any iterable), to the
tronical =  "manao
['apple'. 'banana'
"pineapple", "papaya"]
end of the current list
chistast.excenacropical
'cherry'
'manac
oineao
'papava'
indexO
returns the neex or the
first element with the
last indey(value
thislist = ["apple", "banana", "cherry".
x = thislist.index("banana"
insert
Adds an element at the
thislist = ["apple".
specified position
List.insert index
, "banana", "cherry"]
thislist.insert(1,
"orange")
['apple',
'orande
pop()
Removes the element
at the specified position
List.pop(index)
thislist = ["apple", "banana", "cherry"]
thIslIst.DoDT
L'apple', 'cherry')
default is the last item)
print(thislist)
removen
Removes the first item
thislist = ["apple", "banana", "cherry")
with the specified value
thisi ast.removel"banana"
print(thislist)
['apple', 'cherry')
reverco
reverses the order
list.reverse
thislist = ("apple"
rhisiast.roverse
"banana", "cherry"]
cherry'
orancchasLisc
'apple']
sort()
Sorts the list in
thislist = ("banana",
chislist.sorcO
"apple",
"cherry"]
[works on numbers
istsort(reverse=True)
['apple', 'banan:
'cherry'*
and scrings
12. LIST LENGTH (BUILT-IN FUNCTION)
QUICK NOTES
The len function returns the number of items in a list.
OUTPUT
vLists are ordered. mutable changeable collection:
"cherry"1
Length of this list is: 3
Manv merhods modirv the originalist and
printt Lengch of this Ist 1s: sencthislastl
recurnone
and the content is aiven below:")
Some methods like copy, index, count
tor y in thiclict.
sorredtreturn now Vallies
printel
use helocast in Python to see
SUMMARY OF METHODS
Add element at the end
Insert element at a specific positior
Remove element at a specific positior
Return a coov or the list
Remove first item with a specific valut
count
Count occurrences of a value
reverse(.
Reverse the list in place
extend)
Add elements of iterable to the enc
Sort the list in place (ascending by detault
andov
Ger index or tirsr occurrence or a VAILIE
Master these list methods and write Python code like a pro! d
```

</details>

## 12. Tuples

![12. Tuples](Lessons/12.%20Tuples.png)

<details>
<summary>OCR transcript</summary>

```text
point = (10, 20)
OLORS
PYTHON TUPLES
= ("red", "green", "blue")
mixed = (1, "Python", 3.14, True)
Store multiple items in an ordered, immutable collection
print (point [e])
Tuples are fast, safe, and cannot be changed!
print(len(colors))
1. WHAT IS A TUPLE?
2. CREATING TUPLES
3. ACCESSING TUPLE ITEMS
A ruple is an ordered collection or irem
enclosed in oarentheses h
It is immutable (cannot be changed after creation)
and allows dunlicate values
= 01.2
Mixed data tupas ee1 "" 35 TrIA Oifterent data tуne
+ = (S.!
t = 1, 2, 3
@ Memory
ETrICK
coaled with tanc
example cod
converted = tupo0 18. 28. 387
orinta 8T
4. TUPLE SLICING
5. TUPLE OPERATIONS
6. IMMUTABILITY (IMPORTANT!)
Get a part (slice) of the tuple
2 in (1, 2, 3)
+r91 = 100
# *Frrorl
win((1, 5, 3))
(,2,2,3. count(z.
example code
t =18. 28. 38
(,2,3).andex(z)
Why Immutability:
print(ca:4
Data is sare and cannot be accidentallv modi
prancucuz:n
# (30, 40,
# (2, 2, 3, 4)
Tuoles are faster than lists
prancczD
prancacue:-s
# (se, 40, 30, 20, 10)
prints * 2)
y (1. 2. 1. 2
Tuples can be used as dictionary key
praneasenso
7. TUPLE METHODS
8. TUPLE PACKING & UNPACKING
ESAIESTEDTLUPLES
Packina: Combine values into a tuple
matrix = ((1, 2, 3). (4, 5, 6). (7.
prancimacraxie
# 1, 2, 3
6a.6 6 3
prancc-andexo
orancmacraxenno
10. TUPLES VS LISTS
11. COMMON MISTAKES
12. PRACTICE EXERCISES
t = (S,)
t 8 16
Using list methods on tupli
t a 81, 2, 3,
Use List when datd needs to chang
Confusing tuple with pare
13. QUICK RECAP
0 1 2
it ie immutshlo
use parentheses
Use slcing te
Safe. fast
Great for fixe
() to create
get parts o
data and key:
nanged
```

</details>

## 12.1. Tuples Methods

![12.1. Tuples Methods](Lessons/12.1.%20Tuples%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
TUPLES METHODS IN PYTHON
my_tuple = (1, 2, 3, 4, 2, 5)
Tuples are ordered, immutable collections.
print (my_tuple)
They support various built-in methods and related functions.
# (1, 2, 3, 4, 2, 5)
METHOD / FUNCTION
DESCRIPTION
SYINTTO
EXAMPLE
OUTPUT
KEY POINTS
countivalue
Kecurns te number of tin
aspecneovalue
tuolercouncivalue,
=1.2.3. 4. 2. 5
• Tuples are immutable
in the tuple
t.count 2
• Mechods thac try tc
InGeYIVAIIO
Returns the indey of the first
t = (1. 2. 3. 4. 2. 5
modiry recurn z
occurrence of a specitied value.
tuole.index(value
ODlect insteac
Raises ValueError if not found
t.indey ?\
• Many "method:
aecuauy oulten
len()
ns he number o
: = (1, 2, 3, 4, 2, 5
functions that worl
Tems ina cuple
lentuole
wich cubles
• All elements in a tuple
max / minO
Returns the largest (max))
t = (1. 2. 3. 4. 2. 5
must be hashable fo
mayrune
the tuple itself to be
шene cuple
minccuole
hashable
Rerurns a new sorredilist
rrom the icems inra uple
sorted(tuple)
1, 4, 2, 2, 5)
[1, 2, 2, 3, 4, 5]
TUPLE EXAMPLE
Returns the sum of all items
in a tuple (numeric onlv)
sum(tunle
8123. 4 5
15
Tndoy
any() / all()
is true.
anvcuple
True
alll returns True if allitems
all(tuple)
False
WHEN TO USE?
zip(*iterables)
Takes iterables. aeoregates
1 8 00 2 3
(1, 'a').
them in a tuple, and returns
Zipaicer_, acerz. ...
b = (a', 'b', 'c'.
vUse tuples wher
'b'),
you have a fixec
colllection of item
that should not
enumerate
•a count
an iterable and returns ar
[(O, 10),
be changed
, 20),
(1)
enumerate object.
startso
asurenumerarenwn
(2. 30)1
Useful foi
returning multipli
tuple()
Converts an iterable (like list,
Ist = [1, 2, 3]
values trom
string, set, etc.) into a tuple.
cupre iterablo\
cublerst
(1, 2, 3)
runctior
reversedo
Returns a reversed iteratoi
reversed tun e
t = (1. 2. 3. 4. 5)
rup e reversed t
(5, 4, 3, 2, 1)
•®: NOTE
Returns the hash value of a
• inGeXEraISA‹
tuple. Tuple must contain only hash(tuple)
t = (1, 2, 3
runique hasr
vauecrror ir value
hashable items.
value)
mis nocroune
Concatenates two tuples
• sum works only fo
using the † operator.
tuplel + tuplez
(1, 2, 3, 4, 5, 6)
numeric tuples
+
• zip() and enumerate()
Repeats a tuple a specitied
recurm ceracors in
number of times using the
tudle * r
(1,2, 3, 1, 2, 3)
Python 3
EXAMPLES (QUICK REFERENCE)
= (.
4, 2, 5)
list(zip((1,2,3), ('a','b' ,c)# L(1, a'),(2,'b'),(3,c)
listenumerate(t)
#(0,1),(1,2),(2,3),(3,4),(4,2),(5,5).
t.index(3)
tuple([1,2,3])
# (1. 2, 3.
len(t)
tuple(reversed(t))
#  , 2. 4,
max(t), min(t)
hash( (1.2.3))
sorred t
(1.2.3) + (4.5.6
1. 2. 3.
(1.2.3) *
any(flrue, ralse, lrue))
all((True. False, True))
# False
Tuples are simple, fast and reliable. Use the right method for the right job! g8
```

</details>

## 13. Docstrings

![13. Docstrings](Lessons/13.%20Docstrings.png)

<details>
<summary>OCR transcript</summary>

```text
• •
DOCSTRINGS IN PYTHON
deradola.b
Docstrings are used to document Python modules, classes, functions
returoa d
and methods. It is a string literal that appears right after the
derinition or a mocule. runction. class or meinod
1. WHAT IS A DOCSTRING?
2. WHERE TO USE DOCSTRINGS?
3. ACCESSING DOCSTRINGS
explain the purpose of a
At the too of a file module leve!
"""Greet the person passed as parameter
Pгanef"н
Accessible using the __doc_.
This is a module docstring.
**"Greet the person passed a
TIР
4. EXAMPLES
5. DOCSTRING CONVENTIONS (PEP 257]
runction Docst
The onenin
b anCs
nana (etp): The nama of the nerso
6. MULTI-LINE vS SINGLE-LINE DOCSTRINGS
7. DOCSTRINGS AND INTROSPECTION
ist all functions in a module with their dosstanc
8. GOOD DOCSTRING EXAMPLE (GOOGLE STYLE)
8b.
OCSTRI
NG EXAMPLE (NUMPY STYLE) |
9. IMPORTANT NOTE
The docstring is NOT a comment. It is an executable strin
Follow a consistent style (PEP 257, Google, NumPy et
10. COMMON MISTAKES
11. QUICK RECAP
12. WHEN TO USE DOCSTRINGS?
```

</details>

## 14. Sets

![14. Sets](Lessons/14.%20Sets.png)

<details>
<summary>OCR transcript</summary>

```text
s = {1, 2, 3}
s.add(4)
PYTHON SETS
s.remove (2)
print(s) # {1, 3, 4}
Unordered. Unique. Powerful!
1. WHAT IS A SET?
2. CREATING SETS
3. SET CHARACTERISTICS
A set is a collection ot
Using curly braces (}
• Items must be immutable
Example
unique items.
s = {10,
20, 30}
(int, float, str, tuple, etc.).
• Unordered (no index, o • •
colors = "red".
"green", "blue")
• No duplicate values.
s = {1, 2, 2, 3, 3, 4)
no position).
Usina seta constructor
• Unordered: items have
print(3)
© Mutable (can add/remove items).
s = set([1, 2, 3])
no index.
# Output (order may vary)
empty_set = set
# (1, 2, 3, 4)
© Defined using curly braces () or
• Faster membership testing.
set () function.
Q- Note: () creates an empty dict, not a set.
Use set() for an empty set.
4. BASIC OPERATIONS
5. SET OPERATIONS (MATHEMATICAL)
6. EXAMPLES OF SET OPERATIONS
Operation
Teхaтоle
Result
Union ( U )
s1 | s2
tems in s1 or s2
s.add(5)
Adds 5
(or both)
b = 33.
Reтove
s. remove(5)
Removes 5
Intersection ( 0)
S1 & s2
Items in both s1
and s2
print("a
# {1, 2, 3, 4, 5, 6}
terrort no roundn
Items in s1 but
print "a e h
Discard
s.discard(5)
Removes 5
Difference ( - )
s1 - s2
(No error if not found)
not in s2
printe"a
a = b)
# {1, 2}
Pop
s.pop()
Removes & returns
Symmetric
annicem
s1 ^ 52
Items in either s1
print("b - a =", b - a) # {5, 6}
Difference ( $ )
or s2, but not both
orinte"a
, а ^ b) # (1, 2, 5, 6)
Clear
s.clear()
Removes al items
Subset ( §)
s1 <= s2
True if s1 is subset
of s2
print( a <e b ?", a « b # False
Delete
dels
Deletes the set
Superset (2)
s1  >= s2
True if s1 is superset
print("a >= {1,2} ?", a >= (1, 2}) # True
of s2
7. MEMBERSHIP TESTING
8. LOOPING THROUGH A SET
9. SET COMPREHENSION
Check if an item exists in a set.
Loop through all items in a set.
Create sets using a compact svntax.
s = {10, 20, 30}
s = {"apple", "banana", "cherry"]
squares = x*x for x in range(1, 6)]
print(20 in S)
# True
for item in S:
print(squares)
# 11,
4,
9, 16, 25g
print (40 not in s) # True
print(item)
Expression
Item
rerablo
10. FROZEN SETS (IMMUTABLE SETS)
11. SET METHODS
12. QUICK RECAP
rrozen sets are immutable (cannot be changed)
MOFБAN
Description
Sets store unique items (no duplicates).
and can be used as dictionary kevs.
cору()
Returns a shallow copy of the set
Unordered and mutable (except frozenset)
fs = frozenset  1. 2. 310
uodarelirerable
adas alrems rom iterable
Use sets for fast membership testing.
# fs.add(4)
… Error
intersection uodateset)
Keeos only items common with set
Powerful set operations make code concise
# fs.remove(2) X Error
difference_update(set)
Removes items present in set
v  Useful in removing duplicates
print(fs) # frozenset({1, 2, 3})
symmetric differonco undatelset Keops items in either set. but not both
anecataranalvsis
Sets help you store unique data and perform powerful operations!
```

</details>

## 14.1 Sets Methods

![14.1 Sets Methods](Lessons/14.1%20Sets%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON SET METHODS
Sets are unordered collections of unique elements.
s.add4
Python provides a rich set of built-in methods to perform
print(s)
various operations on sets
1. WHAT IS A SET?
2. CREATING SETS
3. BASIC SET METHODS
• A set is an unordered collection
• Using curly braces (
Description
add(x)
Adds an element x to the sel
= (1, 2); s.add(3.
(1, 2, 3.
• vuoucares are nou allowed
• Flements must he hashablc
Removes element x raises
s = 1, 2, 3)
Keverror ir nor
(1, 3)
• usino ser conscructol
d' scardly
Removes clement x ir presont
• Detined using curly
11, 2); s.discard(3.
m set(1. 2. 311
(no error if not found
or the set constructor
DODE
s # 11. 2. 3 s.pop0
Returns 1 or
•Empty set
drorcrary eiemen
# (1, 2, 3]
sotd Note se lthie is an eeoty dick
elear
s = (1, 2, 3; s.clear()
Rerurns a s
4. SET OPERATIONS (MATHEMATICAL OPERATIONS)
5. UPDATE METHODS
Merno
: 1, 2
tromeco the ser
Elements common to
# 1, 2, 3
Undates s
Differencc
s.difforencot) or
Elements iin s but
(1, 2
# {2. 3
Symmetric
Flemenrs in s ort
(1, 2, 4, 5)
s = 1, 2. 3)
s.difference_update((2, 3}
True if all elements of s (1. 2) iseubset('1. 2. 3)) True
arelind
superost
True if all elements of t (1.2, 3).issuperset((1,2)) Truc
netric difference_update((3, 4))
are in s
Dis oint
s.isdisjoint(t)
True ir sandit have
{1, 2}.isdisjoint((3, 4)) True
8. USEFUL BUILT-IN FUNCTIONS WITH SETS
6. FROZEN SET
7. ITERATING OVER A SET
len( 1, 2, 3).
frozencot c an 'immutsblo version af col
wán((3, 1, 2)
• Flements cannor ho added or removed
• Can be used as dictionary keys.
anvs
# rrozenset aзa
9. EXAMPLES
Example 2: Set Operation:
examble s: Uodare Merhods
a = 1, 2, 3)
s.aa0s
0 2 13.
orint
• 4. 91
s.update(12, 3])
# {1, 2, 3.
t = 11, 2)
pranald
s.dafterence_update(12)) # 11, 3)
# (1. 3. 4)
10. QUICK SUMMARY
11. IMPORTANT NOTES
Sets store unique, unordered elements
v Use add. remove. discard . pop. clear. copy
(  Use union. intersection. difference, symmetric difterence
Set elements must be immutable e.g., int, str,
Sets are great
for membershir
v  Use update methods to modify sets in-place
Use issubset). issuperset. isdisjoint
testing anc
rem
ovina dudlicates
creates a dictionary, not a set. Use set() for an empty set
v Use frozenset for immutable sets
```

</details>

## 15. Dictionary

![15. Dictionary](Lessons/15.%20Dictionary.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON DICTIONARY
person = ("name": "Alice",
,"age": 25, "city": "New York"}
A dictionary in Python is an unordered, mutable collection
Derson name
TOUCOUAASCeI
of key-value pairs. Keys must be unique and immutable
printperson.keys
Occkeysanname
'ace' 'city')
1. CREATING DICTIONARIES
2. ACCESSING ITEMS
3. ADDING / MODIFYING ITEMS
• Using curly braces
d • ("name": "Alice", "age": 25, "city": "New York")
• Using dictt constructor
d = dict (names"Alice", age=25, citys"New York")
From sequence ot key-value pairs
• Using getO method (safe access)
d.get("country") # None (defoult)
Add multiple items using updatel
• Empty dictionary
Access with default value
a.uр0acet councry
"USA"
d.get("country",
4. DICTIONARY METHODS
5. REMOVING ITEMS
6. I
DICTIONARY OPERATIONS
oporatiol
Output
dict kevsl...
Updated dict
d.popitem()
DICTIONARY COMPREHENSION
•clear() method
d.clear()
# Romoves all items
.4. 16. 5: 25)
8. EXAMPLES
9. IMPORTANT NOTES
EXAmDlO ZA
Keys must be unique and immutable
Derson s ("pame": "Alice".
(strinas. numbers. tuples)
pranceperson "pame*
person.update"city": "New York"))
immutable type.
(Valid as Keys
str (string
Dictionaries are unordered (in Python
# ('name': 'Alice', 'age': 25.
'city': 'New York')
25). ('city'.'New York')))
< 3.7). From Puthon 3.7÷. insertion
• int (integer)
is preserved
• float
onioiaconar
examole ss vicconar comprencnsior
• tuple (with
s are murable cai
person =  ("name": "Alice, "age": 25. "city": "NY")
students ("Ann". "Bob*, "Charlie")
cudenes.
k ann'• 19
" name: Arce
" сеу:N
10. NESTED DICTIONARY
11. MERGING DICTIONARIES (Python 3.9+) |
12. QUICK SUMMARY
Create: .
"Alice": ("age": 20. "g
d2 = {"b": 20. "с": 31
Access: d(key], d.get(key)
Remove: del dkey]. d.pop(key). d.popitem(). d.clear()
print(students["Alice"]["grade") # A
gIe d2
# Uocate diin-place
d.Keys(), d.values(, d.itemsl)
Check: key in d. value in d.valuesO
```

</details>

## 15.1. Dictionary

![15.1. Dictionary](Lessons/15.1.%20Dictionary.png)

<details>
<summary>OCR transcript</summary>

```text
student = {
PYTHON DICTIONARIES
"name": "Rahul"
"age": 18,
- DICTIONAR
Store data in key-value pairs.
"course": "Python
Fast, flexible, and easy to use!
print (student ["name"J) # Rahul
{:}
1. WHAT IS A DICTIONARY?
2. CREATING DICTIONARIES
3. ACCESSING ITEMS
A dictionary is an unordered collection
of items stored in key-value pairs.
Each key is unique and maps to a value
d a (*: 1. "*: 2]
O aaccnameo Ravar
scudenc.recu are
student = {"name": "Rahul", "age": 18,
Eyamnle Code
W: Memory Trick
Think of a diccionary as areas
yoUook uo a wore key
# ('name': 'Rahul', 'age': 18,
and get its meaning (value)
rintistudent.cet "crade"
# Not fou
4. MODIFYING ITEMS
5. REMOVING ITEMS
6. DICTIONARY METHODS
You can change, add or remove key-value pairs
keysw
Returns all key
scudent.keys
student.cooy
student "gra
del student("course"
last_átem = student.popitem() # ('grade', 'A'.
'course': 'Python', 'marks': 95, 'grade': 'A'}
.'A'
7. NESTED DICTIONARIES
8. LOOPING IN DICTIONARIES
9. DICTIONARY COMPREHENSION (Python 3+)
for key in student:
squaresx: xx Tor x an ranget, o)
# name age grade
9.4.16. 5: 25
How ir works
prancascudencsleyr age" J.
> 19. orade ->
-value pair.
10. COMMON MISTAKES
11. PRACTICE EXERCISES
12. QUICK RECAP
x  Using list index instead of key
creace a aicconary wich y
and city. Print il
d= ("a": 1, "a": 2}
Values can be of any data typr
x Trying to access a key that doesn't exist
~Many built-in methods make it powerful
rS I tC
d• {"a" .31)
13. REAL-WORLD USE CASES
When to Use Dictionary:
APISSLSON
Data from APis is ofte
Kevs are like addresses. values are like the data stored at those addresses
```

</details>

## 15.2. Dictionary Methods

![15.2. Dictionary Methods](Lessons/15.2.%20Dictionary%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
PYTHON DICTIONARY METHODS
"age": 33
Dictionaries are mutable collections of kev-value pairs
orofession"• "Softyarp Fnasoeor"
Pvthon provides several built-in methods to work with dictionaries efficientlv
W ('nene': 'Tanish', 'age': 3:
1. dict() - Constructor
2. keys()
3. values()
"profession": "Software Engáneer")
dictionary will reflect in the viev
dict_values is a view objec
5. update()
my_dict.clear(.
prancmy dacc
7. pop(key)
8. popitem()
as a tuple
my dict = {"name": "Tanish", "age": 33
my_dict = {"name": "Tanish", "age": 33
del my_dict("age"]
[10. get(key)
11. setdefault(key, default)]
Returns the value of the key m ic exists
prancçay_dacc.gect"name"))
pranciey_dact)
my dict.setdecut part tim
Sate wav to access values
• KevError
ir kev
• Modifying the copy does not affect the origina
QUICK SUMMARY TABLE
DescriDtoi
Dictionary keys must De
(strings, numbers, tuples
dict_itens([(...)
Values can be of any
© Use get() or setdefault(
© Dictior
E Use copyt when youv
without affectint
```

</details>

## 16. Exception Handling

![16. Exception Handling](Lessons/16.%20Exception%20Handling.png)

<details>
<summary>OCR transcript</summary>

```text
Python Loop ... else
Python allows an else statement to be attached to for and while oons
1Tconoh on a
оreак
The else block executes only if the loop completes normall
wrhoucncheraoreak stacemenc
else:
it as an "it the loop tinished all its work" block
print ("No break occurred")
HOW IT WORKS VISUALLY
Here is the basic logic flow of a loop with an else statement
Start Loop
Key Points
is there a
(Loop finished
If the loon runs to completion (condition
RUn ELSE block
becomes False or items are exhausted)
the else block runs.
v lf a break statement is executed
kunLOOo bodv
the else block is skipped
(Done)
continue does not affect else
DiGEit hir
Exit Loop
'break'?
The else belonas to the loop. not the if
SKIDS AISo
entirely
NO
1. The for...else Loop
2. The while ….else Loop
In a for loop, the else block runs after the loop has iterated
In a while loop, the else block runs when the loop's conditior
through the entire sequence. If the loop is terminated earl!
becomes False. Just like the for loop, it you exit the whilt
aoreak the else pjock is comdlerey skiooee
loop using break, the else block is ignored
Examble' searchina a
count = €
while count < 3:
print(f'Count is (count)")
princ"round 1t:"
has exius the loop and эkars che esse Dlock
print("Looo finished successfully
else:
no longer < 3".
# This runs ONLY if the loop finishes without hitting the breal
print( "Item not found in the list.")
Outout
vucouc:
Count is €
tem not round in the ist
Count is 1
If search for was 6, the loop would print "Found it!".
Count is
Loop finished successfully because count is no longer <
Why did Python design it this way? (The "Flag" Alternative)
berore vou knew aoout oop…e_se vou probaoiv wrote cod e usina a "rlaa"
(a boolean tracker) to see it something happened inside a loop
much cleaner the eise methoc is compared to the tracitiona riag method
The Old Way (Usina a Flaq
The Pythonic Way (Using else)
Needs extra
Cleaner,
varlaole, more
shorter. and
lines, and
extra checKs
princNot rouna"
MOreeХaГ
Mental Trick
If the name else confuses vou
Example 2: Read file until a keyword is found
(and it confuses many, including core
keyword •  "ENI
ychon developers who nave aomicceo
if n & i ms e:
try reading it as if no break in your heac
66 "Loop through these items...
if no break occurred. do this next."
Outout:
Outout fir not round
Kevwordnor round in TSe
```

</details>

## 17. Exception Handling

![17. Exception Handling](Lessons/17.%20Exception%20Handling.png)

<details>
<summary>OCR transcript</summary>

```text
ERROR HANDLING IN PYTHON
try:
risky_operation()
Error handling in Python is managed using exceptions. An exception is an
except Exception as e
error that nappens curina the execution ot a prodram runtime which cisruots
print(f"An error occurred: <el"
the normal flow of instructions. Python uses the try...except block to catct
finallv
and handle these exceptions so your program doesn't crash
print("Cleanun done."'
1. THE CORE STRUCTURE (try, except, else,
CATCHING SPECIFIC EXCEPTIONS
A complete error-handling block can contain up to tour parts:
it is a best practice in vthon to catch specitic exceptions rather thar
using a blanket, empty except: block. catching everything can hide bugs
vou didn't anticidate
• The block of code that runs if an error occurs in the try block
The block of code that runs only if no errors occurrec
Common Built-in Exceptions
finally:• The block that always runs, regardless of whether an erroi
not (often used for cleanup, like closina files)
Division or modulo bv zero
FulLExamole:
A function receives an argument of the right type
but inappropriate value (e.g., int("apple"))
# Iry to
TypeErroi
An operation is applied to an object o
inappropriate type (e.g., 'len + 5)
Trvind to open a file that doesn't exis
print("Error: You cannot divide by zero!")
Trying to access a sequence index that i:
out of range
# Runs if user enters text instead of a number
Looking up a dictionary key that doesn't exisi
Accessing the Error Message
generated by Python
print("Execution complete. Cleaning up
print mv l1st15D
Error: You cannot divide by zero!
-  Error: Please enter a valid interer.
Ontout
caueh
3. RAISING EXCEPTIONS (raise)
Sometimes you want to intentionally trigger an error if certair
BEST PRACTICES SUMMARY
conditions are met in your code. You do this using the raise keyword
1. Be Specific
Avoid bare except: statement:
Target the exact error vou expeci
set_age("э)
except valuetrror as e.
2. Keep try Blocks Small
Onlv place lines of code inside the tr
Outont•
block that are actuallv canable of
throwing the error vou want to handle
4. CUSTOM EXCEPTIONS
It evthon's built-in errors don't prey
3. Don't Suppress Errors Silently
Avoicusino exceot: oass unless vou
have anicnv denoerate reason e
ionoreieero completeiv
4. Log Errors (When Appropriate
moneybadance,
In real-world applications, log the erro
(e.g., using the logging module) so yol
can debug issues later
5. Use finally for Cleanur
Use finally to release resources (close tiles
database connections, etc.) regardless of
Transaction Denied: You tried to withdraw $100 but only have $S€
Pro Tip: Good error handling doesn't just prevent crashes-it makes your program more reliable, user-friendly, and easier to debug
```

</details>

## 18. Virtual-Environment

![18. Virtual-Environment](Lessons/18.%20Virtual-Environment.png)

<details>
<summary>OCR transcript</summary>

```text
VIRTUAL ENVIRONMENT IN PYTHON
A Virtua Environment is an isolated. self-contained digita box for a specific
Diano
Pvthon proiect. You can install libraries and dependencies inside this box
trom othe
without attecting other projects or your systems global Python installation
global Pytho
WHY DO YOU NEED IT? (THE DEPENDENCY NIGHTMARE)
Requests 2.:
Imagine two projects on the same machine that need ditterent versions ot the same library.
Wirhout Virtuarenvironments
arenvironment
Froiect A
Proiectb
Proiect A
Project E
Old
(Old Website
Noorc
Global Python
venVA
Global Python
Diando Za
Dianao 5.C
inscallacion
pess
venVB
anão sr
You can only have one version at a time
uoaracino ror one oroiecuoreaks the ocher
Each project has its own isolated environment
They coexist peacefully
HOW TO USE VIRTUAL ENVIRONMENTS (THE 4-STEP PROCESS)
Python comes with a built-in tool called venv to manage this. Open your terminal or command prompt
navigate to vour proiect folder, and follow these steps
1 CREATE THE ENVIRONMENT
2 ACTIVATE THE ENVIRONMENT
kun this commanoto creae a new virua envronment
Before vou install packages, vou must "step inside" the bo:
We usually name the folder .venv
DS
containing a copy of the Python executable and a clean
macOS / Linu>
How do you know it worked
Your termina promot will change to show the environmer
name in parentheses like this: venv userdcomnurer'~
(3] INSTALL YOUR PACKAGES
4 DEACTIVATE (WHEN YOU'RE DONE)
Now, any package vou install usinq pip will be lockec
When you are finished working on this project and want
to return to vour norma globa terminal. simpiv tvpe
Puthon
useracomou
SHARE YOUR ENVIRONMENT: requirements.txt
rousnoule neve
•oao vourvenv roicer to oinuo rc can be massi
Instead, you create a text file listing all your project's dependencies.
When someone else downloads your project
they can recreace your exact environment oy ranning
Upload these files
oroansua -rreouremenus.ux
app.py
S pip install -r requirements.txt
Collecting reouestses2.31.0
pandasas? ?
v  requirements.txf
Collecting numрya=1.26.4
TAaSKa=3.O.
voдzeсcang flask==3.0.3
codleccang pandas--c.c.
Keep your .venv folde
environment for each
Create a new virtual
Deactivate when
you're done workin
Addht to .atianore
share dependencie:
```

</details>

## 19 Modules

![19 Modules](Lessons/19%20Modules.png)

<details>
<summary>OCR transcript</summary>

```text
import math
PYTHON MODULES
print (math.sqrt (16)) # 4.0
print(math.pi)
# 3.14159.
Organize. Reuse. Simplify!
1. WHAT IS A MODULE?
2. IMPORTING MODULES
3. IMPORTING SPECIFIC ITEMS
A module is a Python rile containina
Use the import statement to use a module.
Import only what you need from a module.
runctions. classes. or variables
It helps in code organization
# import entire module
from math import pi, pow
and reusability
imooru cancom
# another module
from random import choice
amport aatetime
# buftlt-in module
Using them directly:
Using a module:
print(pi)
# 3.14159...
mymodule.pv
your program
print(math.sart(25)
# 5.0
print(pow(2, 3))
print(random.randint(1, 10)) # random int
print(choice(['a", "b", "c"])) # random
- Python has many built-in modules
and you can also create your own!
Import once. use manv times!
Keeps vour code clean and efticient.
4. ALIASING MODULES
5. THE dir0 FUNCTION
6. SOME USEFUL BUILT-IN MODULES
use an allas short name) tor a module
See what a module contains using aar.
000
import numpy as np
import math
Mathematical runctions
import pandas as pd
printdir(math))
Generate random number‹
darorimo
Work wirh carec and rimas
arr = np.array([1, 2, 3])
# Output: list of all attributes and functions
Interact with operating svstem
df = pd.DataFrame (("A": [1, 2, 3]))
# in the math module
sys
System-specific parameters
Common aliases: np (NumPy), pd (Pandas).
Work with JSON data
plt (Matplotlib).
Useful to explore modules!
Regular expressions
7. CREATING YOUR OWN MODULE
8. USING YOUR MODULE
9. THE name.
VARIABLE
1. Create a file (mymodule.py)
import and use vour custom module
Every Python file has a special variable __name.
2. Write functions, classes, or variables
t helos run code onlv when the file is executed directlv.
3. Import and use it in other files
# туmоduе.ру
# тутоаие.ру
import mvmodule
det greetname):
deт greet hames
print(mymodule.greet("Python")) # Hello, Python!
return  Hе o. snamer!"
return f"Hello, {names!"
print(mymodule.PI)
# 3.14159
3.14159
print("This runs only when executed directly.")
10. PACKAGE (COLLECTION OF MODULES)
11. RELOADING A MODULE
12. QUICK RECAP
A package is a tolder containing modules
During development, reload a module to get
• Modules help organize and reuse code.
It must have an
__init__.py file.
the latest changes without restarting Python.
~  Use import to access modules.
mypackage/
Import from package:
import importlib
~  Import only what vou need.
--
import mvmodule
Create vour own modules for better structure
importlib.reload(mymodule)
#reoads moduo
• Use __name_ ==".
_main_" for safe execution.
•  Explore powerful built-in modules.
• Useful in interactive sessions.
2- Modules make your code modular, reusable, and maintainable!
```

</details>

## 19.1. Import-Statement

![19.1. Import-Statement](Lessons/19.1.%20Import-Statement.png)

<details>
<summary>OCR transcript</summary>

```text
HOW import WORKS IN PYTHON
import math
The import statement lets Python reuse code from other files (modules and packages)
neres whar actualy haopens bening the scenes
print(math.sqrt(16))
THE BIG PICTURE
(2 WHERE DOES PYTHON SEARCH?
Python searches for modules in a list of locations callec
Python does roughly this:
sys.path (the import search path). It looks in order
1 Check if the module is already
, The directory of the scriot that's beina rur
(2 If yes - return it from cache
•  Directories listed in the PYTHONPATH environment variable
• Standard librarv locations
s lf not - find the module (search)
• Site-packages (where third-party packages are installed
4  Load and execute the module's code
5 Create a module obiect and bind il
to a name in vour proaram
import sys
Create module obiect
from pprant import pprint
A module's top-level code runs
only once-- the first time it
is imported. After that, Pythor
reuses the existing module
rhe arsc macchind module name round in chis oach is usec
object from memory
COMMON WAYS TO IMPORT
2. Import specific names
3. Import with alias
4. Imp port all (not recomme ended"
Import the whole module and
Import specitic tunctions,
Give a shorter name
Import everything from a module
use icwicncocnocacon.
variaoles
import math
trom math imbort 01.
oranenаcnaa
arr = np.array([1. 2. 3].
print(pi
oancumach.soru
Good when the module name
Good for using a few
Common for long module
AvOId this! can cause nami
collisions and confusion
4 EXAMPLE: WHAT HAPPENS DURING IMPORT
what happe
Python didn't find my_module in cache
import my_module
It searched sys.path and found my module.py
def heloe
print(my_module.value.
so the orint ran!
It created a module object, stored it in sys.module:
vutoucs
s It bound the name my module in main.oy to tha
If you import my_module again, step 1 finds it in
Hello
sys.modules, so Python skips re-executing the cod
5  PACKAGES (DIRECTORIES WITH
1n1t.2.ру
A oackade is a directory containing Python modules. with an optiona init .oy rile
__init__.py can be empty, but it tells Python
utíls.py
"This directory is a package." It cal
6 THE CACHE: sys.modules
IMPORTANT
tored in svs.modules a dictionary)
in svs.modules
Avoid circular imports (module A imports B and B imports A)
Keep imports at the top of your file (PEP 8 recommendation
This prevents rychon from loading the
import finds - loads - executes (once) - caches -
import is not just copying code-
Arter rhat
at s loading a module obgect and reusing at.
```

</details>

## 19.2. Import __name__=__main__

![19.2. Import __name__=__main__](Lessons/19.2.%20Import%20__name__=__main__.png)

<details>
<summary>OCR transcript</summary>

```text
Python:
name.
=="
main "
# Run this file directly
The __name__ == "__main_._" idiom lets you run code
python my_script.py runs main codi
only when a Python file is executed directly,
mporrom ano
not when it is imported as a module in another file
import my_script & main code does not run
1. THE IDEA
2. HOW IT WORKS (EXAMPLE)
Every Python file has a specia built-in variable named
enes on how the meis veino
Run directl
S ovt
How the file is used
Value от
"Hello from greet()")
This code runs onlv wher
Run directly (e.g., python my_file.py)
reLoTrom o
Imported by another file
e.g. amport my_vaLe,
"my file" (the module's
print This code runs only when the
importina trom another rilt
iSo, the condition
__ " is Trut
greeto
import my_moduli
only when the file is run directly
print(my_module.add(10. 5))
Outout
Hello from greet(.
S.WHYIS TTUSEFUL?
4. A PRACTICAL EXAMPLE
It allows a Python file to act both as:
math utils.ol
1. A script (can be run directly)
amodulecan be importedrand reused
wiou he escor demo coce runnino on impord
Run directly
(python my_module.py)
Simole tesus /
orinti"s squared is". scuarersa
Import in another file
print("cube(3) ="
(import my module)
Output:
__name_ == "my_module
5 squared is 25
main code does NOT run
•  Bottom line: The test/demo code (lines 7-10) does not run when importec
5. REAL-WORLD USE CASES
Command-line scripts
with reusable runcrions
weo apos muoraries
lesting / Demo!
5n
Modular desigr
Put CLI code under
Keep app.run(...) or test
Run quick tests or demos
Encourages clean separation
__name_. == ".
_-main__":
code inside the main biock
only when the tile Is
herween reusabie code anc
so functions can be imported
so it doesn't start on import
executed directly
execucion code
6. COMMON PATTERN (TEMPLATE)
7. KEY TAKEAWAY
Place the proc
entry point in a
if
-_hame.
== " main_
Calllit onlv ir the rile is
~ Runs onlv when the file is executed directl
~ Does not run when the file is imported
Essential for writing reusable, import-safe Python modules
vA small line that makes vour code much more powerful!
: Think of it as: "Only do this when I am the main program, not when I am just a helper.'
```

</details>

## 19.3. OS Module

![19.3. OS Module](Lessons/19.3.%20OS%20Module.png)

<details>
<summary>OCR transcript</summary>

```text
Python OS Module
import os
The os module provides a way to interact with the
print(os.getcwd())
# current working directory
print(os .name)
# "nt" (Windows) or "posix" (Linux/Mac)
operating system.
Why use os?
Important Constants
Basic Usage
Interact with files & directories
os.name
-> 'nt' (Windows) / 'posix' (Unix, Linux, Mac)
Work with paths
OS.sep
path separator|' on Windows
T"on Uniy
imbort os
Run svstem commands
os.getcwd()
-> current workina directorv
print(os-getcwd())
Make cross-platform programs
oskenviron
environment variables (dict)
print(os.listdir())
1. Commonly Used Functions
2. Examples
Funcrion
Whaidoes
Example
Get current directory
os.getcwd
Get curre
ISimport os
Output (Example)
working directory
D•eссy
E
print(os.getcwd()
CaUsers Tanish Proiects
os.chdir(path)
change current
directory
os.chdir('my_folder')
List files & folders
osaaerasrnarns
Tsesranc roiders
print(os.listdir(.))
in a directory
oS.1
listdir('.'))
['filel.txt', 'data', 'main.py']
osankeoacn
croarea now
direccory
OcmксSrиdoтo
(Directory 'demo' created)
os.makedirs{pach
reare nesreo
direcrorie‹
os.rmdir(path)
Remove an empty
directory
os…rmoremory
remove temp.txt)
(File 'temp.txt' deleted)
Remove a file
('file
Rename a
os.renamesrc.ast
Rename or move
a file/directory
os.rename('old.txt' 'new.txt')
• rename('old.txt', 'new.txt")
(File renamed)
o7 os.path.exists(path)
check it path exists
os.path.exists('file.txt')
Check if path exists
on os.path.isfile(path)
Check if path is file
os.path.isfile('file.txt")
print(os.path.exists('main.py'))
True
osnoausaoaun
Check if path is dir
os path.isdir(mvdir')
voin oacns
os.path.ioinlaa
D....
Join paths
data report.csvWin)
os.path.join('a','b','c.txt")
prantlos.path.join( datara reDortsccu
data/report.csv Linux/Mac)
os.walk(path)
walk through directory
tree
OS.wall
k('my dir')
os.environ.get(key)
Get environment
Walk directory tree
VARIAD
os.environ.get("PATH")
os.systemcmd)
Run system command
for root, dirs, files in os.walk('.*):
['data', 'images'] ['main.py']
os.system('dir")
prancroot, airs, Tales)
./data [] ['a.csv')
os.popen(cmd)
Run command and
os . popen('ipconfig") . read()
./images ['2024'] []
ger oucouc
3. Working with Environment Variables
4. Run System Commands
import os
os.system()
os.popen() (read output)
printos.environ.get('USERNAME'))
Tanish
print(os.environ['PATH'T)
C:\Windows\System32;C: \Python312;...
os.system('ping google.com')
output = os.popen('ipconfig")
os.svstem 'cis")
# clear screen
print outout.read)
5. Practical Mini Project: File Organizer
6. Quick Reference
After runnina:
Task
Function
Organize files in a folder
import os, shutil
by extension.
folder = "downloads"
downloads/
ser current dir
Os.getcwdO
fles s os.isstdir foder
L txt/
List files
osPiscair
croaro cir
os.mkdar os.makedars
TORSSOSR
- a.txt
wnlonos
Delete tile/dir
os.remove os.rmdirO
atoscoathastaUeosas th.join(folder, file)):
- d.txt
Rename/Move
os.rename
L a.txt
ext = file.split(°.*)(-1)
b.P8
join(folder, ext), exist_ okeTrue)
L jpg/
check path
os.pach.existso
ovelos-pacn.oan(roloer, ue),
- C.DOr
OSADAT пзоттито
f1p))
L b.jpg
Join paths
os.path.ioinO
L pdf/
renvironmen Vars
Ld.txt
print("Files organized!")
Lc.pdf
Run commands
os.system os.popen
```

</details>

## 19.4. File Module

![19.4. File Module](Lessons/19.4.%20File%20Module.png)

<details>
<summary>OCR transcript</summary>

```text
with open("data.txt", "r") as
, PYTHON FILE HANDLING
content = f.read()
print(content) # Hello Python!
Work with Files Easily!
1. WHAT IS FILE HANDLING?
2. THE OPENO FUNCTION
3. THE WITH STATEMENT (RECOMMENDED)
File handling allows your program
open is used to open a file.
Automatically closes the file after its block is done.
to read trom riles or write dara
open(filename,
mode
to riles on vour computer.
If File Exists
If File Doesn't Exist
with open("file.txt"
"p") as f:
Read (default)
Opens
Frror
data =  f.read()
Write
Overwrites
Creates new
Append
Aopеnos
eгeдтеSтпeм
# File is automatically closed here
Create (exclusive)
SFrAR
Creates new
Binary mode
(Use with other modes)
r): Why use it?
Text mode (default)
(Use with other modes)
Cleaner code
Keadтand Wvrite
tuse with other modes
, No need to explicitly close the file
•rancles exceocons oeder
4. READING FROM A FILE
5. WRITING TO A FILE
6. APPENDING TO A FILE
read() - reads the entire file.
write() - writes a string to the file.
append mode ('a') adds data at the end.
with open("example.txt", "p") as f:
0000
conconc s t.reado
with open("output.txt", "w") as f:
with open("log.txt", "a") as f:
print(content)
f.write("Hello Python!\n")
f.write("New log entry\n")
f.write("Have a nice day!")
readline() - reads one line.
with open("example.txt", "r") as f:
7. CLOSING A FILE (WITHOUT WITH)
line = f.readline()
writelines() - writes a list of strings.
princoline
If you don't use with, close the file manually
readlines() - reads all lines into a list.
lines = ["Apple\n", "Banana\n", "Cherry\n"]
f = open("data.txt",
"p")
with open("example.txt"
with open("fruits.txt", "w*) as f:
content = f.read
lines = f.readlines)
f.writelines(lines)
f.close()
# Important!
print(lines) # ['linelln', 'line2in',
8. EXAMPLE: READ AND WRITE
9. CHECKING FILE PROPERTIES
10. WORKING WITH CSV FILES
Read from one rile and write to another.
Use the os module.
Read and write CSV hiles using csv module
with open"source.txt".
"p") as fin.
import SV
open("destination.txt'
as rouc
Reading CSh
for line in fin:
brintos.path.oxists "fip.tyt") " True  False
with open("data.csv", "r", newlines"") as
fout.write(line.upper())
printos.path.cetsize("file.txt # Size in bytes
reader = csv.readerf)
for row in reader:
CSV
print(row)
11. HANDLING EXCEPTIONS
12. BINARY FILES
13. QUICK RECAP
Fandie rilo errors using try...except.
Use
'b' mode for non-text files (images, etc.)
Use open to open riles with the right mode
try:
Use with statement for cleaner and safer code.
with open( file.txt"
# Copy an image
Use read(), readline(), readlines() to read.
dara = r.read
except FileNotFoundError:
with open("image.png","rb) as fin,
Use wrateO, wracelines to write
print("File not found!")
open("copy.png", "wb") as fout:
Use 'a' to append data.
except Permissiontrror:
rou urtrerineroaa
Alwavs close the file lor use with)
orint "Permission denied!")
Handle errors with try.
Files help your programs remember, store, and share data!
```

</details>

## 19.5. File Methods

![19.5. File Methods](Lessons/19.5.%20File%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
Python File Methods: seek(), tell() and truncate()
These methods give fine control over a file's cursor (pointer) and size.
1. seek() - Move the File Pointer
2. telll) - Get Current Position
3. truncate() - Resize the File
Moves the file pointer to a specitic position.
Returns the current position of the file pointer.
Resizes the file to the specitied size
file.seekoffset, whence=0)
position = file.tell()
file.truncate(size=None)
Parameters:
Return Value:
Parameters:
offset (int): The number of bytes to move.
An integer representing the current byte position
• size (int, optional): New size of the file in bytes.
• whence (int): Reterence point for the ottset.
from the beginning of the file
• If size is None, the file is truncated at the
current position (same as file.tell( )).
whence
Meanina
Reterence Point
Example:
How it works:
Beginning of the file (default)
• If the new size is smaller than the current size.
Kelative
curront position or the pointer
with open('sample.txt'
'r') as f:
extradararis removech
End of the file
print(f.tell())
# 0 (start)
it the new size is larger, the file is extended
f.read(4)
(added space, filled with null bytes).
Notes:
print(f.tell())
Notes:
• Positive offset moves forward
f.seek (2)
• Must be opened in a mode that allows writing
• Negative oftset moves backward (it allowed).
print(f.tell())
(e.g.,
• cannot seek to a negative position
4. Visual Overview
Initial File Content
After truncate(5)
(File size becomes 5 bytes)
@ Key Idea
File: "Hello Python!"
Index:
index
• seek) moves the pointer.
Char :
• tell() tells you where the
Char:
pointer is
seek(o)
After truncate(10)
truncate changes the
(File size becomes 10 bytes)
size of the file
index:
Char
Char
5. Examples (All in One)
6. Important Notes
7. Common Use
Cases
with open('demo.txt', 'r**) as f:
AI positions are in bytes. not characters
• Skio headers and read specific parts.
print('Initial content :' f.read())
Resume reading writing from a saved position.
mtia content: Helo Prthon!
in text mode, seekina to arbitrary positions
f. seek(6)
# Move to 'P'
Update overwrite data in a file.
(except 0 or end) may behave unexpectedly
print('After seek(6), tell() =
', f.tel1())
Cut off extra data (log rotation, temp files).
print( Read next 3 chars :'
troad san
# Pyt
on some svsoi ssarerioinarmodoro
f.seek(0)
s Go to start
'wh°
'rtb
f.truncate(5)
# Keen onlv first § butes
8. Summary
f. seek(0)
truncate() does not move the file pointer.
Method
Purpose
print( After truncate(5):" ,f.read())
# Hello
f.truncate(10)
# Extend to 10 bytes
v To overwrite data in the middle, use seek( )
seek(offset. whence)
Move the file
T.seek(u)
then write.
ger he current pointer position
print('After truncate(10):', f.read())
# outout: Helloхевхеeхeв хев хее
Always open in a writable mode for truncate()
Resize the mile to the given
Remember: seek() moves, tell() tells, truncate() resizes.
```

</details>

## 20. OOPs

![20. OOPs](Lessons/20.%20OOPs.png)

<details>
<summary>OCR transcript</summary>

```text
class Person:
selt…name sr
…init__(self,
PYTHON 00P BASICS
def ereet(self)
return {"Hello, self.name)!
Build real-world applications with Objects!
p = Person( Alice
orant oacreel
1. WHAT IS OOP?
2. CLASS AND OBJECT
3. THE __INIT_() METHOD
OOP Object-Oriented Programming.
A class is a olueorint for creatina obiects
The __init__() method is a special methoc
is a procrammine paraaiom oaseo of
An obiect is an instance of a class
(constructor) that is called automaticall
when an obiect is created
it helps in writing clean, reusable
Kev Benefit‹
• Reusability
SCAIADI
car1 = Car("Toyota", 2020
• Easy Maintenance
printcart.info
print s.age
4. ATTRIBUTES AND METHODS
5. SELF KEYWORD
6. ACCESS MODIFIERS (CONVENTIONS)
Attributes are variables that belong to a class.
self refers to the current obiect
Python uses naming conventions foi
Methods are functions that belong to a class.
It is used to access attributes and methods
Attribute (Data)
Method (Behavior)
inside a cllass
PUоLс
Accessible tron
anywhere
should be accessed
within class and
seli
display
Name manglec
meant to be orivat
Methods define what the object can do
b.show()
Python doesn't entorce privacy strictly
Duc chese conventions improve readabilc
7. CLASS AND INSTANCE VARIABLES
8. INHERITANCE
9. POLYMORPHISM
Class varlables are shared ov al obiects
inhericance allows a class child to inherit
rolvmoronism allows methods to do ditreren
things based on the object
class animals
Counter.count ts 1
class Eaolesird:
class Dog(Animal):
c2 = Counzer
d.speak) # Bark
make_sound(BirdO)
# Chirp
make soundfEaele)
10. ENCAPSULATION
11. ABSTRACTION
QUICK RECAP
Encapsulation is bundlina data (attributes
Abstraccion niges complex implementaciol
and methods together and restricting direct
and shows only the essential features
Class is a blueprint
We achieve this using abstract classt
Obiect is an instance of a class
wUse __init__() to initialize objects
Use self to access attributes and method
~Inheritance promotes
Polymorphism allows flexibilit)
def get_balance(self):
Abstraction simplifies compleyitv
acc = Account 1000)
C =
Gircles
• O0P leat
and scalable Python code!
Think in Objects. Code with Power. Build for the Future! d
```

</details>

## 20.1. Access Modifiers

![20.1. Access Modifiers](Lessons/20.1.%20Access%20Modifiers.png)

<details>
<summary>OCR transcript</summary>

```text
Public, Private and Protected in Python
Python doesn't have strict access modifiers like C++ or Java.
Instead, it uses naming conventions to indicate the level of access intended.
1. Public (No Underscore)
2. Private (Double Underscore
3. Protected (Single Underscore _)
Attributes and methods with no leading
Attributes and methods with double leading
Attributes and methods with single leading
ungerscoro are onone
underscore are intended to be private
underscore are intended to be protected.
Accessible from anywhere: inside the class,
Not directiy accessible trom outside the class
Indicates "internal use" or "for subclass use"
outside the class, or in subclasses
Python performs name manqling to make
Accessible within the class and its subclasses.
This is the default leve of access.
rhem narder to access.
stilllaccessible from outside (no
Still accessible. but not recommended.
enrorcemencr
Examble:
Examble
Example:
GASSCPVTASSA
class Myclass:
CaSSEMVULaSS
initSElt:
der __init__(self):
self.name =
"Alice"
# public attribute
age = 23
# private attribute
-_init__(self):
self. salary = 50000
prorecregracrrsolre
def showsellf):
geт __secret(self):
ovare method
resuurnnse rname
# oublic method
return "This is secret"
deт calcUlate(SELt):
# protected method
return self._salary *
• 0.1
Name mangling: _ClassName__attributeName
4. Access Comparison
Access Level
Naming Convention
Accessible Inside Class
Accessible in Subclass
Accessible Outside Class
Purpose
Public
No underscore
Evervone can access.
Protected
Single underscore
(not recommended)
For internal use / subclass.
PrIVAre
Douole ungerscoro
(direct access not allowed)
For internal use onlv.
5. Code Demonstration
6. Key Takeaways
class Employee:
self.name
__(self, name, salary):
©  Python follows the principle: "We are all consenting adults here."
пanole
₽ Publc
seIT. salary = salary
Protecтed
o Public members are tor evervone
self.
=_La
FIvere
Output:
o Protected members are for internall use and subclasses
def show (self):
print("Neme., self.name)
Name: Jonn
Private members are for internal use only (name manalina).
pranaselrus
saularv
print("ID:" self.__id)
Salary: 60000
Cmesa
Eare convenrions nor Sriceaccess resrricrions
пeт
ID: 191
recurnse n
CaLcUlate_bonUs(SELT:
oUse them to write clean. maintainable and sate code
•_saLary * 0.1
John
secretsellf)
60000
return
Secret Method"
101
Name Mangling (for Private)
emp = Employee("John"
БАСРЯ
emo.snowa
vvhen you us
• GOOo erScorosa
changes the name:
6000.0
ccessanaaDnoac
отоntшеnо
ArVC
Secret Method
id
in Class
becomes
Myclass
_Myclass.
id
# Accessina protected
internally
print(emp._salary)
WOrKs. bUt not recommended
This makes it na rder to access ov acciden
# Accessinq private (wiil raise AttributeError)
printemp
-_1d)
aerror
" ACCeSSIng prIvate vIa name mangling (not recommended)
8. Su
prant(emp._tmployee__1d)
ORKC
eхатоо
convention
ACCOSSTLOVOI
" Accessing protected mechod
prancemp.calculate_bonus
#  WOrks, Dut not recommended
Ne undoreroro
# Accessina pravate method via name manalsna
prancemp.cmployee secrec
Protected
Single underscore
Class & Subclass (by convention!
Privsro
Double underscore
Class only (name mangled)
```

</details>

## 20.2. Inheritance

![20.2. Inheritance](Lessons/20.2.%20Inheritance.png)

<details>
<summary>OCR transcript</summary>

```text
Parent class
Inheritance in Python
(Base/Superclass)
Inheritance is a way of creating a new class (child/subclass) from an
inherits
existing class (parent/superclass). The child class inherits attributes and
methods from the parent class and can also add new features or override
Child Class
existing ones
(Derived/Subclass)
1. Basic Syntax
2. Example
3. How it Works
class Parentclass:
child class inherits attributes and methods ot parent class
# parent class body
class Animal:
Dog is a child class of Animal
def __init__(self, name):
serr.name =
Dog inherits
init and speak trom
der speak(selt):
Animall
class childclass(Parentclass_:
print(f"{self.namel makes a sound")
§ child class bodv
Dog can use these methods directly.
pass
cLass DOgAnImaL):
def bark(self):
print(f"self.name> barks")
• Dog can also define its own methods (bark).
v This promotes code reusabilitv and
I = Dog("Buddy")
d.speak" buddy makes a sound (inheraced)
nierarchical classirication
d.barkO
Buddy barks own method)
4. Types of
Method Overriding
6. The super Function
Child class can override methods of parent class
Used to call the parent class method from child class
CaSS Anima:
class Animal:
def
def speak(self):
soLt.namo
Child
print("Animal makes a sound")
2 Multiple Inheritance
Ono child closs innerits trom
cLass DOgAnimal:
def speak(self):
# overriding
def __init__(self, name, breed):
super().__init__(name)
cas parenc conscruccor
print( "Cat meows")
SLAbrOOd
c E ca
(3 Multilevel Inheritance
d • Dog("Buddy". "Labrador")
A chila class Dec
princd.name
orint(d.breed)
abrador
Note:
Method overriding allows child class tc
Note:
provide specific implementation.
super is especially useful when overriding constructors
or methods. to extend parent behavior.
4 Hierarchical Inheritance
Mutoleos
7. isinstance() and issubclass()
, Key Points
• Korurnserruotroosecai
ancosuooors
d • Dog("Buddy"
Enld ciaes inhorre bublc ond ororocrod mombors
avorid inheritance
Com oination of two or more tvpes
print(isanscanced, vog)
Psron
print(asinscanced, Anamas)
# True
Parentz
i members are not directly inherited
issubclass(subclass. classinfo)
Use super to access parent class
• Returns True if subclass is subclass of classinfo
Method overriding enables polymorphism.
print(issubclass(Dog, Animal)) # True
9 Summarv
inneranco allows usro creareanow
from an existing class.
It helps in building a relationship between classes (is-a relationship).
Tip:
Python supports difterent types of inheritance.
Think of inheritance as "borrowing" properties from a parent
It improves code reusability. readabilitv and maintainability
and adding vour own features!
```

</details>

## 20.2.1. Inheritance Types

![20.2.1. Inheritance Types](Lessons/20.2.1.%20Inheritance%20Types.png)

<details>
<summary>OCR transcript</summary>

```text
Inheritance in Python
In Python, inheritance allows a new class (called a child or derived class) to inherit
attributes and methods from an existing class (called a parent or base class)
This is a foundational concept for keeping your code DRY (Don't Repeat Yourself)
1. Single Inheritance
In Sinale Inheritance. a child class inherits from only one
Device
parent class. This is the simplest and most common forn
(Parent Class
Laptop
(Child Class)
device is turnina on...
# Chld Class inheritina fror
Output:
Dell device is turning on..
mV IaDtOD = LADtOD(
my_laptop.power_on)
Inherited method
Dell laptop is loading operating system
2. Multilevel Inheritance
In Multilevel Inheritance, a class inherits from a child class
Vehicle
creating a chain of inheritance (like a family tree
Grandi
nt Class
Grandparent -*
•Child The class at the bottor
gets access to everything above
Car
(Parent Class
ElectricCar
(Child Class)
Output
Moving forward...
ravneraco nusac.a
3. Multiple Inheritance
In Multiple Inheritance, a single child class can inherit directly from
more than one parent class simuicaneously. Inis allows the chllg
Camera
Phone
class to comoine characcerisces trom complerely amerenc ramilies
Class 2
# Parent Class 1
def take_photo(self):
Smartphone
class
Output:
Dialing and connecting call...
GскI
apпоne.таке_саaa)
oacina weh hrowser
The Gotcha with Multiple Inheritance: The Diamond Problem
vhen you inherit from multiple classes, what happens it both parent classes have a
Merhod resolution Orde
MRO Method Resolution Order. Pvthon searches for methods from left to right through the paren
IMRO TOr C
4. object (top of hierarchy
Output:
Hello from
[SCLaSS
<class 'obiect'>'
```

</details>

## 20.3. Static Methods

![20.3. Static Methods](Lessons/20.3.%20Static%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
Static Methods in Python
A static method is a method that belongs to a class, but does not require access
to the instance (self) or the class (cls).
1. What is a Static Method?
2. Syntax
3. Example
Defined using the @staticmethod decorator.
class GIassName:
cllass Mathutils:
Does not take self (instance) or cis (class)
Ostaticmethod
asrariemornod
as the first parameter.
def method_name(parameters):
der add(a, b):
Belongs to the class and can be called
# method body
# No self or cis parameter
ostaticmethod
Output:
using the class name.
pass
Used when a method is related to the class
det 1s_evenn):
return n * 2 == B
True
logically, but does not need access to class
or instance daca
@staticmethod tells Python that this method
# Calling static methods
doesn't need implicit first argument.
print(MathUtils.add(5, 3))
print(MathUtils.is_even(10))
# True
4. Comparison: Instance. Class and Static Methods
5. Key Points
edEusina
Static methods improve code organization.
obiocamornodu
Works with
instance-specific
They cannot access self (instance attributes) or
cls (class attributes) directly.
Class Method
Class data
(class variables)
class.method()
• They are just like regular functions, but live
class-level data
inside a class namespace
Nothing no implicit
Utility/helper
sгаrсамогпоd
Toscaremornod
class.method()
• Useful for helper/utility functions that logically
belona to a class.
6. Example: When to Use Static Method
7. Can Sti atic Method Access Class or Instance Data?
8. Static Method vs Regular Function
пэааасмоост
Reaular Function
class Example:
Cihss var
a class
Does not belong
__init__(self):
self.inst_ var  20
Called usina
class
Called by function
XError
except ValueError:
• print(cls.class_var)
XError
print No access to class or instance data)
Organizational
General purpose
prant(bateUtals.1s_val1d_date(31, 2, 2824))
ekamorensnowe
trelared ro ciass
print(DateUtils.isvalid date(29, 2, 2024))
§ True
• Outout:
9. Summary
• Use Astaticmethod for methods that don't need sef or ais.
Call using ClassName.method().
Best Practice
* Improves code readability and structure.
Use static methods when the method logically belonas to the class
* Ideal for utility/helper functions inside a class.
but does not need to access or modity the class or instance.
```

</details>

## 20.4. Instance vs Class Variables

![20.4. Instance vs Class Variables](Lessons/20.4.%20Instance%20vs%20Class%20Variables.png)

<details>
<summary>OCR transcript</summary>

```text
Instance Variable vs Class Variable in Python
In Python, variables defined inside a class can be either instance variables or class variables.
They differ in where they are stored, how they are accessed, and how they behave.
1. Instance Variable
2. Class Variable
Detined inside init or any instance method
Cnei
Defined inside the class. outside any metho‹
Clase
Each instance has its own copy.
All instances share the same copy
Belonas to the instance (obiect).
Belongs to the
Accessed using self.variable name
Accessed using CLassName.variable nam
Changes
obj1
obj2
obj1
obj2
Changes made via the class affect all instances
species = "Hunan
species = "Humar
age • 25
class Person:
class Person
init__(selt, name, age):
= Person("Alice"
p1 = Person("Alice")
Outout
02 = Person("Bob"'
Outout
02 = Person("Bob"
30)
Alice
printp1.name
AULICE
print(p1.name)
# AlicE
bOD
orint(o2.name)
Bob
BOс
26
print[p2.species
•= 26
30 (unchanged)
print(o1.ade)
26
Person.species = "Hon
sapiens"
change via class
Homo sapiens
print(p2.age)
| 30 unchanged)
Ponaosoectes
print(pz.species
somo saniene
Homo sapiens
3. Key Differences
4. Eхa
Class Variable
Where Defined
inside
inside class. ourside am
Individual instance (obiect)
Copies
Each instance has its own cops
S ESrudenиA со
Effect of Change
Affects oniv that instance
Output
print(s1.name, s1.school)
Alice ABC School
rab Ap^ Ceboni
Alice ABC School
Use Case
store
er obiec
• common data shared ov allobiecas
prancise.natte, se.schood)
printstudent.total_students)
Воb ABC School
5. Important Notes
Student.school = "XYZ School*
VSenOOI
prints1.school
# XYZ school
XYZ
School
§ XYZ School
obj = Example()
Summarv
©: Pro Tip
Instance variables are uniaui
Class variables are shared
Use the right variable type
Prefer class variables for constants
to each obiect
among all objects.
</>
to wrto oficiont and cioar
and counters, instance
•variables
Changes affect only that object
Changes affect all objects.
Python code
state and benavior
```

</details>

## 20.5 Class Methods

![20.5 Class Methods](Lessons/20.5%20Class%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
Class Methods in Python
A class method is a method that is oound to the class and not to the instance or the class
It takes cls as the first parameter, which refers to the class itself.
1. What is a Class Method?
2. Syntax
3. Example
Defined using the @classmethod decorator
GASSCMTASSMAMO
class Person:
species
§ Chss
Takes cls (not self) as the first parameter.
dclassmethod
def method_name(cls, parameters):
Bound to the class, not the instance
__init__(self,
age):
* mernod podv
cele…nam
inctance varsabie
Can access or modify class variables.
pass
selt.age
Iseful for alternative constructors
Gclassmethod
methods related to the class itself
der change_ speclescas, new_species):
Спsрeоs sпeasoeoes
• eclasmethod tells Python that this method
is bound to the class
Ecrlassmt
def from birth vear(cls. name,birth vear):
inport datetim
age dare medace me.now.vear
return csname.
conrсrо
4. How it Works
5. Example: Using Class Methods
p1 = Person("Alice", 25]
change species is called on the class
Output:
• It uses cls to modity the class variable
print(Person.species)
homo saoen
Person.change species"Homо
All instances reflect the change
sabzen:
p1 (object)
pz (object)
Homo sapien
from birth vear creates a new instanc
orindrolasdecies
# "Bob
agе = 25
dgeв зо
using class data
p3 • Person.from birth year charaie", 2008)
eeosrno venaor curren
6. Class Method vs Instance Method vs Static Method
7. More Example
class Hachutas:
Decorato
pi = 3.14159
Outout
First Paramete
3.14
Class methods art
eclassmethod
sS Clas
alrernative construccor
or to modify class-leve
Use Case
work with class dacd
MathUtils.set_pi(3.14)
print(MathUtils.get_pi )) # 3.14
8. Key Points
AMARSLcc
Cases
10. Quick Example Summary
Alternative constructors (e.g. from string, from dict)
They take cis as the first argument
Moditying class-level data
They can modity class state that applies across all instances
They can be called on the class itself, not just on instances
Often used for factory methods or operations related to the class
```

</details>

## 20.6. Super Keyword

![20.6. Super Keyword](Lessons/20.6.%20Super%20Keyword.png)

<details>
<summary>OCR transcript</summary>

```text
super() in Python
super() is a built-in function that returns a temporary object of the superclass,
which allows us to access methods and attributes of the parent class.
1. What is super()?
2. Syntax
3. Example: Single Inheritance
Provides a way to call methods
ACCI
Parent:
from a parent (super class
super(type, object)
__1n1t__(selt, name)
Output
SEIT.name = name
~  Helos in code reusabilitv and
Parent: Alice
avoids hard-coding parent
y  type
- The class tvpe
der showselt):
Child: 19
print(f"Parent: <self.namel")
class names
• object
- The instance of the class
class Child(Parent):
• Especially useful in inheritance
multiole inheritance. and method
Commoniv used as:
--init__(selt, name, age)
super.init_name
# call parent __in1t_.
overriding
SEIT.age = age
super ()..
_init__(
Returns a proxy obiect that
super ().method(...)
def show(self):
delegates method calls to the
super () .show ()
# call parent show
parent class
print(f"Child: (self.age)")
f In Python 3, you usually don't need to
c = Chid"Alice
10)
pass anv arguments: super
C. SnOWO
4. How super() Works (Single Inheritance)
5. Example: Multiple Inheritance (MRO in Action)
Parent
def show(self):
(show, __init___)
• When Child().show() calls super().show(),
Drint"A.show")
Python looks for the next method in the
class B(A):
def show(self):
Output
inherits
Method Resolution Order (MRO).
print("B.show")
D.show
superO.show
BeShONE
•It tinds show in Parent and calls it
ISS CATR
Child
det showself):
A.show ( )
(show, _init__)
calling Par
orint("C.show()")
MRO:'D'
super.showo
'A', 'object']
class D(B.
C):
dersnowso
print("D.show")
super() follows the MRO
Why use super()?
suoers
(Method Resolution Order)
to find the next method.
Makes code support cooperative multiple inheritance
001 8 00
PAvoiGSatian couonna ho naroe
GASS
obj.show ()
Easier to maintain (works even if the parent class changes).
recommended in amosc alinnerance scenarios.
7. super() vs
Direct Parent
Call
8. Important Notes
Use super() inside methods of a class.
Using super)
Using Parent.method(self
Behind the Scenes
Usually called in init() to initialize parent class
Flexibilitv
High (works with MRO)
Low trixed parent
super returns a proxy
In new-style classes (Python 3), always preter supero.
Multiple Inheritance
May break the chain
object that looks for
Must be used in the context of inheritance.
methods in the next
naraer
* super without arquments works because Python knows
class in the MRO
ne curren crass anc inscance
g
9. Summary
Pro Tip
Dowertul kovword rhat helos us access paron
in a clean, maintainable, and Pythonic way. It plays a key role in inheritance
Always prefer super over direct parent class calls
especially multiple inheritance. bv followina the MRO
It makes vour code future-proof and easier to extend
```

</details>

## 21. Decorators Intro

![21. Decorators Intro](Lessons/21.%20Decorators%20Intro.png)

<details>
<summary>OCR transcript</summary>

```text
*. DECORATORS IN PYTHON *
WHAT IS A DECORATOR?
2
HOW IT WORKS
BASIC SYNTAX
• A decorator is a function that takes another
Syntax using @decorator:
function and extends or modifies its behavior
Original
Passed tc
Wrapper
Original Name
Function
Decorator
Function
without permanently changing the original function.
Returnec
Now Points to
Wrapper
@my_decorator
def greet():
• Decorators are higher-order functions.
print("Hello")
def func():
• They are applied using the @decorator_name
syntax.
Equivalent form:
der areetok
print("Hello")
The wrapper function replaces the original function name
greet = my decoracor greet
4 SIMPLE EXAMPLE
5
DECORATOR WITH *ARGS AND **KWARGS
DECORATORS WITH ARGUMENTS
def my_decorator(func):
def wrapper():
def log_call(func):
def repeat (n):
print ("Before function call")
def wrapper(*args, **kwargs):
def decorator(func):
func()
print(f"Calling {func.__name__}")
def wrapper (*args, **kwargs):
print("After function call")
return func(*args, **kwargs)
for . in range(n):
return wraoper
recurn wrapper
func(*args, **kwargs)
return wraoper
@my.
dеcоraта
@log_call
return decorator
def say_hello():
def add(a, b):
@repeat (3)
print("Hello!")
return a + b
def greet(name):
print (fªHi, (nаmе)!")
say_hello()
print(add(2, 3))
greet ("Bob")
Output:
Output:
Output:
Before function call
Hello!
Calling add
Hi, Bob!
After function call
Hi, Bob!
Hi, Bob!
WHY USE DECORATORS?
COMMON BUILT-IN /
) PRESERVING METADATA
REAL-WORLD USE CASES
(10) MULTIPLE DECORATORS
1) Reuse common logic
@staticmethod
Use functools.wraps to preserve the
Decorators are applied from bottom to tor
89 @classmethod
original function's metadata.
Keep code DRY
from functools import wraps
@decorator1
(Don't Repeat Yourself)
@property
adecorator2
derI
Add logging, timing, caching,
# Logging
I_decorator (func):
def func
@wraps (func)
OSSS
authentication, validation
Timing
def wrapper (wargs, **kwargs):
f Access control /
return func(*args, **kwargs)
Separate core logic from
authentication
recurn wraoper
Equivalent to
extra behavior
Caching (functools.lru_cache)
It preserves __name_.,
__doc
func = decoratoril decorator2(func)l
and other metadata.
KEY POINTS / LIMITATIONS
QUICK SUMMARY
PRO TIP
•  A decorator usually returns a wrapper function.
Concept
Meaning
Without @wraps, metadata may be lost.
•Decorato
modifies behavior of a function
Think of a
Overusing decorators can reduce readability
Wrapper
inner function adding extra behavior
decorator as a
Use them for cross-cutting concerns.
@svntax
applies dec
reusable wrapper
Decorators run at function definition time
*args, **kwargs
handles any function signature
(not when the function is called).
@wraps
nroçorves meranara
around a function.
DECORATORS MAKE YOUR CODE CLEANER, SMARTER, AND MORE POWERFUL!
```

</details>

## 21.1. Decorators With Examples

![21.1. Decorators With Examples](Lessons/21.1.%20Decorators%20With%20Examples.png)

<details>
<summary>OCR transcript</summary>

```text
Python Decorators
A decorator is a function that takes another function and extends or modifies
its behavior without permanently modifying the original function.
1. What is a Decorator?
2. How Does it Work?
3. Syntax
~ A decorator is a higher-order function
my_runction( is passed to decorator
@decorator name
v It takes a function as an argument
Decorator returns a new function (wrapper)
det my runctiong
The name my runction now reters to the wrapper.
it returns a new function with added functionality
passed c
vIt is applied using the @decorator name syntax
decorator
pper()
is equivaieno
def my_function():
my runccion = wrappel
my_function = decorator_name(my_function)
4. Example
5. Example: With Arguments
A simple decorator that prints messages before and after a function call
The decorator can handle functions with arauments
det my_decorator(tunc):
det repeatnum_timest
def wrapper (*args,
kwargs:
OГSОТНЕ
functson calday
def decorator (func):
der wrapperargsa kwangs).
resuic = runcargs,
**kwargs)
in range(num_ times):
princ Arter runcczon call
recurn resua
Output:
result e func(*aras
**kwargs)
return result
Ourour
Before function сall
return wrappei
@my_decorator
return decoratoi
hi. Bob!
doF
say_hello (name):
After function call
hI, BOb
@repeat (3)
print (f"Hello, (name)!")
Hi, Bob
def greet (name):
say_hello("Alice")
print (f"Hi, {name)!")
greet ("Bob")
6. Multiple Decorators
7. Built-in Use Cases
8. Preserving Function Metadata
Decorators are applied from the bottom up
w Logging
Use functools.wraps to preserve the origina
• decoratorfunc
Measure and loa function calls
function's metadata (name, docstring, etc.)
def wrapper(Carss. skwargs):
print( "Decorotor 1 - Before")
tromStuOCrOOSSAmDOrtпarлos
result a func(eargs,
v Authenticatior
Check permissions betore execution
ecorcora
@wraps(func)
Output:
def wrapper(*args,**kwargs):
• Timing
M""This is wrapper docstring."*!
def decorator2(func):
• Tuncargs
def wrapper(*args, *•kwargs):
ecorator 2= BeFore
Trecumnwrapoer
ntoccorot
Bororo
resulca unccearas
Hello Python
Decorator 2 - After
© Caching
Store results to avoid recomputation
def my func(O
'This is original docstring. "*n
adecoratori
vvalidation
Check inputs before running function
prantmy func..__name__
# my_func
printmy func.
hsss orospal docstrano
print"Hello name
9. Key Points
10. Summary
~  Decorators provide a clean and readable way to extend functionality
Concent
Descriotior
They follow the DRY (Don't Repeat Yourself) principle
Decoraroi
Arunction rhat modiros another runctior
•* Pro Tir
Decorators are executed at function definition time
@ Syntax
Applies the decorator to a function.
Stack decorators to
They return a new function obiect
*args, **kwargs
Allow the wrapper to accept any arguments
powertul and reusable
v Use @wraps to keep metadata intact
owraostrunc
Preserves the metadata ot the original tunctior
function enhancements
```

</details>

## 21.2. Getters and Setters

![21.2. Getters and Setters](Lessons/21.2.%20Getters%20and%20Setters.png)

<details>
<summary>OCR transcript</summary>

```text
Getters and Setters in Python
Getters and setters are methods used to access (get) and update (set)
the value of an object's private attributes in a controlled way.
1. Why Use Getters and Setters?
2. Basic Example
3. Using @property Decorator (Pythonic Way)
Encapsulation: Protects data from direct access
Python property lets us use getters and setters
ttricarion
__init__(selt, name, age):
like attributes.
class Person:
• Validation:
Allows you to
__1nit__(selt, name
age):
пogatneRanasoue
# Getter method
self._name
Flexibility: You can change the internal
der get_age(selT):
return selt._age
implementation later without aftecting
def ageself):
return self._ag
det set_age(selt, age):
Control:  Restrict access fread.onlv. write.onlv.
•value
raise ValueError"Age cannot be negative")
age
vanueerroi
cannoc be
# Usage
p = Person("Alice",
# Usage
огпсгокаетeалегр
p • Person("Bob'
20)
o.secade зоg
prant(p.age)
p.age # 35
# cals setter
prantp.get_ageo
prant(p.age)
# D.set_aqe(=5)
# ValueError
# p.age m -1
EVaIueError
4. Types of Access Control
Read-Only Example
Type
How to Implement
Description
class Person:
def__init__(self, name)
Read-Write
aproperty
AcriDure con be reaa no wrcon
p.age
(getter & setter)
asprooz.seccor
with validation
D.age = 30
gorooercy
Read-Only
(getter only)
Attribute can be read but not written
# p.name a "John**
-› AttributeError
Write.Only
Only G<orop>. setter
Attribute can be set but not read
p.password #*1234"
Drintio.name
scharte
(setter only)
(no getter)
# print(o.oassword) -> AttributeError
= "Dave"
# AttributeError: can't set attribute
6. Write-Only Example
7. Benefits Summary
9. Private Attributes (Name Mangling)
rrotecss data rom direc modrication
Double underscore  )  makes attribute name-manaled
reosinkeeoingrnechss imoiemen aton
class Example:
Allows data validation and error checking
init(self):
Frovides better contro over attrbutc
raise AttributeError( Password is write-only")
• Example
--secret)
attributesrror
der password(seat, value):
8. Important Notes
# Accessing (not recommended):
print(e._Example__secret)
# 100
raiso valucerror Password must be at east 6 chars"
• Python doesn't entorce private truly.
trollows the namina convention:
protected (convention)
Quick Summary
AccountO
a.password = "secret123"
-_attribute
private (name mangling)
GArreР
# OK
-> to get (read) value
# pranta.password)
" Atcribuceerror
• Getters and setters add logic: use them
Setter
to set (update) value
@propperty -> makes access clean and Pythonic
```

</details>

## 22. dir, __dict__, help

![22. dir, __dict__, help](Lessons/22.%20dir,%20__dict__,%20help.png)

<details>
<summary>OCR transcript</summary>

```text
dirO, dict and help() in Python
© These are built-in tools in Python that help us explore objects, their attributes and documentation.
1. dir(
2. dict
3. help0)
Returns a sorted list of names (attributes and
Returns the dictionary of an object containing its
Displays the documentation for modules, classes,
merhocs or an obiecr
wrirable arrnbures lincrance vaMabIesI
tunctions, methods or kevwords.
Useful to know what all attributes/methods
Shows attributes that are stored in the instance
Provides useful information like purpose, usage,
an obiect has.
namesoace
oaramerers. ece
~ Includes default attributes too.
Does NOT include methods or built_in attributes
Very helpful for learning and quick reference
Example
Example
Examble
cilass Student
class Student:
class Student:
(self
age:
self.name =
def __init__(self, name, age):
"""This
a Student class.
SOr.AdE
self.name name
celf ade
AGe
def areet(self):
def areet(self):
f"Hi,
f nar
celf course
""Returns a greeting message."
= "Python"
roturr "Holle!"
= Student("Alice".
20)
- student("Alice' a)
heln(Student)
print(dir(s))
DrintS.
GaCT
Outnut (truncated)
mann:
Outnut (truncatedi
Output
class Student(builtins.obiect)
delat+r
_dict
finoml. BAléco
'age': 20. 'course': 'Python')
doc'
ea
format
MALLASR
here:
gecatcribute
"age
# en let de 1enae
Note: Shows onlv instance variables added bv us
greet(self)
Returns a areetina message
Ouick Comparison
5. More Examples
6. Key Takeaways
help()
dirl' on built_in obiect
erint(de("be1lo")) # ctrina cbiect
Use dirl' to eyplore what an cbiect can do.
ChAn
MOAS
and infe
Use dict to see an obiect's data
ottrihutoc thos it heire
ГPARРРРNРРРРSРO
_dict_ on ompr cbicce
MTeo hon  ta roseEdhr
tOhAМ
clase A: nase
understand how to use it.
aMributoe?
rint(a. dict__
Arema
Nierlhne bele son
belell on function
Pro Tios
add(a. b):
rtasss
dirl ic arost for ovnlorstion
"#"Poturnc cum of
dict helps in debuaaina obiect state
help(add)
bein()is vour friend for auick docsl
```

</details>

## 23. Dunder Methods

![23. Dunder Methods](Lessons/23.%20Dunder%20Methods.png)

<details>
<summary>OCR transcript</summary>

```text
Legend
Dunder Methods in Python
&s Instance method
Dunder (double underscore) methods are special methods in Python classes.
Class method
They start and end with double underscores, like _init
SIOS
Called implicitly
: C tion,
2. Compari
iCOnPAEGUAir
Not oonai (is)
Greater than (o)
4. Тype
7. Callable, Context Manager & Others
5. Collection / Container Protocols
Operat
Overloading (Bit wise & Others)
ODaEI S vazui
Right shift >>)
Key Points
? Quick Tips
Note
This list covers the
Use __str_.
under merhods
Python has more (e.g.
vImplement
subclasses
oDjOCES
```

</details>

## 24. Method Overriding

![24. Method Overriding](Lessons/24.%20Method%20Overriding.png)

<details>
<summary>OCR transcript</summary>

```text
Method Overriding in Python
Method overriding is a feature of OOP in which a subclass provides a specific
implementation of a method that is already defined in its superclass.
The method in the subclass has the same name, same parameters (or compatible)
and same return type (or compatible) as the method in the superclass
1. Why
Method Overriding?
2. Basic Syntax
3. Example
Allows a subclass to provide a specitic
Grass Anima
def speakself):
Used to achieve runtime polymorphism
class DoqAnimal):
The method to be overridden is alread
present in the parent class.
class chadParen
~ The method name. parameters. and
type for compatoley must be the same
dersoeakset
uverricina speaka
roturo "Cat mooue"
Python always calls the method of the
child class (subclass), not the parent class
OUrOn
# Using the classes
The method in Child class overrides thi
animals = Animal. DogO, CatO
Anima makes a sounc
method in Parent class
Tor
oraancra.speak
cat meow.
4. How It Works (Visualization)
5. Method Resolution in Action
Anima
Both Dog and Cat classes have theil
•  Puppy does not have its owi
(speak)
own implementation of speak.
speak() method
When we call speak) using an object
•  Python looks for speak() in
of Doa or Cat. Python looks at the
class Dog(Animal):
Puppy -+ not tound
object's class and calls the version
der speaksee
print("Dog barks"
•  Then in Dog - found! So Dog's
Dog
Cat
speak is called
(speak)
class Puppy(Dog)
•  Finally, if not found in Dog, it
This is Runtime Polvmorphisr
would go to Animal
© This search order is called
# Output: Do‹
Method Resolution Order (MRO)
6. Overriding with super()
7. Importa int Poin
def speak(self):
Output
The method in the subclass must have the same name as in the parent class
the paramerers chould be the same or comparible
The return type should be the same or compatible
access soecirer can be rhe san
• Overridina happens at runtime, not compile time
* It is a key feature for achieving polymorphism in Pythor
8. , Common Use Case
9. , Summary Table
Usetul when subclasses need to provide specitic behavior
Descriot
that is different from the general behavior defined in the parent class
Subclass orovides a soeciric implementation or a method alreads
Example:
•  Different shapes (Circle, Rectangle) overriding area method
Different animals overriding sound method
rOw I WOrks
Different payment types overriding process payment method
Key Benefif
Allows flexibility and reusability in code
KevWord oDd
super() can be
```

</details>

## 25. Operator Overloading

![25. Operator Overloading](Lessons/25.%20Operator%20Overloading.png)

<details>
<summary>OCR transcript</summary>

```text
Operator Overloading in Python
Operator overloading is a feature of OOP that allows operators (+, - *, ==, etc.)
to work with user-detined objects. It is achieved by detining special dunder) methods
in a casc
1. What is Op
2. How Does It Work?
3. Basic Examolє
v  Operators have a special meaning foi
built-in types (int, float, str, etc.)
mapped to a special
We can derine the behavior of these
operators for objeccs or our own classes.
This makes code more intuitive anc
natura to readi
f that method is not found in the class
return t"Vectorselt.x, seat.y))
but redefines the existing ones
Outpu
& cadLs vl._add…vZ
Vector (6, 8
4. Operator Overloadina: Common Or
rresgoneeouneenvetnоe
Comparison
(Augmented) Assignment
Operators
7. Example: In-place.
Additio
R: If in-place method is not define
.Puthon falls
8. Other Useful Dunder Methods
t Point
10. Ber
~ Operator overloading
_enter (self : Context manager entry
~ Overload operators
11. Key Takeawa
Operator overloading lets you give meaning to operators for your own classes by defining special methods
It makes your objects intuitive to use, just like Python's built-in types.
```

</details>

## 26. Time Module

![26. Time Module](Lessons/26.%20Time%20Module.png)

<details>
<summary>OCR transcript</summary>

```text
Time Module in Python
The time module in Python provides various time-related tunctions
It allows us to work with time in many ways such as representing time in different formats
pertorming time-based calculations, pausing execution, measuring pertormance, etc
1. Impor ng the Module
3. Converting
All functions of time module are
Convert a struct time or tupl
accessed using time.method.
i "Mon Mav 20 10•SS•10 2024
2. Getting Current Time
the Epoch January 1, 1970,
convert seconds since sooci
00:00:00  7Œ) (0at}
time.ctimel
Current time se з formatted
mUlC
OsD SY
• time.struct timel..
t = time.localtsme
Hour (12-hour clock)
struct_time is a tuple-like object with attributes
Abbreviated month nam
%d
Dav of month (01.31)
Hour (24-hour clockl
5. Time D
o. Working with lime Zones (UTC vS Local
e module works wih bomn ore anc
Use gmtime() for UTC and localtime() fo
using mktime, gmtime, localtime
local e time.localtime
Time:, time.asctime(local)
oranc uтo mm
7. Other Useful Functions
8. Key Takeaways
Use time.tame to qet current timestamr
w  Use strftime() and strptime() for custor
v Use perf counter ( ) for accurate performi
Use gmtime( ) for UTC and localtime() fo
local time
Note:
For advanced date and time handling (time zones, durations, complex calculations)
Robtos Mosnlo cstotsm
orerer the dacorime mosn
More powerful and easie
```

</details>

## 27. Walrus Operator

![27. Walrus Operator](Lessons/27.%20Walrus%20Operator.png)

<details>
<summary>OCR transcript</summary>

```text
The Walrus Operator (:=) in Python
The walrus operator (:=) was introduced in Python 3.8 (PEP 572).
It allows you to assign a value to a variable as part of an expressior
1. What is the Walrus Operator?
2. Basic Syntax
• It combines assignment and expression
variable
Svntax: variable = expression
:=
expression
Returns the assigned value
Helps reduce code duplication anc
Name of the
Anv valic
improve readabilitv.
variable
expression
3. Basic Example
4. Common Use Case: In Loops (Avoiding Duplicate Work)
n :E
gara =
"apple, banana, cherry, "
Read
• 5 character
printan
# Output: 5
whilechunk:= aaca.reads:
and assign te
print(n * 2)
# Outnut• 19
print chunk
value s is
also
Outout
Looo continue‹
astione a
is not emptv
5. In Conditional Statements
Without : =. we would need to call data.read 5) twic
user_ input = input"Enter your
")
or use extra lines. makina the code less efficient
tins renruser innut
print (f"Hello, (user_input}!")
6. In List Comprehensions
print(f"Length of youi
- name is (n).")
numbers = [1, 2, 3, 4, 5, 6]
print("You entered an empty string.")
squares = x*x for x in numbers it X
print(squares
# Output: [4, 16,
, 36]
IROWILWOFKSH
Len(user_input is computed once, stored in n
rhen used in the condirion anc inside he block
Here, (x % 2) == 0 is computed and checked in the same
ression assianment is not stored in a variable here. but
7. Practical E› xample: File Reading
Without Walrus Operator (tor comparison
with open('example.txt',
user_input = input("Enter your
while (line := f.readline)):
т- лeпusereaпрuс
orint line.striD
print(f'Hello, (user_input)!")
rrinr t"enarn ot vour
line. assians
ASA
until an empty string (EOF) is returned
print "You entered an empty string."
More lines, and the expression len(user_input) is
comourecrevenrnocneececmacer
9. Where Can You Use Walrus O berator?
10. Where You CANNOT Use It
As a statement by itsell
Walrus operator saves lines of code
In default parameter values
(except the left-hand side of an assignment
Use it wisely - too much can reduce
Overusing the walrus operator can make code harder to read for people unfamiliar with it
Use it when it makes your code clearer, not just shorter
```

</details>

## 28. SHutil Module

![28. SHutil Module](Lessons/28.%20SHutil%20Module.png)

<details>
<summary>OCR transcript</summary>

```text
Python shutil Module
The shutil module (short for "shell utilities") provides a high-level interface for
working with files, collections of files, and folders. It automates common file operations
like copying, moving, deleting, archiving, and more.
1. Introduction
S.Disk Usaa
13. Practical Ex
```

</details>

## 29. Requests Module

![29. Requests Module](Lessons/29.%20Requests%20Module.png)

<details>
<summary>OCR transcript</summary>

```text
Python Requests Module
3g requests
http for humans
The requests module allows you to send HTTP requests easily and
elegandly. it is one or the most popular chird-party lbrames in rychon for
oio install request:
1. Importing Requests
3. Basic GET Requi
Response Obieci
2. HTTP Methods
Requests sunports all maior HTTP metheds
emoi eme cоcо
for bad roenonece (tyy or Sys
4. Query Param
S. POST Re
6. POST Request (JSON Data)
jsonadata
orint(r.url)
s requests-postfurs, data-data)
urL =
'https://httpbin.org/deleti
10. Authentic:
= requests.get( nctps://hecpoan.org/delay/s cameoutaz
r = requests.getur. cookiesmcookies
```

</details>

## 30. Generators

![30. Generators](Lessons/30.%20Generators.png)

<details>
<summary>OCR transcript</summary>

```text
GENERATORS IN PYTHON
python"
A generator is a special kind of iterator that produces values
one at a time instead of storing them all at once
python"
• Generators are memorv-efficient and useful for large data
or lazy evaluation.
WHAT IS A GENERATOR?
REGULAR FUNCTION vS GENERATOR FUNCTION
• A generator tunction uses the
Regular runction
Generator Functioi
keyword yield.
• Uses return
• Uses vielc
• Each time it pauses, it remembers
its state and continues from there
Sends everything back
aronce
VS
• Gives one value at a time
• Pauses and resumes
on the next call.
• Then ends
_ MEMORY TRICK
det fet nums):
Generator =
def get nums):
vield 1
vending machine / water tap /
vIEld z
one item at a time.
return [1, 2, 3]
vield:
BASIC SYNTAX
how yield woRKs
Generator Function
Usage
gcal a
Ger generacor
3 next( runs
4 Value
§ State saved •
nieacresulfie
def count_up_to(n):
1 = 1
gen = count_up_to(3)
trom came nlacs
иhile i
print(next(gen))
vield i
print nexcsen
i 4= 1
print(next(gen))
# 3
next() AND Stoplteration
USING GENERATORS IN FOR LOOPS
• nexto gets the next value.
gen = countup toz)
for num in count_up_to(5):
• When values are finished,
try:
for
print (num)
Python raises Stoplteration.
while True:
# Output:
[• Stopiteration is raised
print(next(gen))
For loops automaticall)
aucomaticallv when the
except StopIteration:
handle stopiteratior
generator is exhausted
print("No more values!"
GENERATOR EXPRESSIONS
BENEFITS
• LIKeliSt comDI
oucuse oarencreses
squares ay ror xinrangers)
Memory efficient - does not store all values
Drancaastsquares1 78. 1. 9. 9, 16
BazV oVaII on - comnuros valies onlv when no
COMPARISON
Tyty for y in range(S)]
• range(5))
Faster for large streams of data
-) list (stored in memo
Great for reading tiles, processing logs
SMART & FAST!
ofoelines. Inrinice seou
COMMON USE CASES
ADVANCED GENERATOR METHODS
Examble: Read file line by line
send(value)
Send a value into the
• ren
•sena(10)
Streaming data
generator at the yield point
Fibonacci sequence
yield Line.strip()
throwexc
Raise an exception insidi
gen.throw(ValueError("Oops")
Data pipelines
closeO
Stop the generator
gen croser.
COMMON MISTAKES
12
QUICK SUMMA
RY / TABLE
PRO TIP
CONCEPTI
Use generators when you wan
g NOTE
Uses yield to produce values
•one value at a time. not all value.
in memorvar once
wich actual values
it vou need all
MEMORY LINE
X Trying to index a generator
hist = rulllunchbox
ike a list.
Comnact svntay nsing narentheses
Generator = lunch dispense
THINK LAZY, SAVE MEMORY, WRITE SMARTER CODE!
```

</details>

## Mini Projects

![Mini Projects](Lessons/Mini%20Projects.png)

<details>
<summary>OCR transcript</summary>

```text
print ("Build Projects.")
PYTHON MINI PROJECTS
print("Gain Skills.")
print("Create Impact!")
Small Projects. Big Learning. Real Impact!
print("Keep Coding.
1. TO-DO LIST
2. CALCULATOR
3. PASSWORD GENERATOR
A simple command-line to-do list
A simple calculator that performs basic
Generates strong and random password
where you can add, view, complete
based on user preferences
• Choose length of passworc
• Multiplication, Division
include tecters, numoer
• User-triendlv
• Delete tasks
Handle invalid inpui
[ * * * *
task = input("Enter task:
string.ascii letters
string.digits + string.punctuatio
Kev
Key Concepts: Random Module, Strings
4. NUMBER GUESSING GAME
5. STUDENT GRADE BOOK
6. EXPENSE TRACKER
The computer thinks of a number anc
Store student names and their marks
Track your daily expenses and
VOU
•disolav ara
view sunn
• Add student and marks
At
• Add. view and delete expense
• Hints (too high / too low)
View all records
sSICUS
• Data saved in file
elif avg >= 75: grade
category = input("Category
else: arade =
f.write(f {date),{category), {amount} \n",
Concenrs:
Key Concents: Lists. Dictionaries. Function:
, Concepts: File Handling. CSV. Function:
7. WEATHER APP (CLI)
8. QUIZ GAME
9. CONTACT BOOK
ser current weather into or anv
A fun auiz aame
Ger temperacure, numiaicy
Add. vien i, search. update. delete
anc wearher description
ocore carculatior
Store name, phone
Final result
Data persistence
cíty = input("City: ")
data = reouests.get(url).isond
Key Concepts: APIs, Requests, JSON
, Concerts: Dictionaries. File Handlinc
10. TIC TAC TOE
11. TEXT ANALYZER
12. LIBRARY MANAGEMENT SYSTEM
Play Tic Tac Toe against anothe
Analyze any texc or Tile
Manage books and issued record:
olaver in the console
• 2 Player game
Win/Draw detectio
w available book
Store data in filles
Examble (add  book
deт сheск wannerooarays
aсre з априсс"sоок сace
Key Concepts: Lists. Functions. Logic Buildina
Key Concepts: OOP (Basic), File Handlinc
The best way to learn Python is to BUILD!
Start small. Stay consistent. Build amazing things! A %
```

</details>
