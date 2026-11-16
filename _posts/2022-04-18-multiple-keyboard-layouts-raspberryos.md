---
title: "Multiple keyboard layouts on RaspberryOS 64 bit, Debian Bullseye"
date: 2022-04-18 10:17:44 +0000
gist: https://gist.github.com/mlliarm/ece40477845483c8d859324fa1ed3725
---

## Issue

The issue is that if one follows the usual steps, the `keyboard layout handler` doesn't change the layouts. [It's a very well known issue](https://forums.raspberrypi.com/viewtopic.php?t=329072).

## Solution

From the above link, and most specifically [this post](https://forums.raspberrypi.com/viewtopic.php?t=329072#p1971175), the solution is as follows:

- Edit `~/.config/lxsession/LXDE-pi/desktop.conf` and  under `[Session]` change `window_manager` from mutter to `openbox-lxde-pi`.
- Make sure that the `~/.config/lxpanel/LXDE-pi/panels/panel` file looks like as follows, if say you want the languages `en,gr,es,ru`:

```bash
Plugin {
  type=xkb
  Config {
    Model=pc105
    LayoutsList=us,gr,es,ru
    VariantsList=polytonic,cat,phonetic
    ToggleOpt=grp:shift_caps_toggle,grp:alt_shift_toggle
    KeepSysLayouts=0
    DisplayType=0
    FlagSize=2
  }
}
```

- Logout

When you relogin it should work.

## My settings

`~/.config/lxsession/LXDE-pi/desktop.conf`

```
[GTK]
sNet/ThemeName=PiXflat
iNet/DoubleClickTime=250

[Session]
window_manager=openbox-lxde-pi
```
`~/.config/lxpanel/LXDE-pi/panels/panel`

```
Plugin {
  type=xkb
  Config {
    Model=pc105
    LayoutsList=us,gr,es,ru
    VariantsList=,polytonic,cat,phonetic
    ToggleOpt=grp:shift_caps_toggle,grp:alt_shift_toggle
    KeepSysLayouts=0
    DisplayType=0
    FlagSize=2
  }
}
```
## Demo

- English

"the flesh covers the bone
and they put a mind
in there and
sometimes a soul,
and the women break
vases against the walls
and the men drink too
much..."

- Greek

«Με τόσα φύλλα σου γνέφει ο ήλιος καλημέρα
με τόσα φλάμπουρα λάμπει, λάμπει ο ουρανός
και τούτοι μεσ' τα σίδερα και κείνοι μεσ' το χώμα.»

- Catalan
 
"Molt exceŀlent, virtuós e gloriós príncep, rey spectant: jatsia per vulgada fama fo informat de vostres virtuts,..."

- Russian

"Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина. Первый из них, одетый в летнюю серенькую пару, был маленького роста, упитан, лыс, свою приличную шляпу пирожком нес в руке, а на хорошо выбритом лице его помещались сверхъестественных размеров очки в черной роговой оправе. Второй – плечистый, рыжеватый, вихрастый молодой человек в заломленной на затылок клетчатой кепке – был в ковбойке, жеваных белых брюках и в черных тапочках."
