import type { marked } from "https://esm.sh/v134/@types/marked@5.0.2/index.d.ts"

/**
 * Mangle email address
 *
 * @returns A {@link marked.MarkedExtension | MarkedExtension} to be passed to {@link marked.use | `marked.use()`}
 */
export function mangle(): marked.MarkedExtension;
