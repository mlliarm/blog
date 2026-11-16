---
title: "Peano Axioms and Prolog"
date: 2021-11-25 04:33:37 +0000
gist: https://gist.github.com/mlliarm/f51bd1c467c72baa9e76c680142c822d
---

# Pealog

## What
Playing around with the [Peano Axioms](https://en.wikipedia.org/wiki/Peano_axioms) and Prolog.

I'd used one of the implementations of the multiplication and addition operations as defined in the Peano system, found in [this](https://stackoverflow.com/questions/10139640/prolog-successor-notation-yields-incomplete-result-and-infinite-loop) StackOverflow question or [this](https://stackoverflow.com/questions/19049376/stackoverflow-in-prolog-peano-arithmetic) one. For some reason I haven't kept the source code, since it must have been like 4 LOC.

This gist is simply to store the results, but feel free to explore the solutions provided in the previous links to do your own experiments.

## Why
Because I'm a math buff.

Also during my MSc I was introduced to mathematical logic and Prolog and I loved both of them greatly.

## SWI Prolog

```txt
Welcome to SWI-Prolog (Multi-threaded, 64 bits, Version 7.2.3)
Copyright (c) 1990-2015 University of Amsterdam, VU Amsterdam
SWI-Prolog comes with ABSOLUTELY NO WARRANTY. This is free software,
and you are welcome to redistribute it under certain conditions.
Please visit http://www.swi-prolog.org for details.
For help, use ?- help(Topic). or ?- apropos(Word).

?- ['peano.pro'].
true.

?- trace,mult(X,Y,z).
   Call: (8) mult(_G2796, _G2797, z) ? creep
   Exit: (8) mult(_G2796, z, z) ? creep
Y = z ;
   Redo: (8) mult(_G2796, _G2797, z) ? creep
   Call: (9) mult(_G2796, _G2920, _G2931) ? creep
   Exit: (9) mult(_G2796, z, z) ? creep
   Call: (9) add(_G2796, z, z) ? creep
   Exit: (9) add(z, z, z) ? creep
   Exit: (8) mult(z, s(z), z) ? creep
X = z,
Y = s(z) ;
   Redo: (9) mult(_G2796, _G2920, _G2931) ? creep
   Call: (10) mult(_G2796, _G2922, _G2933) ? creep
   Exit: (10) mult(_G2796, z, z) ? creep
   Call: (10) add(_G2796, z, _G2933) ? creep
   Exit: (10) add(_G2796, z, _G2796) ? creep
   Exit: (9) mult(_G2796, s(z), _G2796) ? creep
   Call: (9) add(_G2796, _G2796, z) ? creep
   Exit: (9) add(z, z, z) ? creep
   Exit: (8) mult(z, s(s(z)), z) ? creep
X = z,
Y = s(s(z)) ;
   Redo: (9) add(_G2796, _G2796, z) ? creep
   Fail: (9) add(_G2796, _G2796, z) ? creep
   Redo: (10) mult(_G2796, _G2922, _G2933) ? creep
   Call: (11) mult(_G2796, _G2924, _G2935) ? creep
   Exit: (11) mult(_G2796, z, z) ? creep
   Call: (11) add(_G2796, z, _G2935) ? creep
   Exit: (11) add(_G2796, z, _G2796) ? creep
   Exit: (10) mult(_G2796, s(z), _G2796) ? creep
   Call: (10) add(_G2796, _G2796, _G2935) ? creep
   Exit: (10) add(z, z, z) ? creep
   Exit: (9) mult(z, s(s(z)), z) ? creep
   Call: (9) add(z, z, z) ? creep
   Exit: (9) add(z, z, z) ? creep
   Exit: (8) mult(z, s(s(s(z))), z) ? creep
X = z,
Y = s(s(s(z))) ;
   Redo: (10) add(_G2796, _G2796, _G2935) ? creep
   Call: (11) add(s(_G2926), _G2926, _G2928) ? creep
   Exit: (11) add(s(z), z, s(z)) ? creep
   Exit: (10) add(s(z), s(z), s(s(z))) ? creep
   Exit: (9) mult(s(z), s(s(z)), s(s(z))) ? creep
   Call: (9) add(s(z), s(s(z)), z) ? creep
   Fail: (9) add(s(z), s(s(z)), z) ? creep
   Redo: (11) add(s(_G2926), _G2926, _G2928) ? creep
   Call: (12) add(s(s(_G2930)), _G2930, _G2932) ? creep
   Exit: (12) add(s(s(z)), z, s(s(z))) ? creep
   Exit: (11) add(s(s(z)), s(z), s(s(s(z)))) ? creep
   Exit: (10) add(s(s(z)), s(s(z)), s(s(s(s(z))))) ? creep
   Exit: (9) mult(s(s(z)), s(s(z)), s(s(s(s(z))))) ? creep
   Call: (9) add(s(s(z)), s(s(s(s(z)))), z) ? creep
   Fail: (9) add(s(s(z)), s(s(s(s(z)))), z) ? creep
   Redo: (12) add(s(s(_G2930)), _G2930, _G2932) ? creep
   Call: (13) add(s(s(s(_G2934))), _G2934, _G2936) ? creep
   Exit: (13) add(s(s(s(z))), z, s(s(s(z)))) ? creep
   Exit: (12) add(s(s(s(z))), s(z), s(s(s(s(z))))) ? creep
   Exit: (11) add(s(s(s(z))), s(s(z)), s(s(s(s(s(z)))))) ? creep
   Exit: (10) add(s(s(s(z))), s(s(s(z))), s(s(s(s(s(s(z))))))) ? creep
   Exit: (9) mult(s(s(s(z))), s(s(z)), s(s(s(s(s(s(z))))))) ? creep
   Call: (9) add(s(s(s(z))), s(s(s(s(s(s(z)))))), z) ? creep
   Fail: (9) add(s(s(s(z))), s(s(s(s(s(s(z)))))), z) ? creep
   Redo: (13) add(s(s(s(_G2934))), _G2934, _G2936) ? creep
   Call: (14) add(s(s(s(s(_G2938)))), _G2938, _G2940) ? creep
   Exit: (14) add(s(s(s(s(z)))), z, s(s(s(s(z))))) ? creep
   Exit: (13) add(s(s(s(s(z)))), s(z), s(s(s(s(s(z)))))) ? creep
   Exit: (12) add(s(s(s(s(z)))), s(s(z)), s(s(s(s(s(s(z))))))) ? creep
   Exit: (11) add(s(s(s(s(z)))), s(s(s(z))), s(s(s(s(s(s(s(z)))))))) ? creep
   Exit: (10) add(s(s(s(s(z)))), s(s(s(s(z)))), s(s(s(s(s(s(s(s(z))))))))) ? creep
   Exit: (9) mult(s(s(s(s(z)))), s(s(z)), s(s(s(s(s(s(s(s(z))))))))) ? creep
   Call: (9) add(s(s(s(s(z)))), s(s(s(s(s(s(s(s(z)))))))), z) ? creep
   Fail: (9) add(s(s(s(s(z)))), s(s(s(s(s(s(s(s(z)))))))), z) ? creep
   Redo: (14) add(s(s(s(s(_G2938)))), _G2938, _G2940) ? creep
   Call: (15) add(s(s(s(s(s(_G2942))))), _G2942, _G2944) ? creep
   Exit: (15) add(s(s(s(s(s(z))))), z, s(s(s(s(s(z)))))) ? creep
   Exit: (14) add(s(s(s(s(s(z))))), s(z), s(s(s(s(s(s(z))))))) ? creep
   Exit: (13) add(s(s(s(s(s(z))))), s(s(z)), s(s(s(s(s(s(s(z)))))))) ? creep
   Exit: (12) add(s(s(s(s(s(z))))), s(s(s(z))), s(s(s(s(s(s(s(s(z))))))))) ? creep
   Exit: (11) add(s(s(s(s(s(z))))), s(s(s(s(z)))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (10) add(s(s(s(s(s(z))))), s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (9) mult(s(s(s(s(s(z))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Call: (9) add(s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Fail: (9) add(s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Redo: (15) add(s(s(s(s(s(_G2942))))), _G2942, _G2944) ? creep
   Call: (16) add(s(s(s(s(s(s(_G2946)))))), _G2946, _G2948) ? creep
   Exit: (16) add(s(s(s(s(s(s(z)))))), z, s(s(s(s(s(s(z))))))) ? creep
   Exit: (15) add(s(s(s(s(s(s(z)))))), s(z), s(s(s(s(s(s(s(z)))))))) ? creep
   Exit: (14) add(s(s(s(s(s(s(z)))))), s(s(z)), s(s(s(s(s(s(s(s(z))))))))) ? creep
   Exit: (13) add(s(s(s(s(s(s(z)))))), s(s(s(z))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (12) add(s(s(s(s(s(s(z)))))), s(s(s(s(z)))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (11) add(s(s(s(s(s(s(z)))))), s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (10) add(s(s(s(s(s(s(z)))))), s(s(s(s(s(s(z)))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (9) mult(s(s(s(s(s(s(z)))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Call: (9) add(s(s(s(s(s(s(z)))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Fail: (9) add(s(s(s(s(s(s(z)))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Redo: (16) add(s(s(s(s(s(s(_G2946)))))), _G2946, _G2948) ? creep
   Call: (17) add(s(s(s(s(s(s(s(_G2950))))))), _G2950, _G2952) ? creep
   Exit: (17) add(s(s(s(s(s(s(s(z))))))), z, s(s(s(s(s(s(s(z)))))))) ? creep
   Exit: (16) add(s(s(s(s(s(s(s(z))))))), s(z), s(s(s(s(s(s(s(s(z))))))))) ? creep
   Exit: (15) add(s(s(s(s(s(s(s(z))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (14) add(s(s(s(s(s(s(s(z))))))), s(s(s(z))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (13) add(s(s(s(s(s(s(s(z))))))), s(s(s(s(z)))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (12) add(s(s(s(s(s(s(s(z))))))), s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (11) add(s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(z)))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (10) add(s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (9) mult(s(s(s(s(s(s(s(z))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Call: (9) add(s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Fail: (9) add(s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Redo: (17) add(s(s(s(s(s(s(s(_G2950))))))), _G2950, _G2952) ? creep
   Call: (18) add(s(s(s(s(s(s(s(s(_G2954)))))))), _G2954, _G2956) ? creep
   Exit: (18) add(s(s(s(s(s(s(s(s(z)))))))), z, s(s(s(s(s(s(s(s(z))))))))) ? creep
   Exit: (17) add(s(s(s(s(s(s(s(s(z)))))))), s(z), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (16) add(s(s(s(s(s(s(s(s(z)))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (15) add(s(s(s(s(s(s(s(s(z)))))))), s(s(s(z))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (14) add(s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(z)))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (13) add(s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (12) add(s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(z)))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (11) add(s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (10) add(s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (9) mult(s(s(s(s(s(s(s(s(z)))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Call: (9) add(s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Fail: (9) add(s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Redo: (18) add(s(s(s(s(s(s(s(s(_G2954)))))))), _G2954, _G2956) ? creep
   Call: (19) add(s(s(s(s(s(s(s(s(s(...))))))))), _G2958, _G2960) ? creep
   Exit: (19) add(s(s(s(s(s(s(s(s(s(...))))))))), z, s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (18) add(s(s(s(s(s(s(s(s(s(...))))))))), s(z), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (17) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (16) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(z))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (15) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(z)))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (14) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (13) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(z)))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (12) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (11) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (10) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (9) mult(s(s(s(s(s(s(s(s(s(...))))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Call: (9) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Fail: (9) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Redo: (19) add(s(s(s(s(s(s(s(s(s(...))))))))), _G2958, _G2960) ? creep
   Call: (20) add(s(s(s(s(s(s(s(s(s(...))))))))), _G2962, _G2964) ? creep
   Exit: (20) add(s(s(s(s(s(s(s(s(s(...))))))))), z, s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (19) add(s(s(s(s(s(s(s(s(s(...))))))))), s(z), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (18) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (17) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(z))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (16) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(z)))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (15) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (14) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(z)))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (13) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (12) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (11) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (10) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (9) mult(s(s(s(s(s(s(s(s(s(...))))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Call: (9) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Fail: (9) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...))))))))), z) ? creep
   Redo: (20) add(s(s(s(s(s(s(s(s(s(...))))))))), _G2962, _G2964) ? creep
   Call: (21) add(s(s(s(s(s(s(s(s(s(...))))))))), _G2966, _G2968) ? creep
   Exit: (21) add(s(s(s(s(s(s(s(s(s(...))))))))), z, s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (20) add(s(s(s(s(s(s(s(s(s(...))))))))), s(z), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (19) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(z)), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (18) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(z))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (17) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(z)))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (16) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(z))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (15) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(z)))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (14) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(z))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (13) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(z)))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ? creep
   Exit: (12) add(s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...))))))))), s(s(s(s(s(s(s(s(s(...)))))))))) ?
```

## GNU Prolog

```
GNU Prolog 1.3.0
By Daniel Diaz
Copyright (C) 1999-2007 Daniel Diaz
| ?- ['peano.pro']. 
compiling /home/milia/peano.pro for byte code...
/home/milia/peano.pro compiled, 4 lines read - 1109 bytes written, 8 ms

yes
| ?- trace, mult(X,Y,z).
The debugger will first creep -- showing everything (trace)
      1    1  Call: mult(_16,_17,z) ? 
      1    1  Exit: mult(_16,z,z) ? 

Y = z ? ;
      1    1  Redo: mult(_16,z,z) ? 
      2    2  Call: mult(_16,_63,_103) ? 
      2    2  Exit: mult(_16,z,z) ? 
      3    2  Call: add(_16,z,z) ? 
      3    2  Exit: add(z,z,z) ? 
      1    1  Exit: mult(z,s(z),z) ? 

X = z
Y = s(z) ? ;
      1    1  Redo: mult(z,s(z),z) ? 
      3    2  Redo: add(z,z,z) ? 
      3    2  Fail: add(_16,z,z) ? 
      2    2  Redo: mult(_16,z,z) ? 
      3    3  Call: mult(_16,_90,_130) ? 
      3    3  Exit: mult(_16,z,z) ? 
      4    3  Call: add(_16,z,_156) ? 
      4    3  Exit: add(_16,z,_16) ? 
      2    2  Exit: mult(_16,s(z),_16) ? 
      5    2  Call: add(_16,_16,z) ? 
      5    2  Exit: add(z,z,z) ? 
      1    1  Exit: mult(z,s(s(z)),z) ? 

X = z
Y = s(s(z)) ? ;
      1    1  Redo: mult(z,s(s(z)),z) ? 
      5    2  Redo: add(z,z,z) ? 
      5    2  Fail: add(_16,_16,z) ? 
      2    2  Redo: mult(_16,s(z),_16) ? 
      4    3  Redo: add(_16,z,_16) ? 
      4    3  Fail: add(_16,z,_144) ? 
      3    3  Redo: mult(_16,z,z) ? 
      4    4  Call: mult(_16,_117,_157) ? 
      4    4  Exit: mult(_16,z,z) ? 
      5    4  Call: add(_16,z,_183) ? 
      5    4  Exit: add(_16,z,_16) ? 
      3    3  Exit: mult(_16,s(z),_16) ? 
      6    3  Call: add(_16,_16,_210) ? 
      6    3  Exit: add(z,z,z) ? 
      2    2  Exit: mult(z,s(s(z)),z) ? 
      7    2  Call: add(z,z,z) ? 
      7    2  Exit: add(z,z,z) ? 
      1    1  Exit: mult(z,s(s(s(z))),z) ? 

X = z
Y = s(s(s(z))) ? ;
      1    1  Redo: mult(z,s(s(s(z))),z) ? 
      7    2  Redo: add(z,z,z) ? 
      7    2  Fail: add(z,z,z) ? 
      2    2  Redo: mult(z,s(s(z)),z) ? 
      6    3  Redo: add(z,z,z) ? 
      7    4  Call: add(s(_197),_197,_199) ? 
      7    4  Exit: add(s(z),z,s(z)) ? 
      6    3  Exit: add(s(z),s(z),s(s(z))) ? 
      2    2  Exit: mult(s(z),s(s(z)),s(s(z))) ? 
      8    2  Call: add(s(z),s(s(z)),z) ? 
      8    2  Fail: add(s(z),s(s(z)),z) ? 
      2    2  Redo: mult(s(z),s(s(z)),s(s(z))) ? 
      6    3  Redo: add(s(z),s(z),s(s(z))) ? 
      7    4  Redo: add(s(z),z,s(z)) ? 
      8    5  Call: add(s(s(_226)),_226,_228) ? 
      8    5  Exit: add(s(s(z)),z,s(s(z))) ? 
      7    4  Exit: add(s(s(z)),s(z),s(s(s(z)))) ? 
      6    3  Exit: add(s(s(z)),s(s(z)),s(s(s(s(z))))) ? 
      2    2  Exit: mult(s(s(z)),s(s(z)),s(s(s(s(z))))) ? 
      9    2  Call: add(s(s(z)),s(s(s(s(z)))),z) ? 
      9    2  Fail: add(s(s(z)),s(s(s(s(z)))),z) ? 
      2    2  Redo: mult(s(s(z)),s(s(z)),s(s(s(s(z))))) ? 
      6    3  Redo: add(s(s(z)),s(s(z)),s(s(s(s(z))))) ? 
      7    4  Redo: add(s(s(z)),s(z),s(s(s(z)))) ? 
      8    5  Redo: add(s(s(z)),z,s(s(z))) ? 
      9    6  Call: add(s(s(s(_255))),_255,_257) ? 
      9    6  Exit: add(s(s(s(z))),z,s(s(s(z)))) ? 
      8    5  Exit: add(s(s(s(z))),s(z),s(s(s(s(z))))) ? 
      7    4  Exit: add(s(s(s(z))),s(s(z)),s(s(s(s(s(z)))))) ? 
      6    3  Exit: add(s(s(s(z))),s(s(s(z))),s(s(s(s(s(s(z))))))) ? 
      2    2  Exit: mult(s(s(s(z))),s(s(z)),s(s(s(s(s(s(z))))))) ? 
     10    2  Call: add(s(s(s(z))),s(s(s(s(s(s(z)))))),z) ? 
     10    2  Fail: add(s(s(s(z))),s(s(s(s(s(s(z)))))),z) ? 
      2    2  Redo: mult(s(s(s(z))),s(s(z)),s(s(s(s(s(s(z))))))) ? 
      6    3  Redo: add(s(s(s(z))),s(s(s(z))),s(s(s(s(s(s(z))))))) ? 
      7    4  Redo: add(s(s(s(z))),s(s(z)),s(s(s(s(s(z)))))) ? 
      8    5  Redo: add(s(s(s(z))),s(z),s(s(s(s(z))))) ? 
      9    6  Redo: add(s(s(s(z))),z,s(s(s(z)))) ? 
     10    7  Call: add(s(s(s(s(_284)))),_284,_286) ? 
     10    7  Exit: add(s(s(s(s(z)))),z,s(s(s(s(z))))) ? 
      9    6  Exit: add(s(s(s(s(z)))),s(z),s(s(s(s(s(z)))))) ? 
      8    5  Exit: add(s(s(s(s(z)))),s(s(z)),s(s(s(s(s(s(z))))))) ? 
      7    4  Exit: add(s(s(s(s(z)))),s(s(s(z))),s(s(s(s(s(s(s(z)))))))) ? 
      6    3  Exit: add(s(s(s(s(z)))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(z))))))))) ? 
      2    2  Exit: mult(s(s(s(s(z)))),s(s(z)),s(s(s(s(s(s(s(s(z))))))))) ? 
     11    2  Call: add(s(s(s(s(z)))),s(s(s(s(s(s(s(s(z)))))))),z) ? 
     11    2  Fail: add(s(s(s(s(z)))),s(s(s(s(s(s(s(s(z)))))))),z) ? 
      2    2  Redo: mult(s(s(s(s(z)))),s(s(z)),s(s(s(s(s(s(s(s(z))))))))) ? 
      6    3  Redo: add(s(s(s(s(z)))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(z))))))))) ? 
      7    4  Redo: add(s(s(s(s(z)))),s(s(s(z))),s(s(s(s(s(s(s(z)))))))) ? 
      8    5  Redo: add(s(s(s(s(z)))),s(s(z)),s(s(s(s(s(s(z))))))) ? 
      9    6  Redo: add(s(s(s(s(z)))),s(z),s(s(s(s(s(z)))))) ? 
     10    7  Redo: add(s(s(s(s(z)))),z,s(s(s(s(z))))) ? 
     11    8  Call: add(s(s(s(s(s(_313))))),_313,_315) ? 
     11    8  Exit: add(s(s(s(s(s(z))))),z,s(s(s(s(s(z)))))) ? 
     10    7  Exit: add(s(s(s(s(s(z))))),s(z),s(s(s(s(s(s(z))))))) ? 
      9    6  Exit: add(s(s(s(s(s(z))))),s(s(z)),s(s(s(s(s(s(s(z)))))))) ? 
      8    5  Exit: add(s(s(s(s(s(z))))),s(s(s(z))),s(s(s(s(s(s(s(s(z))))))))) ? 
      7    4  Exit: add(s(s(s(s(s(z))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Exit: add(s(s(s(s(s(z))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      2    2  Exit: mult(s(s(s(s(s(z))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     12    2  Call: add(s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
     12    2  Fail: add(s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
      2    2  Redo: mult(s(s(s(s(s(z))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Redo: add(s(s(s(s(s(z))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Redo: add(s(s(s(s(s(z))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Redo: add(s(s(s(s(s(z))))),s(s(s(z))),s(s(s(s(s(s(s(s(z))))))))) ? 
      9    6  Redo: add(s(s(s(s(s(z))))),s(s(z)),s(s(s(s(s(s(s(z)))))))) ? 
     10    7  Redo: add(s(s(s(s(s(z))))),s(z),s(s(s(s(s(s(z))))))) ? 
     11    8  Redo: add(s(s(s(s(s(z))))),z,s(s(s(s(s(z)))))) ? 
     12    9  Call: add(s(s(s(s(s(s(_342)))))),_342,_344) ? 
     12    9  Exit: add(s(s(s(s(s(s(z)))))),z,s(s(s(s(s(s(z))))))) ? 
     11    8  Exit: add(s(s(s(s(s(s(z)))))),s(z),s(s(s(s(s(s(s(z)))))))) ? 
     10    7  Exit: add(s(s(s(s(s(s(z)))))),s(s(z)),s(s(s(s(s(s(s(s(z))))))))) ? 
      9    6  Exit: add(s(s(s(s(s(s(z)))))),s(s(s(z))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Exit: add(s(s(s(s(s(s(z)))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Exit: add(s(s(s(s(s(s(z)))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Exit: add(s(s(s(s(s(s(z)))))),s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      2    2  Exit: mult(s(s(s(s(s(s(z)))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     13    2  Call: add(s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
     13    2  Fail: add(s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
      2    2  Redo: mult(s(s(s(s(s(s(z)))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Redo: add(s(s(s(s(s(s(z)))))),s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Redo: add(s(s(s(s(s(s(z)))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Redo: add(s(s(s(s(s(s(z)))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      9    6  Redo: add(s(s(s(s(s(s(z)))))),s(s(s(z))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     10    7  Redo: add(s(s(s(s(s(s(z)))))),s(s(z)),s(s(s(s(s(s(s(s(z))))))))) ? 
     11    8  Redo: add(s(s(s(s(s(s(z)))))),s(z),s(s(s(s(s(s(s(z)))))))) ? 
     12    9  Redo: add(s(s(s(s(s(s(z)))))),z,s(s(s(s(s(s(z))))))) ? 
     13   10  Call: add(s(s(s(s(s(s(s(_371))))))),_371,_373) ? 
     13   10  Exit: add(s(s(s(s(s(s(s(z))))))),z,s(s(s(s(s(s(s(z)))))))) ? 
     12    9  Exit: add(s(s(s(s(s(s(s(z))))))),s(z),s(s(s(s(s(s(s(s(z))))))))) ? 
     11    8  Exit: add(s(s(s(s(s(s(s(z))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     10    7  Exit: add(s(s(s(s(s(s(s(z))))))),s(s(s(z))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      9    6  Exit: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Exit: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Exit: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Exit: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      2    2  Exit: mult(s(s(s(s(s(s(s(z))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     14    2  Call: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
     14    2  Fail: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
      2    2  Redo: mult(s(s(s(s(s(s(s(z))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Redo: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Redo: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Redo: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      9    6  Redo: add(s(s(s(s(s(s(s(z))))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     10    7  Redo: add(s(s(s(s(s(s(s(z))))))),s(s(s(z))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     11    8  Redo: add(s(s(s(s(s(s(s(z))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     12    9  Redo: add(s(s(s(s(s(s(s(z))))))),s(z),s(s(s(s(s(s(s(s(z))))))))) ? 
     13   10  Redo: add(s(s(s(s(s(s(s(z))))))),z,s(s(s(s(s(s(s(z)))))))) ? 
     14   11  Call: add(s(s(s(s(s(s(s(s(_400)))))))),_400,_402) ? 
     14   11  Exit: add(s(s(s(s(s(s(s(s(z)))))))),z,s(s(s(s(s(s(s(s(z))))))))) ? 
     13   10  Exit: add(s(s(s(s(s(s(s(s(z)))))))),s(z),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     12    9  Exit: add(s(s(s(s(s(s(s(s(z)))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     11    8  Exit: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(z))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     10    7  Exit: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      9    6  Exit: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Exit: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Exit: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Exit: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      2    2  Exit: mult(s(s(s(s(s(s(s(s(z)))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     15    2  Call: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
     15    2  Fail: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
      2    2  Redo: mult(s(s(s(s(s(s(s(s(z)))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Redo: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Redo: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Redo: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      9    6  Redo: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     10    7  Redo: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     11    8  Redo: add(s(s(s(s(s(s(s(s(z)))))))),s(s(s(z))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     12    9  Redo: add(s(s(s(s(s(s(s(s(z)))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     13   10  Redo: add(s(s(s(s(s(s(s(s(z)))))))),s(z),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     14   11  Redo: add(s(s(s(s(s(s(s(s(z)))))))),z,s(s(s(s(s(s(s(s(z))))))))) ? 
     15   12  Call: add(s(s(s(s(s(s(s(s(s(...))))))))),_429,_431) ? 
     15   12  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),z,s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     14   11  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(z),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     13   10  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     12    9  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(z))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     11    8  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     10    7  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      9    6  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      2    2  Exit: mult(s(s(s(s(s(s(s(s(s(...))))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     16    2  Call: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
     16    2  Fail: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(s(s(...))))))))),z) ? 
      2    2  Redo: mult(s(s(s(s(s(s(s(s(s(...))))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      6    3  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      7    4  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(s(z)))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      8    5  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(s(z))))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
      9    6  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(s(z)))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     10    7  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(s(z))))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     11    8  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(s(z)))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     12    9  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(s(z))),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     13   10  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(s(z)),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     14   11  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),s(z),s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     15   12  Redo: add(s(s(s(s(s(s(s(s(s(...))))))))),z,s(s(s(s(s(s(s(s(s(...)))))))))) ? 
     16   13  Call: add(s(s(s(s(s(s(s(s(s(...))))))))),_458,_460) ? 
     16   13  Exit: add(s(s(s(s(s(s(s(s(s(...))))))))),z,s(s(s(s(s(s(s(s(s(...)))))))))) ?
```

## Thanks
To my professor [O. Raggos](https://thalis.math.upatras.gr/~ragos/) that introduced me to Mathematical Logic and Prolog.
