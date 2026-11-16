---
title: "An oldtimer's APL Code"
date: 2021-12-23 07:35:38 +0000
gist: https://gist.github.com/mlliarm/ce69d877fabd3dca6c06594070952ab5
related:
  - title: dfn version
    url: https://gist.github.com/steveAllen0112/cc63727cbada016804280290d7c548db
---

## What
Some pretty cool code from the 70s'-80s' that a Reddit user shared at [this](https://www.reddit.com/r/functionalprogramming/comments/rjs1ie/comment/hpcikjt/?utm_source=share&utm_medium=web2x&context=3) question.

Here's what [u/snarkuzoid](https://www.reddit.com/user/snarkuzoid/) wrote:

> 5x5 Knight's Tour in APL
> 
> It puts an A in the middle, then randomly does a knight's tour, 
> marking each cell with the next letter until it runs out of moves. 
> Yes, it's terrible code by modern standards. 
> For some reason we were obsessed with very short programs.

Here's the printout:

![5x5 Knight's Tour in APL](https://snarkus.com/AplContestSmall.jpg "5x5 Knight's Tour in APL")

There's [more](https://www.reddit.com/r/functionalprogramming/comments/rjs1ie/comment/hpkbgod/?utm_source=share&utm_medium=web2x&context=3) to the story of the above code snippet:

> Alas, I don't know of any other code fragments I might have laying around. 
> 
> I only had this one because it was published as winner of the "Nice Knight" contest and I had a copy of the announcement.
> 
> Thanks again. This really made my day.

So apparently with this code the Reddit user had won a Leetcode competition of their time. 

Pretty, cool, right?

## Code
In modern Dyalog APL, v.18.0:

```dyalog
⎕IO←1 ⍝ If it's set to 0 instead, there's no 'A' character in the center and thus the code behaves incorrectly!
∇Z←EX2
  V←13+I←0×⍴A←25⍴'0'
  Z← 5 5 ⍴A,0⍴A[C←1↑V]←'ABCDEFGHIJKLMNOPQRSTUVWXY'[I←I+1]
  R←⍉(2,⍴V)⍴(⌊0.8+V÷5),1+5|¯1+V←(A='0')/⍳25
  T←(⌽2,⍴V)⍴(⌊0.8+C÷5),1+5|C-1
  →2×0≠⍴V←(?8)⌽((10⊥|⍉T-R)∊ 21 12)/V
∇
```

## Results
Here are the results when run the above `tradfn` a couple times, from RIDE IDE on a Lubuntu 18.04, when I had `⎕IO←0`:

```
     EX2
0JG0M
00DKH
0FIB0
LC0E0
00000
      EX2
00G00
00DIF
0H0BM
JCLE0
O00NK
      EX2
0JG00
000EH
0FIB0
0000D
00C00
      EX2
0RMF0
0EHQL
0NSBG
PIDOT
K0UJC
```
The above results are incorrect.

Here are some results with `⎕IO←1`:

```
      EX2
00ELG
DMHQ0
IRAFK
NCJSP
0TOB0
      EX2
00000
0E0C0
00AF0
00D0B
0000G
      EX2
GBO00
N0FIP
CHALE
0MDQJ
0RK00
      EX2
GBK00
L0F0J
CHA0E
0MDI0
000N0
```
The above results are correct.

## Correctness of the results
~~There's no `Alpha` in the middle. Does the code work correctly with Dyalog APL?~~ (this was because IO had the value zero: `⎕IO←0`).

Results with `⎕IO←1` look correct. There's the 'A' char in the middle.

## Try it out online
### Issue
As is with the `tradfn` it doesn't work on the [tryapl.org](tryapl.org) site for some reason:

```
∇
SYNTAX ERROR
      ∇
      ∧
```

It worked fine on the RIDE IDE of Dyalog APL though.

It seems that `tryapl.org` doesn't support tradfns.

### Fix
According to Adám from Dyalog, now tryapl.org supports tradfns. But the code cannot be copy pasted as is. Instead:

> Either paste it line by line, pressing Alt+Enter after each line (except the last), or begin each line (except for the first) with a tab character (not the tab key). 

I've found in the [docs](http://help.dyalog.com/12.0/index.html?page=html%2Frelnotes%2Fcontrol%20characters.htm) of Dyalog APL that the Tab key has to be defined as `⎕UCS 9`.

So the following code should work on tryapl.org:

```dyalog
⎕IO←1 ⍝ Without this there's no 'A' character in the center!
Tab←⎕UCS 9 ⍝ Defining the tab character ('\t' in C).

∇Z←EX2_online
Tab V←13+I←0×⍴A←25⍴'0'
Tab Z← 5 5 ⍴A,0⍴A[C←1↑V]←'ABCDEFGHIJKLMNOPQRSTUVWXY'[I←I+1]
Tab R←⍉(2,⍴V)⍴(⌊0.8+V÷5),1+5|¯1+V←(A='0')/⍳25
Tab T←(⌽2,⍴V)⍴(⌊0.8+C÷5),1+5|C-1
Tab →2×0≠⍴V←(?8)⌽((10⊥|⍉T-R)∊ 21 12)/V
∇
```
Update: the above code still fails in tryapl.org.

## Future work
- ~~Make sure that the `tradfn` implementation is correct for Dyalog APL.~~ All good.
- Rewrite the `tradfn` as a [dfn](https://aplwiki.com/wiki/Dfn) so that it runs on the  online interpreter...First understand the program. From what the folks in the APLjk discord server say, the line `→2×0≠⍴V←(?8)⌽((10⊥|⍉T-R)∊21 12)/V` doesn't work in dfns because the right arrow is only for tradfns and tradfns aren't supported in `tryapl.org`.

## Thanks
- To the user `u/snarkuzoid` who trusted me with their code.
- To `bubbler` from APLjk discord server that found the `IO` bug.
- To `Adám` for trying to debug the tradfn error that appeared in tryapl.org.
