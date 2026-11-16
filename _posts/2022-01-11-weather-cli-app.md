---
title: "Weather CLI app"
date: 2022-01-11 04:16:27 +0000
gist: https://gist.github.com/mlliarm/768d4111840dc1af976b33d978bf7de0
---

## What

A simple CLI script that tells the weather of any given location.

It uses the `https://wttr.in/` service along with a `curl`.

## Why
I love CLI GNU/Linux apps.

## Code
```bash
#!/bin/bash
weather() {
     if [ ! -z $1 ]
     then
         curl -4 http://wttr.in/$1
     else
         curl -4 http://wttr.in/Barcelona
     fi
  
}
weather $1
exit
```

## Example

Open a GNU/Linux terminal.

### Default
Get your default weather. In my case my default case is Barcelona/ES. Feel free to change it with your default location.

When I type:

```bash
$weather
```

it gives for me the following ASCII weather table, but it's much more colorful and much more pretty than this.

Don't take my word for granted, simply visit [https://wttr.in/](https://wttr.in/).

```
Weather report: Barcelona

      \   /     Clear
       .-.      +8(5) °C       
    ― (   ) ―   ↓ 13 km/h      
       `-’      10 km          
      /   \     0.0 mm         
                                                       ┌─────────────┐                                                       
┌──────────────────────────────┬───────────────────────┤  Thu 25 Nov ├───────────────────────┬──────────────────────────────┐
│            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│     \   /     Sunny          │     \   /     Sunny          │     \   /     Clear          │     \   /     Clear          │
│      .-.      +9(7) °C       │      .-.      +10(7) °C      │      .-.      +10(8) °C      │      .-.      +10(7) °C      │
│   ― (   ) ―   → 11-14 km/h   │   ― (   ) ―   → 14-20 km/h   │   ― (   ) ―   → 17-24 km/h   │   ― (   ) ―   ↘ 19-22 km/h   │
│      `-’      10 km          │      `-’      10 km          │      `-’      10 km          │      `-’      10 km          │
│     /   \     0.0 mm | 0%    │     /   \     0.0 mm | 0%    │     /   \     0.0 mm | 0%    │     /   \     0.0 mm | 0%    │
└──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
                                                       ┌─────────────┐                                                       
┌──────────────────────────────┬───────────────────────┤  Fri 26 Nov ├───────────────────────┬──────────────────────────────┐
│            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│     \   /     Sunny          │     \   /     Sunny          │     \   /     Clear          │     \   /     Clear          │
│      .-.      +8(6) °C       │      .-.      +9(7) °C       │      .-.      +10(9) °C      │      .-.      10 °C          │
│   ― (   ) ―   → 9-14 km/h    │   ― (   ) ―   → 9-14 km/h    │   ― (   ) ―   ↑ 6-10 km/h    │   ― (   ) ―   ← 6-9 km/h     │
│      `-’      10 km          │      `-’      10 km          │      `-’      10 km          │      `-’      10 km          │
│     /   \     0.0 mm | 0%    │     /   \     0.0 mm | 0%    │     /   \     0.0 mm | 0%    │     /   \     0.0 mm | 0%    │
└──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
                                                       ┌─────────────┐                                                       
┌──────────────────────────────┬───────────────────────┤  Sat 27 Nov ├───────────────────────┬──────────────────────────────┐
│            Morning           │             Noon      └──────┬──────┘     Evening           │             Night            │
├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│     \   /     Sunny          │     \   /     Sunny          │    \  /       Partly cloudy  │    \  /       Partly cloudy  │
│      .-.      +9(5) °C       │      .-.      +9(6) °C       │  _ /"".-.     +9(6) °C       │  _ /"".-.     +9(5) °C       │
│   ― (   ) ―   → 27-34 km/h   │   ― (   ) ―   → 29-40 km/h   │    \_(   ).   → 28-41 km/h   │    \_(   ).   → 32-46 km/h   │
│      `-’      10 km          │      `-’      10 km          │    /(___(__)  10 km          │    /(___(__)  10 km          │
│     /   \     0.0 mm | 0%    │     /   \     0.0 mm | 0%    │               0.0 mm | 0%    │               0.0 mm | 0%    │
└──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
Location: Barcelona, BCN, CAT, España [41.3825596,2.1771353]

Follow @igor_chubin for wttr.in updates
```

### Any city

Type:

```bash
$weather CITY_NAME
```

and you'll get a similar table as the previous one, with data related to the "CITY_NAME" that you've put.
