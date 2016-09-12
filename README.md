# atomic-scss
Atomic SCSS library with additional helpers

## How to use

Install with npm

`npm install --save atomic-scss`

Import the scss into your own project from `node_modules` or copy the files into your own project.

*(See example usage [here](https://github.com/internetErik/atomic-scss-starter-kit/blob/master/client/scss/atomic.scss))*

Now, atomic scss should be available in your project!

### Examples
```
p20 = padding: 20px;
fz12 = font-size: 12px;
w50% = width: 50%;
w100%@sm = width: 100%; //at the breakpoint defined by $bp-sm
```

## Supported Atomic Styles

The class names follow emmet syntax (for the most part). ([cheat sheet](http://docs.emmet.io/cheat-sheet/))

* Height, Width, Padding, Margin, Top, Bottom, Left, Right (`h#`, `w#`, `p#`, `m#`, `t#`, `b#`, `l#`, `r#`)
  * Padding and Margin on sides (`pt#`, `pb#`, `pl#`, `pr#`, `p0-#`, `p#-0`, `mt#`, `mb#`, `ml#`, `mr#`, `m0-#`, `m#-0`) 
  * `Margin: 0 auto;` (`m0-auto`)
  * values: `0, 1, 5, 10, 15, 20, 25, 30, 40, 44, 50, 60, 70, 75, 80, 90, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 500, 600, 700, 800`
* Height, Width, Padding, Margin, Top, Bottom, Left, Right by percentage (`h#%`, `w#%`, `p#%`, `m#%`, `t#%`, `b#%`, `l#%`, `r#%`)
  * Min/Max Height and Width by percentage (`mih100%`, `mah100%`,`miw100%`, `maw100%`)
  * Height and Width by View Height and View Width (`h#vh`, `w#vh`, `h#vw`, `w#vw`)
    * values: `5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100`
  * percentage values: `1, 2, 3, 4, 5, 10, 12.25, 15, 20, 25, 30, 33.3333, 35, 40, 45, 50, 55, 60, 65, 66.6666, 70, 75, 80, 85, 90, 95, 100, 110, 120 ,130 ,140 ,150`
* Z-Index
  * values: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99`
* Display (`dn`, `db`, `d-i`, `dib`)
* Flexbox (`df`, `dif`)
  * Flex Direction (`fxdr`, `fxdc`, `fxdrr`, `fxdcr`)
  * Flex Wrap (`fxwn`, `fxww`, `fxwr`)
  * Justify Content (`jcfs`, `jcfe`, `jcc`, `jcsb`, `jcsa`)
  * Align Self (`aib`, `aic`, `asa`, `asb`, `asc`)
  * Order (`ord#`)
    * value: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99`
  * Flex Grow (`fxg#`)
    * values: `1, 2, 3, 4, 5`
  * Flex Shrink (`fxsh#`)
    * values: `1, 2, 3, 4, 5`
  * Flex Basis - in pixels (`fxb#`)
    * values: `0, 1, 5, 10, 15, 20, 25, 30, 40, 44, 50, 60, 70, 75, 80, 90, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 500, 600, 700, 800`
    * Flex Basis `auto` (`fxba`)
* Position (`poss`, `posa`, `posr`, `posf`)
* Overflow (`oh`, `oa`, `oyh`, `oya`, `oxh`, `oxa`)
* Float (`fll`, `flr`, `fln`)
* Clear (`clb`, `cll`, `clr`)
* Text Align (`tac`. `tar`. `taj`)
* Text Transform (`ttu`, `ttn`)
* Text Decoration (`tdn`, `tdu`)
* Word Break (`wobn`, `wobk`, `wobba`, `wownm`, `wown`, `wowu`, `wows`, `wowb` )
* Line Height (`lh1`, `lh1.2`, `lh1.3`, `lh1.4`, `lh1.5`, `lh2`)
* Font
  * Font Style (`fsi`, `fso`)
  * Font Weight (`fw#`)
    * values: `100, 200, 300, 400, 500, 600, 700, 800, 900`
  * Font Size (`fz#`)
    * values: `10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 34, 36, 42, 48`
  * Font Family (`ffs`, `ffss`)
* (text) Color (`c-<color>`)
  * (text) Color on hover (`c-<color>:h`)
  * values: `white, lightgray, gray, black`
* Text Shadow (`tsh1-1-1-<color>`)
	* values: `white, lightgray, gray, black`
* Background Color (`bgc-<color>`)
  * Background Color `transparent` (`bgct`)
  * Background Color on hover (`bgc-<color>:h`)
    * Background Color `transparent` on hover (`bgct:h`)
  * values: `white, lightgray, gray, black `
* Opacity (`op#`)
  * values: `0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1`
* Cursor (`curp`, `curc`)
* List Style (`lsn`)
* Borders (`bdn`, `bd1-s-<color>`)
  * Borders on one side (`bt1-s-<color>`, `bb1-s-<color>`, `br1-s-<color>`, `br1-s-<color>`) 
  * values: `white, lightgray, gray, black `
* Border Radius (`bdrs#`)
  * values: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`
* Breakpoint `@md` = `784px` by default
    * Height, Width, Padding, Margin, Top, Bottom, Left, Right (`h#@md`, `w#@md`, `p#@md`, `m#@md`, `t#@md`, `b#@md`, `l#@md`, `r#@md`)
      * Padding and Margin on sides (`pt#@md`, `pb#@md`, `pl#@md`, `pr#@md`, `p0-#@md`, `p#-0@md`, `mt#@md`, `mb#@md`, `ml#@md`, `mr#@md`, `m0-#@md`, `m#-0@md`) 
      * `Margin: 0 auto;` (`m0-auto@md`)
      * values: `0, 1, 5, 10, 15, 20, 25, 30`
    * Height, Width, Padding, Margin, Top, Bottom, Left, Right by percentage (`h#%@md`, `w#%@md`, `p#%@md`, `m#%@md`, `t#%@md`, `b#%@md`, `l#%@md`, `r#%@md`)
      * Min/Max Height and Width by percentage (`mih100%@md`, `mah100%@md`,`miw100%@md`, `maw100%@md`)
      * percentage values: `1, 2, 3, 4, 5, 10, 12.25, 15, 20, 25, 30, 33.3333, 35, 40, 45, 50, 55, 60, 65, 66.6666, 70, 75, 80, 85, 90, 95, 100, 110, 120 ,130 ,140 ,150`
  * Display (`dn@md`, `db@md`, `d-i@md`, `dib@md`)
  * Flexbox (`df@md`, `dif@md`)
    * Flex Direction (`fxdr@md`, `fxdc@md`, `fxdrr@md`, `fxdcr@md`)
    * Flex Wrap (`fxwn@md`, `fxww@md`, `fxwr@md`)
    * Justify Content (`jcfs@md`, `jcfe@md`, `jcc@md`, `jcsb@md`, `jcsa@md`)
    * Align Items (`aib@md`, `aic@md`, `asa@md`, `asb@md`, `asc@md`)
  * Position (`poss@md`, `posa@md`, `posr@md`, `posf@md`)
  * Float (`fll@md`, `flr@md`, `fln@md`)
  * Font Size (`fz#@md`)
    * values: `10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 34, 36, 42, 48`
* Breakpoint `@sm` = `560px` by default
    * Height, Width, Padding, Margin, Top, Bottom, Left, Right (`h#@md`, `w#@md`, `p#@md`, `m#@sm`, `t#@sm`, `b#@sm`, `l#@sm`, `r#@sm`)
      * Padding and Margin on sides (`pt#@sm`, `pb#@sm`, `pl#@sm`, `pr#@sm`, `p0-#@sm`, `p#-0@sm`, `mt#@sm`, `mb#@sm`, `ml#@sm`, `mr#@sm`, `m0-#@sm`, `m#-0@sm`) 
      * `Margin: 0 auto;` (`m0-auto@sm`)
      * values: `0, 1, 5, 10, 15, 20, 25, 30`
    * Height, Width, Padding, Margin, Top, Bottom, Left, Right by percentage (`h#%@sm`, `w#%@sm`, `p#%@sm`, `m#%@sm`, `t#%@sm`, `b#%@sm`, `l#%@sm`, `r#%@sm`)
      * Min/Max Height and Width by percentage (`mih100%@sm`, `mah100%@sm`,`miw100%@sm`, `maw100%@sm`)
      * percentage values: `1, 2, 3, 4, 5, 10, 12.25, 15, 20, 25, 30, 33.3333, 35, 40, 45, 50, 55, 60, 65, 66.6666, 70, 75, 80, 85, 90, 95, 100, 110, 120 ,130 ,140 ,150`
  * Display (`dn@sm`, `db@sm`, `d-i@sm`, `dib@sm`)
  * Flexbox (`df@sm`, `dif@sm`)
    * Flex Direction (`fxdr@sm`, `fxdc@sm`, `fxdrr@sm`, `fxdcr@sm`)
    * Flex Wrap (`fxwn@sm`, `fxww@sm`, `fxwr@sm`)
    * Justify Content (`jcfs@sm`, `jcfe@sm`, `jcc@sm`, `jcsb@sm`, `jcsa@sm`)
    * Align Items (`aib@sm`, `aic@sm`, `asa@sm`, `asb@sm`, `asc@sm`)
  * Position (`poss@sm`, `posa@sm`, `posr@sm`, `posf@sm`)
  * Float (`fll@sm`, `flr@sm`, `fln@sm`)
  * Font Size (`fz#@sm`)
    * values: `10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 34, 36, 42, 48`

## Available Helper Classes

* Clearfix (`clearfix`)
* Truncate and add ellipsis to text (`truncate-text`)
* Make an object into a circle (`round-element`)
* Show and hide an element with checkbox
  * `<input type="checkbox" class="toggle-sibling"><span class="toggle-sibling-target">Hidden Until Checkbox is on</span>` 
* Center Element Vertically
  * With relative position (`vertical-align`)
  * With absolute position (`vertical-align-absolute`)
  * With fixed position (`vertical-align-fixed`) 
  * All of these at `@md` and `@sm`
    * `vertical-align@md`, `vertical-align@sm`
    * `vertical-align-absolute@md`, `vertical-align-absolute@sm`
    * `vertical-align-fixed@md`, `vertical-align-fixed@sm`
* Center Element Horizontally
  * With relative position (`horizontal-align`)
  * With absolute position (`horizontal-align-absolute`)
  * With fixed position (`horizontal-align-fixed`) 
  * All of these at `@md` and `@sm`
    * `horizontal-align@md`, `horizontal-align@sm`
    * `horizontal-align-absolute@md`, `horizontal-align-absolute@sm`
    * `horizontal-align-fixed@md`, `horizontal-align-fixed@sm`
* Center Element Vertically and Horizontally
  * With relative position (`transform-center`)
  * With absolute position (`transform-center-absolute`)
  * With fixed position (`transform-center-fixed`)
  * All of these at `@md` and `@sm`
    * `transform-center@md`, `transform-center@sm`
    * `transform-center-absolute@md`, `transform-center-absolute@sm`
    * `transform-center-fixed@md`, `transform-center-fixed@sm`
* Transforms
  * Rotate Z (`rotateZ#`) 
    * values: `45, 90, -45, -90`
  * Scale (`scale#`) 
    * values: `50, 150, 200` 
* Transition with `.3s ease-in-out` (`transition-<property>`) 
  * values: `opacity, color, background, transform, top, bottom, left, right, all`

## SCSS Variables (Should be overridden by user)

`$color-black    : #101010 !default;`

`$color-white    : #fefefe !default;`

`$color-lightgray: lightgray !default;`

`$color-gray     : gray !default;`


`$bp-md : 784px !default;`

`$bp-sm : 560px !default;`

*The `!default` property means that it assigns this value only if the variable isn't already defined! So this won't override your own variables*

## Recommendations

Import atomic into your scss at a fairly high level so the classes are easier to override

This framework comes with some variables it defines for colors and breakpoints (see above). But you can override them by defining them **before** the import of the atomic.

Pair with [unCSS](https://github.com/giakki/uncss) in some form in order to remove unused styles in the end. However, if you don't do this the added weight isn't all too bad.

Here is an [atomic-scss-starter-kit](https://github.com/internetErik/atomic-scss-starter-kit/) that I also maintain that can provide some sample usage.

## Thanks

Thanks to yahoo for pioneering this technique (as far as I know).  

Also see [acss](http://acss.io).

## License

[MIT license](LICENSE.md)

