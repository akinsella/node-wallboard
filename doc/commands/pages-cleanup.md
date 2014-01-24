# Pages cleanup command

## Request

<Buffer 01 01 08 ff 00 00 0e 5a 03>
[1,1,8,255,0,0,14,90,3]

01: 01   1 OK - Init Sequence
02: 01   1 OK - Init Sequence
03: 08   8 OK - Command type
04: ff 255 OK - Request
05: 00   0 ?? - ? Blank
06: 00   0 ?? - ? Blank
07: 0e  14 ?? - ?
08: 5a  90 ?? - ?
09: 03   3 OK - End of transmission character


## Response

<Buffer 01 01 08 00 00 00 3e 6a 03>
[1,1,8,0,0,0,62,106,3]

01: 01   1 OK - Init Sequence
02: 01   1 OK - Init Sequence
03: 08   8 OK - Command Type
04: 00   0 OK - Response
05: 00   0 ?? - ? Blank
06: 00   0 ?? - ? Blank
07: 3e  62 ?? - ?
08: 6a 106 ?? - ?
09: 03   3 OK - End of transmission character

