import { CSS, KATEX_CSS, render } from "https://deno.land/x/gfm@0.2.5/mod.ts";
import { renderToString } from "preact-render-to-string";
import { fromFileUrl } from "std/path/mod.ts";

export const Markdown = async (path: string) => {
  const content = await (path.startsWith("file://")
    ? Deno.readTextFile(fromFileUrl(path))
    : fetch(path).then((res) => res.text()));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <style dangerouslySetInnerHTML={{ __html: KATEX_CSS }} />
      <div
        class="markdown-body"
        style={{ padding: "16px 32px" }}
        dangerouslySetInnerHTML={{
          __html: render(content, {
            allowIframes: true,
            allowMath: true,
            disableHtmlSanitization: true,
          }),
        }}
      />
    </>
  );
};

console.log(
  renderToString(
    await Markdown(new URL("./README.md", import.meta.url).toString())
  )
);
