---
title: "A python implementation of the CORDIC algorithm"
date: 2021-12-24 09:36:08 +0000
gist: https://gist.github.com/mlliarm/be90fc60a0e0ff746fe457dd9c53cd7b
---

# What
According to the [lemma](https://en.wikipedia.org/wiki/CORDIC#Implementation) in the English Wikipedia:

> CORDIC (for COordinate Rotation DIgital Computer), also known as Volder's algorithm, or: Digit-by-digit method Circular CORDIC (Jack E. Volder),[1][2] Linear CORDIC, Hyperbolic CORDIC (John Stephen Walther),[3][4] and Generalized Hyperbolic CORDIC (GH CORDIC) (Yuanyong Luo et al.),[5][6] is a simple and efficient algorithm to calculate trigonometric functions, hyperbolic functions, square roots, multiplications, divisions, and exponentials and logarithms with arbitrary base, typically converging with one digit (or bit) per iteration. CORDIC is therefore also an example of digit-by-digit algorithms. CORDIC and closely related methods known as pseudo-multiplication and pseudo-division or factor combining are commonly used when no hardware multiplier is available (e.g. in simple microcontrollers and FPGAs), as the only operations it requires are additions, subtractions, bitshift and lookup tables. As such, they all belong to the class of shift-and-add algorithms. In computer science, CORDIC is often used to implement floating-point arithmetic when the target platform lacks hardware multiply for cost or space reasons.

# Why
About three years ago I posted [this question](https://www.reddit.com/r/mathematics/comments/be6vsw/fast_calculation_of_trig_functions) at [r/mathematics](https://www.reddit.com/r/mathematics/) community over Reddit.

This resulted to a very vibrant discussion and among the many solutions proposed was CORDIC.

I've pretty much translated [this](https://en.wikipedia.org/wiki/CORDIC#Implementation) Octave/Matlab code from the English wikipedia lemma mentioned earlier, to Python3 + NumPy that I know fairly well.

# Code

```python
import numpy as np

pi = np.pi

def cordic(beta:float, n:int)-> list[float]:
	"""
	This function computes [cos(beta), sin(beta)] using n iterations. Increasing n will increase the precision.

	Args:
		beta (float): the angle in radians
		n (integer): the number of iterations. Maximum number of n is 23 due to the table sizes.
	
	Returns:
		result (list): a list with the cos(beta) as the first argument and sin(beta) as the second argument
	"""

	if beta < -pi/2 or beta > pi/2:
		if beta < 0:
			result = cordic(beta + pi, n)
		else:
			result = cordic(beta - pi, n) 
		result = -result
		return result

	# Initialization of tables of constants used by CORDIC
	# need a table of arctangents of negative powers of two, in radians:
	# angles = atan(2.^-(0:27));
	angles =  [
		0.78539816339745, 0.46364760900081, 0.24497866312686, 0.12435499454676, 
		0.06241880999596, 0.03123983343027, 0.01562372862048, 0.00781234106010, 
		0.00390623013197, 0.00195312251648, 0.00097656218956, 0.00048828121119, 
		0.00024414062015, 0.00012207031189, 0.00006103515617, 0.00003051757812, 
		0.00001525878906, 0.00000762939453, 0.00000381469727, 0.00000190734863, 
		0.00000095367432, 0.00000047683716, 0.00000023841858, 0.00000011920929, 
		0.00000005960464, 0.00000002980232, 0.00000001490116, 0.00000000745058 ]

	# and a table of products of reciprocal lengths of vectors [1, 2^-2j]:
	# Kvalues = cumprod(1./abs(1 + 1j*2.^(-(0:23))))
	Kvalues = [
		0.70710678118655, 0.63245553203368, 0.61357199107790, 0.60883391251775,
		0.60764825625617, 0.60735177014130, 0.60727764409353, 0.60725911229889,
		0.60725447933256, 0.60725332108988, 0.60725303152913, 0.60725295913894,
		0.60725294104140, 0.60725293651701, 0.60725293538591, 0.60725293510314,
		0.60725293503245, 0.60725293501477, 0.60725293501035, 0.60725293500925,
		0.60725293500897, 0.60725293500890, 0.60725293500889, 0.60725293500888 ]

	Kn = Kvalues[min(n, len(Kvalues))]

	# Initialize loop variables:
	v = [1, 0] # start with 2-vector cosine 1 and sine of zero
	power_of_two = 1
	angle = angles[0]

	# Iterations
	for j in range(0, n-1):
		if beta < 0:
			sigma = -1
		else:
			sigma = 1

		factor = sigma * power_of_two
		# Note the matrix multiplication can be done using scaling by powers of two and addition subtraction
		R = [[1, -factor], [factor, 1]]		
		v = np.dot(R, v)		
		beta = beta - sigma * angle # update the remaining angle
		power_of_two = power_of_two / 2		
		# update the angle from table, or eventually by just dividing by two
		if j + 2 > len(angles):
			angle = angle / 2
		else:
			angle = angles[j+1]

	# Adjust length of output vector to be [cos(beta), sin(beta)]
	v = v * Kn
	result = v	
	return result


def main() -> None:
	zero = cordic(0, 23)      # expected output: [1, 0]
	print(zero)
	pitwo = cordic(pi/2,23)    # expected output: [0, 1]
	print(pitwo)
	pialone = cordic(pi, 23) 	  # expected output: [-1, 0]	
	print(pialone)
	pithree = cordic(pi/3, 23)   # expected output: [0.5, sqrt(3)/2]	
	print(pithree[0], pithree[1])
	pifour = cordic(pi/4, 23)   # expected output: [sqrt(2)/2, sqrt(2)/2]
	print(pifour[0],pifour[1])
	pisix = cordic(pi/6, 23)   # expected output: [sqrt(3)/2, 0.5]
	print(pisix[0],pisix[1])
	pi32 = cordic(3*pi/2, 23) # expected output: [0, -1]  	
	print(pi32[0], pi32[1])	

if __name__ == "__main__":
	main()
```

# Thanks

I'd like to thank all those anonymous members of that subreddit for the great discussion that took place giving me many ideas among which to look for the CORDIC algorithm that I hadn't heard before.

If none had responded to my original question, this work wouldn't exist now. So, thank you `r/mathematics`.
