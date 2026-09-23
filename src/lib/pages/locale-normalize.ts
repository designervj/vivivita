const isRecord = (value: unknown): value is Record<string, unknown> => {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
};

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export function syncEnglishEditsToCroatian<T>(nextValue: T, previousValue?: unknown): T {
  const next = clone(nextValue);

  const visit = (nextNode: unknown, previousNode: unknown) => {
    if (Array.isArray(nextNode)) {
      nextNode.forEach((item, index) => visit(item, Array.isArray(previousNode) ? previousNode[index] : undefined));
      return;
    }

    if (!isRecord(nextNode)) return;

    const previousRecord = isRecord(previousNode) ? previousNode : undefined;
    const nextEn = nextNode.en;
    const nextHr = nextNode.hr;
    const previousEn = previousRecord?.en;
    const previousHr = previousRecord?.hr;

    if (typeof nextEn === 'string') {
      const englishChanged = previousRecord ? nextEn !== previousEn : false;
      const croatianUnchanged = previousRecord ? nextHr === previousHr : nextHr === undefined;

      if ((englishChanged && croatianUnchanged) || nextHr === undefined) {
        nextNode.hr = nextEn;
      }
    }

    for (const [key, child] of Object.entries(nextNode)) {
      visit(child, previousRecord?.[key]);
    }
  };

  visit(next, previousValue);
  return next;
}
