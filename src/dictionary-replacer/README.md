# Dictionary replacer

Tests:
input: “”, dictionary: empty, output: “”

input: “$temp$”, dictionary: [“temp”, “temporary”], output: “temporary”

input: “$temp$ here comes the name $name$”, dictionary: [“temp”, “temporary”] [“name”, “John Doe”], output: “temporary here comes the name John Doe”

Schwierigkeit: Einfach
Dauer: Ca. 5-20 Minuten
Quelle: <http://codingdojo.org/kata/DictionaryReplacer/>
