# jspot

This is a fork of [jspot](https://github.com/praekelt/jspot) because it seems unmaintained since the leaving of its principal maintainer from [praekelt](https://github.com/praekelt)

Extracts gettext strings from Javascript files into pot files.

```
$ jspot extract file.js -k _
```

```javascript
_('foo');
_.ngettext('bar', 'bars', 23);
```

## How to install

```
# npm install -g jspot
```

## How to use

```
$ jspot --help

Usage: jspot <command>

command
  extract     Extract source from javascript files into pot files
  json        Convert po files to Jed-compatible json files (using po2json)

$ jspot extract --help

Usage: jspot extract <source>... [options]

source     The source files to extract from.

Options:
   -t DIR, --target DIR      Directory to write pot files to.  [.]
   -k WORD, --keyword WORD   Keyword to search for in source  [gettext]
   --header NAME:VALUE       Set a header for the written pot files

Extract source from javascript files into pot files
```
