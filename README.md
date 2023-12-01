# deno-vendor-bug

## How to reproduce.

1. Run without vendoring and check that's working

```sh
deno run -A main.tsx
```

2. Now, generator vendor folder

```sh
rm -rf vendor
deno vendor main.tsx
```

3. Try run with --no-remote

```sh
deno run -A --no-remote --import-map=vendor/import_map.json main.tsx
```

you'll receive:

```
error: Not a directory (os error 20)
    at file:///deno-vendor-bug/vendor/deno.land/x/gfm@0.2.5/deps.ts:10:25
```