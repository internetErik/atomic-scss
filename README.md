# atomic-scss
Atomic SCSS library with additional helpers

## How to use

Install with npm

`npm install --save atomic-scss`

Import the scss into your own project from `node_modules` or copy the files into your own project.

*(See example usage [here](https://github.com/internetErik/atomic-scss-starter-kit/blob/master/client/scss/atomic.scss))*

It is highly recommended that you also copy the scss from [_atomic-config-sample.scss](_atomic-config-sample.scss) into your project and use it as a starting point to configure `atomic-scss`.

## Configuring

When you are generating atomic classes think of as generating an API that your application will use for styles (the css class names). Part of the configuration is for generating these class names, while another part is for providing the values that are going to be used.

Here is some sample configuration:

```scss
//        : (name: '<api-media-query>', cond: '<media-query-condition>');
$bp-sm-mx : (name: '\\@sm',             cond: 'all and (max-width: 500px)');

$width: (
//(vals: ('<api-value>': <value>,), bp: $<breakpoint-variable>),
  (vals: ('1': 1px, '2': 2px,)),
  (vals: ('1': 1px, '2': 2px), bp: $bp-sm-mx,),
);

$width-perc: (
  (vals: ('10': 10%, '20': 20%,)),
  (vals: ('10': 10%, '20': 20%,), bp: $bp-sm-mx,),
);

// This is the variable atomic-scss uses to generate the styles
$atomic-config:(
//('<attribute>', '<api-base>', '<api-unit>','<api-post>', $<sass-variable>),
  ('width',       'w',          '',          '',           $width),
  // generate percentages
  ('width',       'w',          '\\%',       '',           $width-perc),
  // generate hover styles
  ('width',       'w',          '\\%\\:h',   ':hover',     $width-perc),
);

```

This would generate:

```css
.w1 {
  width: 1px;
}

.w2 {
  width: 2px;
}

.w10\% {
  width: 10%;
}

.w20\% {
  width: 20%;
}

.w10\%\:h:hover {
  width: 10%;
}

.w20\%\:h:hover {
  width: 20%;
}

@media all and (max-width: 500px) {
  .w1\@sm {
    width: 1px;
  }

  .w2\@sm {
    width: 2px;
  }

  .w10\%\@sm {
    width: 10%;
  }

  .w20\%\@sm {
    width: 20%;
  }

  .w10\%\:h\@sm:hover {
    width: 10%;
  }

  .w20\%\:h\@sm:hover {
    width: 20%;
  }
}
```

Classes are generated on this formula:

```
// styles generated without media queries
.<api-base><api-unit><api-post> {
  <attribute>: <value>;
}

// and for styles generated in media queries
@media <media-query-condition> {
  .<api-base><api-unit><api-media-query><api-post> {
    <attribute>: <value>;
  }
}
```

## On Version 2

In this version 2 release configuration is a bit more complicated, but the trade off was:

* Now extensible
  * Add or remove whatever styles you want!
  * Add as many breakpoints as you want for each style
* Now there is greater control over breakpoints
  * `min-width` or `max-width`. Why not both? Also height.
* Now you can control the syntax of the classNames generated
  * I use `p10` for `padding: 10px`, but maybe you want `p(10px)` or `p-small`. Now you can do this.
* (Self-servicing bonus: code is much shorter and so easier to maintain for me.)

## Why use this library `atomic-scss`?

I think the sweet spot for this is for individuals or teams that work on many different projects and want to minimize the number of CSS APIs that one needs to learn or study. (Yes, CSS classes are like style APIs).

It is fully expected that you will pair this with semantic class names following whatever methodology you want. You can choose to use as much or as little classes generated by `atomic-scss` as you want, and makes sense to you.

It also would be easy to use this along with `styled-components`.

### What makes sense to me (the author)?

While I use semantic class names, I try to do as much as possible with atomic classes. This is perhaps an extreme, but it works for me very well. (The most useful thing about semantic class names in my workflow is actually how I'm able to highlight them and then use `command + d` to select all of the elements in sublime text...)

When I return to old projects that I haven't touched in a while - even when they are very large - there are usually only 250 lines of sass (including mostly lines that are just `}`). This makes it easier for me or a co-worker to jump onto an old project to do a quick layout fix. It also gives me higher confidence that what I add to the CSS isn't going to break anything.

## Why `atomic-scss` and not some other atomic library?

Use what makes sense for you. This project was optimized for a workflow where I don't know what frameworks, libraries or platforms I will be working on in the future. That is, I don't want to assume that I will be using `gulp` or `reactjs` or whatever other platform.

## Other Recommendations

Import atomic into your scss above just about everything else so the atomic classes are overrided by anything else in the cascade.

This framework comes with some variables it defines for colors and breakpoints. But you can override them by defining them **before** the import of the atomic (that is, include your variables higher than you import `atomic-scss`).

If possible, pair with [unCSS](https://github.com/giakki/uncss) (or some other package) in some form in order to remove unused styles in the end. However, if this doesn't work for you, you can just configure out the styles you aren't using (time consuming if you want to be perfect, but you can probably get a high percentage of the stuff you don't use very quickly).

If you're using webpack and want to remove unused styles, try the [purifycss-webpack](https://github.com/webpack-contrib/purifycss-webpack) plugin.

Here are some projects I have that use `atomic-scss` so you can work by example:

* [static-site-boilerplate](https://github.com/internetErik/static-site-boilerplate)
  * A boilerplate for making static websites

Older versions of `atomic-scss` used in these projects:

* [keystone4-universal-react](https://github.com/internetErik/keystone4-universal-react)
  * A boilerplate for universal react websites/apps on keystone
* [atomic-scss-starter-kit](https://github.com/internetErik/atomic-scss-starter-kit/)
  * Really just a demo of `atomic-scss`

## Thanks

Thanks to yahoo for pioneering this technique (as far as I know).

Also see [acss](http://acss.io).

## License

[MIT license](LICENSE.md)

