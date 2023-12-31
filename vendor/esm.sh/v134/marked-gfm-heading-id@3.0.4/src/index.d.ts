import type { marked } from "https://esm.sh/v134/@types/marked@5.0.2/index.d.ts"

/** Options for configuring marked-gfm-heading-id extension */
interface GfmHeadingIdOptions {
  /** A string to prepend to all ids. Empty by default. */
  prefix?: string;
}

/**
 * Add `id` attribute to headings (h1, h2, h3, etc) like GitHub.
 *
 * @param options Options for the extension
 * @returns A {@link marked.MarkedExtension | MarkedExtension} to be passed to {@link marked.use | `marked.use()`}
 */
export function gfmHeadingId(options?: GfmHeadingIdOptions): marked.MarkedExtension;
