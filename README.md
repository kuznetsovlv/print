# Printing method

Extracts method `print` to formated print into stdout.

[Progect on GitHub.](https://github.com/kuznetsovlv/print "Link to GitHub repository")

## Content.
- [Content.](#user-content-content "Conten")
- [Installation.](#user-content-installation "Installation")
- [How to use.](#user-content-how-to-use "How to use")
	* [Common.](#user-content-common "Common")
	* [String.](#user-content-string "String")
		* [Tags.](#user-content-tags "Tags")
			* [Format tags.](#user-content-format-tags "Format tags")
			* [Variable tags.](#user-content-variable-tags "Variable tags")
	* [Optional arguments.](#user-content-optional-arguments "Optional arguments")
		* [Variables](#user-content-variables)
		* [Options](#user-content-options)
- [Example.](#user-content-example "Example")

## Installation.
```bash
npm install print-str --save
```

## How to use.
### Common.
The library `print-str` extracts the only method `print`. The `print` waits one ***required*** argument and any number of ***optional*** arguments. ***First required*** argument is _string_ argument `str` - a tagged string you want to display. Other arguments may be added in any order after `str` and able to be one of type:
* _Object_ of the variables to be substituted into `str`,
* _String_ of the options that modify method's work.

### String.
The string to display should be added as first argument `str`. It may have tags to format it.

#### Tags.
There are two type of available tags: _format tags_ and _varaibles_. Both type of tags may be shielded by prior symbol `\` (realy to shield `\` you need insert into string this symbol dubled: `\\`).

##### Format tags.
*Format tags* start with symbol `@` and ends with `;`. Between these two symbols must be one or more format options separeted by commas. For example `@fBlue,bgGreen;`. These options define format of the following text. Unsupported options are ignored. All available options are in the list below:

* Common optios:
	* Reset
	* Bright
	* Dim
	* Underscore
	* Blink
	* Reverse
	* Hidden
* Font color options:
	* fBlack
	* fRed
	* fGreen
	* fYellow
	* fBlue
	* fMagenta
	* fCyan
	* fWhite
* Background color options:
	* bgBlack
	* bgRed
	* bgGreen
	* bgYellow
	* bgBlue
	* bgMagenta
	* bgCyan
	* bgWhite

##### Variable tags.
*Variable tags* starts with symbol `$`  and ends with `;`. Between these two symbols must be a name of the variable to substitute. The variable must be defined as a key of one of the following _object_ arguments. If variable is not defined in these arguments it would not substituted.

### Optional arguments.
Optional arguments follow first `str` argument. They may be addedin any order. There are two types of optional arguments.

#### Variables.
If optional argument is type of `object` it will interpreted as a set of variables.

#### Options
If optional argument is type of `string` it will interpreted as a list of options. Alloptions in string separated by commas. Option may consist of it's name and value. Value separated from name by `=`. If option has only name but not value nor symbol `=`, it's value interpeted as `true`. If option contains `=` but no value after it, option's value is empty string. All available options are below:

* `[noStyles = false]` - if `true` - all format tags will be interpreted as a text.
* `[noVars = false]` - if `true` - all variable tags will be interpreted as a text.
* `[final = false]` - `true` means that output finished and after output method will reset all styles and print symbol `\n`.
* `[encoding = 'utf8']` - encoding.

## Example.
```javascript
import print	from 'print-str';

const str = '@fBlue,bgGreen;Blue text, green background. @fRed;red text@bgBlue;, blue background.\\@bgRed; This must be not changed. Printing variable: $value;$end;';

print(str, {value: 12, end: '\n'});

print(str, 'noStyles,final');
```
