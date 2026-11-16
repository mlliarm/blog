---
title: "Testing SymPy"
date: 2021-12-22 19:12:08 +0000
gist: https://gist.github.com/mlliarm/73fcada9d865fa79800c0ffd079db71a
---

## What
I've been a great fan of Mathematica since the first time I've used it back in 2000.

After a couple discussions of one of the creators of SymPy over Twitter, I decided to look deeper in this interesting project.

## Tests

This is the Python version:

```
Python 3.9.9 (tags/v3.9.9:ccb0e6a, Nov 15 2021, 18:08:50) [MSC v.1929 64 bit (AMD64)] on win32
```

A few simple stuff first.
```python
>>> 1+1
2
>>>
>>> from sympy.abc import x,y
>>> e = x + y + x
>>> print(e)
2*x + y
```
This is nice. SymPy can do easily simple algebraic manipulations.

Let's do some indefinite integrals.

I remember a few hard ones from my Calculus1 course.

```python
>>> from sympy import *
>>> x = Symbol('x')
>>>
>>> limit(sin(x)/x, x, 0)
1
>>>
>>> integrate(1/x, x)
log(x)
>>>
>>> integrate(cos(x), x)
sin(x)
>>>
>>> integrate(1/cos(x), x)
-log(sin(x) - 1)/2 + log(sin(x) + 1)/2
>>>
>>> integrate(1/sin(x),x)
log(cos(x) - 1)/2 - log(cos(x) + 1)/2
>>>
>>> integrate(sin(x*x), x)
3*sqrt(2)*sqrt(pi)*fresnels(sqrt(2)*x/sqrt(pi))*gamma(3/4)/(8*gamma(7/4))
>>>
>>> integrate(cos(x**2), x)
sqrt(2)*sqrt(pi)*fresnelc(sqrt(2)*x/sqrt(pi))*gamma(1/4)/(8*gamma(5/4))
>>>
>>> integrate(tan(x**2), x)
Integral(tan(x**2), x) # So it seems that this integral can't be evaluated symbolically. 
>>>
>>> integrate(cot(x**2), x)
Integral(cot(x**2), x) # Same as with the tan(x**2).
>>>
>>> integrate(sec(x**2), x)
Integral(sec(x**2), x)  # Same as with the tan(x**2).
>>>
>>> integrate(sin(cos(tan(cot(sec(x))))), x) # Same as with the tan(x**2).
Integral(sin(cos(tan(cot(sec(x))))), x)
```
Definite integrals:

```python
>>> integrate(sin(x**2), (x, 0, 10))
3*sqrt(2)*sqrt(pi)*fresnels(10*sqrt(2)/sqrt(pi))*gamma(3/4)/(8*gamma(7/4))
>>> N(integrate(sin(x**2), (x, 0, 10)))
0.583670899929623
```
Nice !

## Conclusions
Pretty amazing project.

I think I'll try to put some of my time in this OSS project.
