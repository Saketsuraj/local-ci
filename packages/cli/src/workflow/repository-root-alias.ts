export interface WorkflowSource {
  owner: string;
  repo: string;
  ref: string;
}

/** Resolve the non-standard `$/` shorthand against a workflow's own repository. */
export function resolveRepositoryRootAlias(uses: string, source?: WorkflowSource): string {
  if (!uses.startsWith("$/")) {
    return uses;
  }

  const suffix = uses.slice(2);
  return source ? `${source.owner}/${source.repo}/${suffix}@${source.ref}` : `./${suffix}`;
}
