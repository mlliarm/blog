---
title: "Rational approximation of π"
date: 2021-12-06 08:03:36 +0000
gist: https://gist.github.com/mlliarm/3aacac7164a1aa99cf8e64bab091af92
---

## What

Sometime ago, a user of `r/math` posted [this](https://www.reddit.com/r/math/comments/qzbr8a/i_made_a_program_to_find_super_accurate_rational/) outreageous result and claimed that this fraction approximates `pi`.

I confirmed this result of his, using [J](https://gist.github.com/mlliarm/97b4c45c3b44beeaa2cc1d2d9217a35b) and using [PARI/GP](https://gist.github.com/mlliarm/2f8b83f436245dfe109ccef93ddae2c8).

But today, I was reading the lemma on [tacit programming](https://aplwiki.com/wiki/Tacit_programming) over [aplwiki.com](https://aplwiki.com) and saw this amazing result:

```apl

      (1∧⊢,÷)2.625
21 8
```

So I thought to myself, hmm this is nice. 

So this is a nice and pretty short function to go from a decimal form of a number to its fractional form.

I wander what will be the fraction that will be the approximation for the most possible digits of Pi, using Dyalog APL.

## Code

Note: All the digits of Pi where taken from the [math.com](http://www.math.com/tables/constants/pi.htm) website.

### Pi (100 digits)

```apl
    pi ← 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679      
    (1∧⊢,÷) pi      
5419351 1725033
```

Confirmation:

```apl
      5419351÷1725033
3.141592654
```

Hmmm...why so few digits? I'll have to look into this in the near future.

### Pi (1000 digits)

If I do the following in the Dyalog RIDE IDE, the IDE crashes.

```apl
   pi ← 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989
```
In other words, the assignment operator ← seems to be failing.

The error message I'm getting is the following image:

![2021-11-27-094302_1440x900_scrot](https://user-images.githubusercontent.com/5833270/143674698-88068188-a837-487b-8b9c-4ec08090f55c.png)

#### Update (fix!)
The very helpful `brickviking` from the Discord server of r/apljk found the solution on the previous error.

If one does the following before assigning the number to the variable `pi`, the pop up error doesn't get displayed!

```apl
      ⎕FR←1287
      ⎕PP←34
      pi←3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
      pi
3.141592653589793238462643383279503
```

#### Update 2 (rational approx.)

So, now that we've stored a somewhat long value of Pi in the variable named `pi`, let's just see what kind of rational Dyalog APL will return:

```apl
⍝ pi_old ←  3.141592653589793238462643383279503
      (1∧⊢,÷) pi

139755218526788.999999999999992833 44485467702853.00000000000000228133
```

This is weird. It seems we've reached some limit, because we didn't get exactly integers, but a set of floats that are very close to certain integers.

#### Todo (2021-11-27)

- I should take the first part of the returning list.
- I should take the second part of the returning list.
- Round them.
- Divide them.
- Compare this result with `pi_old`.
