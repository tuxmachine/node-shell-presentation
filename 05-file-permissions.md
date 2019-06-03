## Detour no. 1

Unix file permissions

---

Every file in unix filesystem has 3-bit permission flags determining 
_read_, _write_ and _execute_ permission for _user_, _group_, and _other_

|       | read(4) | write(2) | execute(1) |      |
| ----- | ------- | -------- | ---------- | ---- |
| user  | 1       | 1        | 0          | => 6 |
| group | 1       | 0        | 0          | => 4 |
| other | 1       | 0        | 0          | => 4 |