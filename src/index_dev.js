import print	from './index';

const str = '%fBlue,bgGreen;Blue text, green background. %fRed;red text%bgBlue;, blue background.\\%bgRed; This must be not changed.';

print(str);

print('test $a;',{a: 8}, 'final');

print(str, 'noStyles,final');

print(print('test $b;', 'final', {b: 12}), 'final', {b: 12});
