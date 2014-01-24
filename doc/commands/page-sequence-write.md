# Page sequence write command

## Request

<Buffer 01 01 0e ff 04 00 00 00 01 00 a2 c5 03>
[1,1,14,255,4,0,0,0,1,0,162,197,3]

01: 01   1 OK - Init Sequence
02: 01   1 OK - Init Sequence
03: 08   8 OK - Command type
04: ff 255 OK - Request
05: 04   4 ?? - ?
06: 00   0 ?? - ? Blank
07: 00   0 ?? - ? Blank
08: 00   0 ?? - ? Blank
09: 01   1 ?? - ? Blank
10: 00   0 ?? - ? Blank
11: 0e 162 ?? - ?
12: 5a 197 ?? - ?
13: 03   3 OK - End of transmission character


## Response

<Buffer 01 01 0e 00 00 00 3e e2 03>
[1,1,14,0,0,0,62,226,3]

01: 01   1 OK - Init Sequence
02: 01   1 OK - Init Sequence
03: 0e  14 OK - Command Type
04: 00   0 OK - Response
05: 00   0 ?? - ? Blank
06: 00   0 ?? - ? Blank
07: 3e  62 ?? - ?
08: e2 226 ?? - ?
09: 03   3 OK - End of transmission character

