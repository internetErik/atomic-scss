# atomic-scss
Atomic Css library with additional helpers

## How to use

Install with npm

`npm install --save atomic-scss`

Include the scss into your own project

`@import "../../node_modules/atomic-scss/scss/atomic";`

*See example usage [here](https://github.com/internetErik/atomic-scss-starter-kit/blob/master/client/scss/atomic.scss)*

Start using atomic styles!

e.g., 
`p20` => `padding: 20px;`

## Supported Styles

The class names follow (for the most part) emmet syntax. ([cheat sheet](http://docs.emmet.io/cheat-sheet/))

* Padding (`p#`, `pt#`, `pb#`, `pl#`, `pr#`, `p0-#`, `p#-0`)
* Margin (`m#`, `mt#`, `mb#`, `ml#`, `mr#`, `m0-#`, `m#-0`, `m0-auto`)
* Height (`h#`, `h#%`, `mih100%`, `mah100%`)
* Width (`w#`, `w#%`)
* Top (`t#`, `t#%`)
* Bottom (`b#`, `b#%`)
* Left (`l#`, `l#%`)
* Right (`r#`, `r#%`)
* Z-Index
* Display (`dn`, `db`, `d-i`, `dib`)
* Flexbox (`df`, dif`)
  * Flex Direction (`fxdr`, `fxdc`, `fxdrr`, `fxdcr`)
  * Flex Wrap (`fxwn`, `fxww`, `fxwr`)
  * Justify Content (`jcfs`, `jcfe`, `jcc`, `jcsb`, `jcsa`)
  * Align Items (`aib`, `aic`, `asa`, `asb`, `asc`)
  * Order (`ord#`)
* Position (`poss`, `posa`, `posr`, `posf`)
* Overflow (`oh`, `oa`, `oyh`, `oya`, `oxh`, `oxa`)
* Float (`fll`, `flr`, `fln`)
* Clear (`clb`, `cll`, `clr`)
* Font
  * Font Style
  * Font Weight
  * Font Size

## Recommendations

Pair with [unCSS](https://github.com/giakki/uncss) in some form in order to remove unused styles in the end. However, if you don't do this the added weight isn't all too bad.

Here is an [atomic-scss-starter-kit](https://github.com/internetErik/atomic-scss-starter-kit/) that I also maintain that can provide some sample usage.

## Thanks

Thanks to yahoo for poneering this technique (as far as I know).  

Also see [acss](http://acss.io).

## License

[MIT license](LICENSE.md)

