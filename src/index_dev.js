import print	from './index';

const str = '@fBlue,bgGreen;Blue text, green background. @fRed;red text@bgBlue;, blue background.\\@bgRed; This must be not changed. Printing variable: $value;$end;';

print(str, {value: 12, end: '\n'});

print('test $a;',{a: 8}, 'final');

print(str, 'noStyles,final');

print(print('test $b;', 'final', {b: 12}, 'noVars'), 'final,encoding=utf8,test=2', {b: 12});
