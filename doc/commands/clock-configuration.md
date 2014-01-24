# Clock command

## Request

<Buffer 01 01 0a ff 06 00 17 01 0e 0a 20 11 bd 02 03>
[1,1,10,255,6,0,23,1,14,10,32,17,189,2,3]

01: 01   1 OK - Init Sequence
02: 01   1 OK - Init Sequence
03: 0a  10 OK - Command type
04: ff 255 OK - Request
05: 06   6 ?? - ? Acknowledge
06: 00   0 ?? - ? Blank
07: 17  23 OK - Jour de l'année
08: 01   1 OK - Mois de l'année
09: 0E  14 OK - Année depuis 2000
10: 0A  10 OK - Heure de la journée
11: 20  32 OK - Minutes
12: 11  17 OK - Secondes
13: BD 189 ?? - Seems Random -> Milli seconds ?
14: 02   2 ?? - Seems Random -> Nano seconds ?
15: 03   3 OK - End of transmission character


## Response

<Buffer 01 01 0a 00 00 00 3f d2 03>
[1,1,10,0,0,0,63,210,3]

01: 01   1 OK - Init sequence
02: 01   1 OK - Init sequence
03: 0a  10 OK - Command Type
04: 00   0 OK - Response
05: 00   0 ?? - ? Blank
06: 00   0 ?? - ? Blank
07: 3f  63 ?? -
08: d2 210 ?? -
09: 03   3 OK - End of transmission character

