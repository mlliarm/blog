---
title: "Square free numbers problem (in J)"
date: 2022-09-27 06:29:08 +0000
gist: https://gist.github.com/mlliarm/bb48d0f24a50117d9733f95a81713dd2
---

{% raw %}
```j
NB. This problem was read in  the blogpost (https://www.glc.us.es/~jalonso/exercitium/numeros-libres-de-cuadrados/) of @Jose_A_Alonso.
NB. Problem statement: given a positive integer N, it's called square-free if no square number (eg 2^2, 11^11) can be created from its prime divisors.
NB. Created using the J903 online playground (https://jsoftware.github.io/j-playground/bin/html2/). 

NB. Let's get the matrix of the prime divisors of an array of integers
q: @>  10 30 40 1000 11 121
NB.  2  5 0 0 0 0
NB.  2  3 5 0 0 0
NB.  2  2 2 5 0 0
NB.  2  2 2 5 5 5
NB. 11  0 0 0 0 0
NB. 11 11 0 0 0 0

NB. First solution
sqfr1 =: {{
    arr=. q: y NB. prime divisor decomposition of y
    max=. >./ arr NB. return biggest prime divisor
    filter=. 1+i.max NB. array from 1 to the maximum prime divisor of arr
    bool_mat=. filter =/ arr NB. boolean matrix of multiples
    transbool=. |: bool_mat NB. transpose bool matrix
    add_ones=. +/ transbool NB. add ones per column
    ge_two =. 2 <: add_ones NB. the elements of res are greater eq to 2
    one_in=. 1 e. ge_two NB. 1 is a member of ge_two array
    -. one_in NB. NOT(one_in)
}}
sqfr1 @>  10 30 40 1000 11 121 NB. 1 1 0 0 1 0

NB. Second solution, adaptation of the 4th solution of Jose from Haskell.
NB. It compares the product of the unique prime divisors of the number N with the number N. 
NB. If there are no multiples (and thus squares) they're the same.
sqfr2 =: {{ y = */ {./.~ q: y }}
sqfr2 @>  10 30 40 1000 11 121 NB. 1 1 0 0 1 0

NB. Third solution. 
NB. Just compare the length of the array with the unique prime divisors of the number N
NB. with the full array of its prime divisors. Not that pretty as the second solution due 
NB. to the use of the parentheses.
sqfr3 =: {{ (# q: y) = (# {./.~ q: y) }}
sqfr3 @>  10 30 40 1000 11 121 NB. 1 1 0 0 1 0

NB. Refactoring
NB. -----------
NB. Both of these solutions are due to moon-child from libera/#jsoftware.
NB.
NB. The first one, sqfr3_tacit is the tacit form of sqfr3 that uses 
NB. a fork (https://code.jsoftware.com/wiki/Help/Primer/Fork), 
NB. compose "&" (https://code.jsoftware.com/wiki/Vocabulary/ampv) and 
NB. at "@:" (https://code.jsoftware.com/wiki/Vocabulary/atco).
NB. The second one, sqfr3_tacit2 is a refactored version of sqfr3_tacit. 
sqfr3_tacit =: q: =&# {./.~@:q:
sqfr3_tacit @>  10 30 40 1000 11 121 NB. 1 1 0 0 1 0

sqfr3_tacit2 =: (=&# {./.~)@:q:
sqfr3_tacit2 @>  10 30 40 1000 11 121 NB. 1 1 0 0 1 0

NB. Automatic tacit form translation
NB. --------------------------------
NB.
NB. Thanks to moon-child and nickspoon from libera/#jsoftware that drew
NB. my attention to https://www.jsoftware.com/help/dictionary/intro19.htm

9!:3 ] 2 5 NB.  to obtain both the boxed and linear displays of verbs

s=: 0 : 0
(# q: y) = (# {./.~ q: y)
)

s2=: 0 : 0
y = */ {./.~ q: y
)

sqfr3 =: 3 : s
SQFR3_tac3 =: 13 : s
sqfr3
NB. +-+-+-------------------------+
NB. |3|:|(# q: y) = (# {./.~ q: y)|
NB. +-+-+-------------------------+
NB. 3 : '(# q: y) = (# {./.~ q: y)'
SQFR3_tac3
NB. +---------+-+--------------------------+
NB. |+--+-+--+|=|+--+-+-------------------+|
NB. ||[:|#|q:|| ||[:|#|+--+-----------+--+||
NB. |+--+-+--+| ||  | ||[:|+-------+-+|q:|||
NB. |         | ||  | ||  ||+--+--+|~||  |||
NB. |         | ||  | ||  |||{.|/.|| ||  |||
NB. |         | ||  | ||  ||+--+--+| ||  |||
NB. |         | ||  | ||  |+-------+-+|  |||
NB. |         | ||  | |+--+-----------+--+||
NB. |         | |+--+-+-------------------+|
NB. +---------+-+--------------------------+
NB. ([: # q:) = [: # [: {./.~ q:

SQFR3_tac3 @> 10 30 40 1000 11 121 NB. 1 1 0 0 1 0

sqfr2 =: 3 : s2
SQFR2_tac =: 13 : s2   
sqfr2
NB. +-+-+-----------------+
NB. |3|:|y = */ {./.~ q: y|
NB. +-+-+-----------------+
NB. 3 : 'y = */ {./.~ q: y'
SQFR2_tac
NB. +-+-+------------------------------+
NB. |]|=|+--+-----+-------------------+|
NB. | | ||[:|+-+-+|+--+-----------+--+||
NB. | | ||  ||*|/|||[:|+-------+-+|q:|||
NB. | | ||  |+-+-+||  ||+--+--+|~||  |||
NB. | | ||  |     ||  |||{.|/.|| ||  |||
NB. | | ||  |     ||  ||+--+--+| ||  |||
NB. | | ||  |     ||  |+-------+-+|  |||
NB. | | ||  |     |+--+-----------+--+||
NB. | | |+--+-----+-------------------+|
NB. +-+-+------------------------------+
NB. ] = [: */ [: {./.~ q:

SQFR2_tac @> 10 30 40 1000 11 121 NB. 1 1 0 0 1 0
```
{% endraw %}
